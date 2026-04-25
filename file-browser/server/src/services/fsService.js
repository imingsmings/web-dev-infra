const fs = require('fs/promises');
const path = require('path');
const archiver = require('archiver');
const { storageMounts } = require('../config');
const { normalizeVirtualPath, resolveMountedPath } = require('../utils/path');

function getProtocolMounts(protocol) {
  const protocolMounts = storageMounts[protocol];

  if (!protocolMounts) {
    const error = new Error(`Unsupported storage protocol: ${protocol}`);
    error.statusCode = 404;
    throw error;
  }

  return protocolMounts;
}

function getMount(rootId, protocol) {
  const mountMap = getProtocolMounts(protocol);
  const mountPath = mountMap[rootId];

  if (!mountPath) {
    const error = new Error(`Unknown root: ${rootId}`);
    error.statusCode = 404;
    throw error;
  }

  return mountPath;
}

function fileTypeLabel(entry) {
  if (entry.isDirectory) {
    return 'Folder';
  }

  const ext = (entry.ext || '').toLowerCase();
  const map = {
    zip: 'ZIP Archive',
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
    pptx: 'PowerPoint'
  };

  return map[ext] || (ext ? ext.toUpperCase() : 'File');
}

function formatTimestamp(dateValue) {
  const date = new Date(dateValue);
  const pad = function pad(value) {
    return String(value).padStart(2, '0');
  };

  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

function buildBreadcrumbs(rootId, currentPath) {
  const normalizedPath = normalizeVirtualPath(currentPath);

  if (normalizedPath === '/') {
    return [{ name: rootId, path: '/' }];
  }

  const segments = normalizedPath.split('/').filter(Boolean);
  let nextPath = '';

  return [{ name: rootId, path: '/' }].concat(
    segments.map(function mapSegment(segment) {
      nextPath += `/${segment}`;
      return {
        name: segment,
        path: nextPath
      };
    })
  );
}

function toVirtualPath(parentVirtualPath, entryName) {
  const normalizedParent = normalizeVirtualPath(parentVirtualPath);
  return normalizedParent === '/'
    ? `/${entryName}`
    : `${normalizedParent}/${entryName}`;
}

async function hasChildDirectories(targetDirectory) {
  const children = await fs.readdir(targetDirectory, {
    withFileTypes: true
  });

  return children.some(function hasDirectory(child) {
    return child.isDirectory();
  });
}

async function readProtocolDirectoryEntries(protocol, rootId, currentPath) {
  const mountPath = getMount(rootId, protocol);
  const paths = resolveMountedPath(mountPath, currentPath);
  const stats = await fs.stat(paths.resolvedTargetPath).catch(function onError() {
    return null;
  });

  if (!stats || !stats.isDirectory()) {
    const error = new Error('Directory not found.');
    error.statusCode = 404;
    throw error;
  }

  const children = await fs.readdir(paths.resolvedTargetPath, {
    withFileTypes: true
  });

  const entries = await Promise.all(
    children.map(async function mapEntry(child) {
      const absoluteChildPath = path.join(paths.resolvedTargetPath, child.name);
      const childStats = await fs.stat(absoluteChildPath);
      const ext = child.isDirectory() ? null : path.extname(child.name).replace(/^\./, '').toLowerCase();
      const entry = {
        name: child.name,
        path: toVirtualPath(paths.normalizedPath, child.name),
        isDirectory: child.isDirectory(),
        size: child.isDirectory() ? null : childStats.size,
        ext,
        mimeType: null,
        updatedAt: childStats.mtime.toISOString()
      };

      return {
        ...entry,
        hasChildren: child.isDirectory() ? await hasChildDirectories(absoluteChildPath) : false,
        typeLabel: fileTypeLabel(entry)
      };
    })
  );

  return {
    normalizedPath: paths.normalizedPath,
    entries
  };
}

function applyFilters(entries, params) {
  const keyword = (params.q || '').trim().toLowerCase();
  const type = params.type || 'all';
  let filtered = entries.slice();

  if (keyword) {
    filtered = filtered.filter(function byKeyword(entry) {
      return entry.name.toLowerCase().includes(keyword);
    });
  }

  if (type !== 'all') {
    filtered = filtered.filter(function byType(entry) {
      if (type === 'folder') {
        return entry.isDirectory;
      }

      return (entry.ext || '').toLowerCase() === type;
    });
  }

  return filtered;
}

async function listStorageBuckets(protocol) {
  const protocolMounts = getProtocolMounts(protocol);
  const buckets = await Promise.all(
    Object.keys(protocolMounts).map(async function mapBucket(rootId) {
      const mountPath = getMount(rootId, protocol);
      const stats = await fs.stat(mountPath);

      return {
        bucketName: rootId,
        directory: true,
        key: rootId,
        lastModified: formatTimestamp(stats.mtime),
        name: rootId,
        path: '/',
        size: 0
      };
    })
  );

  return {
    data: {
      buckets
    },
    errorCode: '',
    result: '1'
  };
}

async function listStorageBucketObjects(protocol, rootId, prefix, condition) {
  const currentPath = prefix ? `/${prefix.replace(/^\/+/, '').replace(/\/+$/, '')}` : '/';
  const directory = await readProtocolDirectoryEntries(protocol, rootId, currentPath);
  const items = applyFilters(directory.entries, {
    q: condition,
    type: 'all'
  }).map(function mapStorageObject(entry) {
    const rawPath = entry.path.replace(/^\//, '');
    const storagePath = entry.isDirectory ? `${rawPath}/` : rawPath;

    return {
      bucketName: rootId,
      directory: entry.isDirectory,
      hasChildren: entry.isDirectory ? entry.hasChildren : false,
      key: storagePath,
      lastModified: formatTimestamp(entry.updatedAt),
      name: entry.name,
      path: storagePath,
      size: entry.size || 0
    };
  });

  return {
    data: {
      bucketName: rootId,
      prefix: prefix || '',
      objects: items
    },
    errorCode: '',
    result: '1'
  };
}

async function resolveStorageDownload(protocol, rootId, currentPath) {
  const mountPath = getMount(rootId, protocol);
  const paths = resolveMountedPath(mountPath, currentPath);
  const stats = await fs.stat(paths.resolvedTargetPath).catch(function onError() {
    return null;
  });

  if (!stats || !stats.isFile()) {
    const error = new Error('File not found.');
    error.statusCode = 404;
    throw error;
  }

  return {
    absolutePath: paths.resolvedTargetPath,
    fileName: path.basename(paths.resolvedTargetPath)
  };
}

async function resolveStorageBatchEntries(protocol, rootId, paths) {
  const mountPath = getMount(rootId, protocol);

  if (!Array.isArray(paths) || !paths.length) {
    const error = new Error('No download paths provided.');
    error.statusCode = 400;
    throw error;
  }

  return Promise.all(
    paths.map(async function mapDownloadPath(virtualPath) {
      const resolved = resolveMountedPath(mountPath, virtualPath);
      const stats = await fs.stat(resolved.resolvedTargetPath).catch(function onError() {
        return null;
      });

      if (!stats) {
        const error = new Error(`Path not found: ${virtualPath}`);
        error.statusCode = 404;
        throw error;
      }

      return {
        absolutePath: resolved.resolvedTargetPath,
        isDirectory: stats.isDirectory(),
        normalizedPath: resolved.normalizedPath
      };
    })
  );
}

function buildArchiveName(entries) {
  if (entries.length === 1) {
    const singleName = path.basename(entries[0].absolutePath);
    return `${singleName}.zip`.replace(/\.zip\.zip$/i, '.zip');
  }

  return `batch-download-${Date.now()}.zip`;
}

async function createStorageBatchDownload(protocol, rootId, virtualPaths) {
  const entries = await resolveStorageBatchEntries(protocol, rootId, virtualPaths);
  const archive = archiver('zip', {
    zlib: {
      level: 9
    }
  });

  archive.on('error', function onArchiveError(error) {
    throw error;
  });

  entries.forEach(function appendEntry(entry) {
    const entryName = path.basename(entry.absolutePath);

    if (entry.isDirectory) {
      archive.directory(entry.absolutePath, entryName);
      return;
    }

    archive.file(entry.absolutePath, {
      name: entryName
    });
  });

  return {
    archive,
    fileName: buildArchiveName(entries)
  };
}

module.exports = {
  createStorageBatchDownload,
  listStorageBucketObjects,
  listStorageBuckets,
  resolveStorageDownload
};
