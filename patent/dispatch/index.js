import renderD3 from './d3-handler'
import renderTree from './threejs-handler'
import renderEcharts from './echarts-handler'
import renderWebgl from './webgl-handler'
import renderWebgpu from './webgpu-handler'

export default function dispatchRender(data) {
  switch (data.type) {
    case 'd3':
      return renderD3(data)
    case 'echarts':
      return renderEcharts(data)
    case 'three':
      return renderTree(data)
    case 'webgl':
      return renderWebgl(data)
    case 'webgpu':
      return renderWebgpu(data)
  }
}