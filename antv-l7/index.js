// import { Scene } from '@antv/l7';
// import { GaodeMap } from '@antv/l7-maps';
// import {  PolygonLayer } from '@antv/l7';

const scene = new L7.Scene({
    id: 'map',
    map: new L7.GaodeMap({
      pitch: 35.210526315789465,
      style: 'light',
      center: [ 104.288144, 31.239692 ],
      zoom: 4.4
    })
})
