import orderBy from 'lodash/orderBy'
import { buildStorageApi } from './api'

const API_BASE = ''
const ROOTS_RETRY_DELAYS = [150, 400, 800]

function normalizePath(path) {
  if (!path || path === '/') {
    return '/'
  }

  const normalized = `/${path}`.replace(/\/+/g, '/')
  return normalized.length > 1 && normalized.endsWith('/') ? normalized.slice(0, -1) : normalized
}

function toApiPrefix(path) {
  const normalized = normalizePath(path)

  if (normalized === '/') {
    return ''
  }

  return `${normalized.replace(/^\//, '')}/`
}

function normalizeTimestamp(value) {
  if (!value) {
    return value
  }

  const normalized = value.replace(' ', 'T')
  return normalized.includes('T') ? normalized : value
}

function buildBreadcrumbs(rootId, currentPath) {
  const normalizedPath = normalizePath(currentPath)

  if (normalizedPath === '/') {
    return rootId ? [{ name: rootId, path: '/' }] : []
  }

  const segments = normalizedPath.split('/').filter(Boolean)
  let nextPath = ''

  return [{ name: rootId, path: '/' }].concat(
    segments.map(function mapSegment(segment) {
      nextPath += `/${segment}`
      return {
        name: segment,
        path: nextPath
      }
    })
  )
}

function buildQuery(params) {
  if (!params) {
    return ''
  }

  const search = new URLSearchParams()

  Object.keys(params).forEach(function appendParam(key) {
    const value = params[key]

    if (value !== undefined && value !== null && value !== '') {
      search.set(key, value)
    }
  })

  const query = search.toString()
  return query ? `?${query}` : ''
}

async function requestJson(endpoint, params) {
  const response = await fetch(`${API_BASE}${endpoint}${buildQuery(params)}`, {
    cache: 'no-store',
    headers: {
      Accept: 'application/json'
    }
  })

  if (!response.ok) {
    const payload = await response.json().catch(function ignoreError() {
      return null
    })
    const errorMessage = payload && payload.message ? payload.message : 'Request failed'
    throw new Error(errorMessage)
  }

  return response.json()
}

function wait(duration) {
  return new Promise(function resolveAfterDelay(resolve) {
    window.setTimeout(resolve, duration)
  })
}

async function requestJsonWithRetry(endpoint, params, delays) {
  let lastError = null

  for (let index = 0; index <= delays.length; index += 1) {
    try {
      return await requestJson(endpoint, params)
    } catch (error) {
      lastError = error

      if (index === delays.length) {
        break
      }

      await wait(delays[index])
    }
  }

  throw lastError
}

function fileTypeLabel(item) {
  if (item.isDirectory) {
    return 'Folder'
  }

  const ext = (item.ext || '').toLowerCase()
  const map = {
    gz: 'GZ',
    zip: 'ZIP',
    txt: 'Text',
    csv: 'CSV',
    md: 'Markdown',
    log: 'Log',
    pdf: 'PDF',
    png: 'PNG Image',
    jpg: 'JPEG Image',
    jpeg: 'JPEG Image',
    xlsx: 'Excel',
    docx: 'Word',
    pptx: 'PowerPoint',
    xml: 'XML'
  }

  return map[ext] || (ext ? ext.toUpperCase() : 'File')
}

function sortItems(items, sortValue) {
  const parts = (sortValue || 'name.asc').split('.')
  const field = parts[0]
  const order = parts[1] === 'desc' ? 'desc' : 'asc'

  return orderBy(
    items,
    [
      function sortDirectoriesFirst(item) {
        return item.isDirectory ? 0 : 1
      },
      function sortField(item) {
        if (field === 'size') {
          return item.size || 0
        }

        if (field === 'updatedAt') {
          return item.updatedAt
        }

        if (field === 'type') {
          return item.typeLabel
        }

        return item.name.toLowerCase()
      }
    ],
    ['asc', order]
  )
}

function mapEntry(item) {
  const rawPath = String(item.path || '')
  const relativePath = normalizePath(rawPath)
  const fileName = item.name || relativePath.split('/').filter(Boolean).pop() || ''
  const ext = fileName.includes('.') ? fileName.split('.').pop().toLowerCase() : ''

  return {
    downloadPath: rawPath,
    key: relativePath,
    name: fileName,
    path: relativePath,
    isDirectory: Boolean(item.directory || item.isDirectory),
    size: item.size,
    ext,
    mimeType: item.mimeType,
    updatedAt: normalizeTimestamp(item.lastModified || item.updatedAt),
    typeLabel: fileTypeLabel({
      ...item,
      ext,
      isDirectory: Boolean(item.directory || item.isDirectory)
    })
  }
}

function triggerBrowserDownload(url, fallbackFileName) {
  const link = document.createElement('a')
  link.href = url

  if (fallbackFileName) {
    link.download = fallbackFileName
  }

  link.style.display = 'none'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

function extractFileNameFromDisposition(disposition, fallbackFileName) {
  if (!disposition) {
    return fallbackFileName
  }

  const matched = disposition.match(/filename="(.+)"/i)
  return matched && matched[1] ? matched[1] : fallbackFileName
}

async function downloadBlobResponse(response, fallbackFileName, defaultErrorMessage) {
  if (!response.ok) {
    const payload = await response.json().catch(function ignoreError() {
      return null
    })
    const errorMessage = payload && payload.message ? payload.message : defaultErrorMessage
    throw new Error(errorMessage)
  }

  const fileName = extractFileNameFromDisposition(response.headers.get('content-disposition'), fallbackFileName)
  const blob = await response.blob()
  const downloadUrl = window.URL.createObjectURL(blob)

  triggerBrowserDownload(downloadUrl, fileName)
  window.URL.revokeObjectURL(downloadUrl)
}

function toBatchDownloadPath(itemPath) {
  if (!itemPath) {
    return ''
  }

  return String(itemPath).replace(/^\/+/, '')
}

export function createStorageAdapter(protocol) {
  const api = buildStorageApi(protocol)
  let rootsRequest = null

  return {
    protocol,
    fetchRoots() {
      if (!rootsRequest) {
        rootsRequest = requestJsonWithRetry(api.roots.path, null, ROOTS_RETRY_DELAYS)
          .then(function mapRootsResponse(payload) {
            const buckets = payload && payload.data && Array.isArray(payload.data.buckets) ? payload.data.buckets : []

            return buckets.map(function mapBucket(bucket) {
              return {
                id: bucket.bucketName || bucket.name,
                name: bucket.name || bucket.bucketName,
                path: bucket.path || '/',
                readOnly: true
              }
            })
          })
          .catch(function resetRootsRequest(error) {
            rootsRequest = null
            throw error
          })
      }

      return rootsRequest
    },

    fetchTree(params) {
      return requestJson(`${api.list.path}/${encodeURIComponent(params.rootId)}`, {
        prefix: toApiPrefix(params.path)
      }).then(function mapTreeItems(payload) {
        const objects = payload && payload.data && Array.isArray(payload.data.objects) ? payload.data.objects : []

        return objects
          .filter(function onlyDirectories(item) {
            return Boolean(item.directory)
          })
          .map(function mapDir(item) {
            const normalizedPath = normalizePath(item.path)

            return {
              key: normalizedPath,
              rootId: params.rootId,
              title: item.name,
              path: normalizedPath,
              isLeaf: item.hasChildren === false,
              loaded: false
            }
          })
      })
    },

    fetchList(params) {
      const normalizedPath = normalizePath(params.path)

      return requestJson(`${api.list.path}/${encodeURIComponent(params.rootId)}`, {
        prefix: toApiPrefix(normalizedPath),
        condition: params.q || ''
      }).then(function mapListResponse(payload) {
        const objects = payload && payload.data && Array.isArray(payload.data.objects) ? payload.data.objects : []
        let items = objects.map(mapEntry)

        if ((params.type || 'all') !== 'all') {
          items = items.filter(function byType(item) {
            if (params.type === 'folder') {
              return item.isDirectory
            }

            return item.ext === params.type
          })
        }

        return {
          rootId: params.rootId,
          path: normalizedPath,
          breadcrumbs: buildBreadcrumbs(params.rootId, normalizedPath),
          items: sortItems(items, params.sort),
          total: items.length
        }
      })
    },

    async downloadFile(params) {
      const url = `${API_BASE}${api.download.path}/${encodeURIComponent(params.rootId)}${buildQuery({
        key: normalizePath(params.path).replace(/^\//, '')
      })}`

      const response = await fetch(url, {
        cache: 'no-store',
        headers: {
          Accept: 'application/octet-stream'
        }
      })

      await downloadBlobResponse(response, params.path.split('/').filter(Boolean).pop() || 'download', 'File download failed')

      return {
        success: true,
        rootId: params.rootId,
        path: params.path
      }
    },

    async downloadBatch(params) {
      const response = await fetch(`${API_BASE}${api.batchDownload.path}/${encodeURIComponent(params.rootId)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          params.paths.map(function mapPath(itemPath) {
            return toBatchDownloadPath(itemPath)
          })
        )
      })

      await downloadBlobResponse(response, 'batch-download.zip', 'Batch download failed')

      return {
        success: true,
        rootId: params.rootId,
        paths: params.paths
      }
    }
  }
}

export const ftpAdapter = createStorageAdapter('ftp')
export const s3Adapter = createStorageAdapter('s3')
