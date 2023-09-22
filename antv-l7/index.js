import { Scene, PointLayer } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';

const map = new AMap.Map('map', {
    mapStyle: 'amap://styles/light',
    center: [108.9642, 34.2182],
    zoom: 14.89,
    minZoom: 10,
    pitch: 80
});

const scene = new Scene({
    id: 'map',
    map: new GaodeMap({
      mapInstance: map
    })
});