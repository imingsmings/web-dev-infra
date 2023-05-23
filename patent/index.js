import { initWebSocket } from './websocket'
import { getOriginalData } from './service'
import formatData from './utils'
import CachePool from './cache'
import dispatchRender from './dispatch'

initWebSocket()
getData()

async function getData(url, options) {
  const data = await getOriginalData(url, options)
  cacheData(data)
}

function cacheData(data) {
  CachePool[data.type].originalData = data
  const formattedData = formatData(data)
  CachePool[data.type].formattedData = formattedData
  dispatchRender(formattedData)
}

function dispatcher(data) {
  dispatchRender(data)
}
