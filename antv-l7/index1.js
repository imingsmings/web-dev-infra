/**
 * L7直接使用高德地图
 */
import * as L7 from '@antv/l7'

const scene = new L7.Scene({
  id: 'map',
  map: new L7.GaodeMap({
    style: 'blank',
    center: [108.9642, 34.2182],
    pitch: 80,
    zoom: 12,
    viewMode: '3D'
  }),
});