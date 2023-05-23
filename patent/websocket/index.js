import { WebSocketConfig } from '../config'

const WebSocketURL = `${WebSocketConfig.scheme}://${WebSocketConfig.url}:${WebSocketConfig.port}`
const ws = new WebSocket(WebSocketURL)
  
const initWebSocket = () => {
  bindEvent()
}

function bindEvent() {
  ws.addEventListener('open', handleOpen, false)
  ws.addEventListener('close', handleClose, false)
  ws.addEventListener('error', handleError, false)
  ws.addEventListener('message', handleMessage, false)
}

function handleOpen() {
  // 根据业务需求
}
function handleClose() {
  // 根据业务需求
}
function handleError() {
  // 根据业务需求
}
function handleMessage() {
  // 根据业务需求
}

export {
  initWebSocket
}