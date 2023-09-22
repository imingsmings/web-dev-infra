### L7

1. 地理空间数据可视分析引擎
2. 蚂蚁金服 AntV 数据可视化团队推出的基于 WebGL 的地理空间数据可视分析开发框架。
3. L7 中的 L 代表 Location，7 代表世界七大洲，旨在为全球位置数据提供可视分析的能力。
4. 以图形符号学为理论基础，将空间数据转化成 2D、3D 符号，并通过颜色、大小、体积、纹理等视觉变量实现丰富的可视化表达。
5. 可应用于 GIS、交通、电力、国土、农业、城市等领域的空间信息管理，分析等应用系统开发需求。

#### 数据及工具

GeoJSON 是一种对各种地理数据结构进行编码的格式。GeoJSON 对象可以表示几何、特征或者特征集合。GeoJSON 支持下面几何类型：点、线、面、多点、多线、多面和几何集合。GeoJSON 里的特征包含一个几何对象和其他属性，特征集合表示一系列特征。

- [在线查看、绘制、修改 GeoJSON 数据](http://geojson.io/)
- [全国行政区划 GeoJON 支持省市县维度](https://datav.aliyun.com/portal/school/atlas/area_selector)
- [全球行政区划数据集](https://img.hcharts.cn/mapdata/)
- [地理统计分析工具](https://turfjs.org/)

#### 特性功能

1. 数据驱动可视化展示，由数据驱动，从数到形，支持丰富的可视化类型。
2. 可支持 2D、3D 可视化渲染，空间数据实时，动态渲染。
3. 支持 JSON、GeoJSON 等数据接入，并内置空间数据转换。
4. 多种底图支持，支持离线内网部署。
5. 内置集成高德地图，Mapbox 地图模块，可集成 leaflet 插件。
6. 支持链式编程。
7. 可自定义图例组件，如 Zoom、Scale、Logo 等。

#### 支持图表类型

##### 点图层

气泡图、散点图、符号地图、3D 柱状地图、聚合地图、复合图表地图、自定义 Marker

##### 线图层

路径地图、2D 弧线、3D 弧线、大圆航线、等值线

##### 面图层

填充图、3D 填充图

##### 热力图层

经典热力图、蜂窝热力图、网格热力图

##### 栅格图层

图片、Raster

##### 瓦片地图

栅格瓦片、矢量瓦片

---

### 项目集成

#### 静态引入(CDN)

```js
<head>
  // 引入最新版
  <script src='https://unpkg.com/@antv/l7'></script>
  // 指定版本号
  <script src='https://unpkg.com/@antv/l7@2.0.11'></script>
</head>
```

CDN 引用后，在使用时通过 L7 命名空间获取所有对象并初始化。

#### npm 引入

```js
// 安装L7 依赖
npm install --save @antv/l7

// 安装第三方底图依赖
npm install --save @antv/l7-maps
```

##### 基础初始化

1. 在页面中新增一个 Dom 用于地图初始化

```html
<div id="map"></div>
```

2. 初始化地图

```js
const scene = new L7.Scene({
  id: 'map',
  map: new L7.GaodeMap({
    pitch: 35.210526315789465,
    style: 'light',
    center: [104.288144, 31.239692],
    zoom: 4.4,
  }),
});
```

### 地图使用

#### 高德地图

L7 内部集成了高德地图 JavaScript API，无需单独引入，可通过`L7.GaodeMap`进行地图相关操作。

使用方式主要分两种：

1.
2.
