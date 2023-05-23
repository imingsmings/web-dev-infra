export function formatD3Data () {

}

export function formatThreeData () {

}

export function formatEchartsData () {

}

export function formatWebglData () {

}

export function formatWebgpuData () {
  
}

function formatData(data) {
  switch (data.type) {
    case 'd3':
      return format.formatD3Data(data)
    case 'echarts':
      return format.formatEchartsData(data)
    case 'three':
      return format.formatThreeData(data)
    case 'webgl':
      return format.formatWebglData(data)
    case 'webgpu':
      return format.formatWebgpuData(data)
  }
}

export {
  formatData
}
