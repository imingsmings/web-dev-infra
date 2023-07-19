const state = {
    mapData: null,
    chart: null,
    noDrillCity: ['中山市', '东莞市'],
    isDrilled: false,
    neItems: [],
    isDistrictLevel: false,
    isAreaLevel: true
}

const MAP_CONFIG = {
    MAP_NAME: '广东省',
    DEFAULT_CENTER: [113.280637,23.125178],
    DEFAULT_ZOOM: 1,
    MAP_BOUNDS: {
        MIN_LAT: 20.3995,
        MAX_LAT: 25.5183,
        MIN_LNG: 109.6633,
        MAX_LNG: 117.2029
    },
    DEFAULT_POINT_COUNT: [10, 20, 50, 100, 200, 300, 400, 500, 1000],
    ZOOM_IN: 'in',
    ZOOM_OUT: 'out',
    ZOOM_STEP: 0.5,
    ZOOM_LIMIT: {
        MIN: 1,
        MAX: 12
    },
    DISTRICT_LEVEL_ZOOM: 3
}

const oAreaSelect = document.querySelector('#areaSelect')
const oPointCount = document.querySelector('#pointCount')
const oSearchValue = document.querySelector('#searchValue')
const oSearchBtn = document.querySelector('#searchBtn')
const oClearBtn = document.querySelector('#clear')
const oZoomInBtn = document.querySelector('#zoomIn')
const oZoomOutBtn = document.querySelector('#zoomOut')
const oResetBtn = document.querySelector('#resetBtn')
const oLabelInfo = document.querySelector('#labelInfo')
const image = getLinearIcon()

const init = async () => {
    await initMap()
    bindEvent()
}

function bindEvent() {
    state.chart.on('click', handleMapClick)
    state.chart.on('geoRoam', handleRoamChange)
    oSearchBtn.addEventListener('click', handleSearch, false)
    oAreaSelect.addEventListener('change', handleAreaSelect, false)
    oPointCount.addEventListener('change', handlePointCount, false)
    oClearBtn.addEventListener('click', handleClear, false)
    oZoomInBtn.addEventListener('click', handleZoom, false)
    oZoomOutBtn.addEventListener('click', handleZoom, false)
    oResetBtn.addEventListener('click', handleReset, false)
}

async function initMap() {
    const data = await getData()
    state.mapData = data

    const chart = echarts.init(document.getElementById('box'));
    state.chart = chart

    drawMap(MAP_CONFIG.MAP_NAME, state.mapData[MAP_CONFIG.MAP_NAME])
}

function drawMap(mapName, mapData) {
    // if (!echarts.getMap(mapName)) {
    //     echarts.registerMap(mapName, mapData)
    // }
    echarts.registerMap(mapName, mapData)

    const mapDataArr = getMapRegions(mapName, mapData)
    const initPoints = getSamplePoints(MAP_CONFIG.DEFAULT_POINT_COUNT[0])
    const options = getInitOptions(mapName, mapDataArr, initPoints)

    setOptions(options)
    state.neItems = initPoints

    generateAreaSelections(mapDataArr, oAreaSelect)
    generatePointCountSelections(MAP_CONFIG.DEFAULT_POINT_COUNT, oPointCount)
}

function drawDistrictMap() {
    if (state.isDistrictLevel) return

    state.isDistrictLevel = true
    state.isAreaLevel = false
    for (const key in state.mapData) {
        if (key !== MAP_CONFIG.MAP_NAME) {
            state.mapData[MAP_CONFIG.MAP_NAME].features.push(...state.mapData[key].features)
        }
    }
    drawMap(MAP_CONFIG.MAP_NAME, state.mapData[MAP_CONFIG.MAP_NAME])
}

function drawAreaMap() {
    if (state.isAreaLevel) return

    state.isDistrictLevel = false
    state.isAreaLevel = true
    state.mapData[MAP_CONFIG.MAP_NAME].features = state.mapData[MAP_CONFIG.MAP_NAME].features.filter((item) => {
        return item.properties.level !== 'district'
    })
    drawMap(MAP_CONFIG.MAP_NAME, state.mapData[MAP_CONFIG.MAP_NAME])
}

function getMapRegions(mapName, mapData) {
    const mapDataArr = []
    mapData.features.forEach(function (item) {
        if (item.properties.name === mapName) {
            // 隐藏广东省相关显示信息
            mapDataArr.push({
                name: item.properties.name,
                administrativeCode: item.properties.adcode,//行政代码
                cp: item.properties.cp,
                level: item.properties.level, //级别
                label: {
                    normal: {
                        show: false
                    }
                },
            });
        } else {
            mapDataArr.push({
                name: item.properties.name,
                administrativeCode: item.properties.adcode,
                cp: item.properties.cp,
                level: item.properties.level,
            });
        }
    });
    return mapDataArr
}

function getInitOptions(mapName, mapDataArr, points = []) {
    const options = {
        backgroundColor: '#666',
        geo: {
            map: mapName,
            roam: true,
            zoom: MAP_CONFIG.DEFAULT_ZOOM,
            center: MAP_CONFIG.DEFAULT_CENTER,
            itemStyle: {
                normal: {
                    borderWidth: 2,
                    borderColor: '#0356b2',
                    areaColor: '#242539'
                },
                emphasis: {
                    borderWidth: 0,
                    areaColor: '#ffff00',
                    shadowColor: '#8dc6ea',
                    shadowBlur: 30
                }
            },
            label: {
                normal: {
                    color: '#fff',
                    show: true,
                },
                emphasis: {
                    color: 'red'
                }
            },
            scaleLimit: {
                min: MAP_CONFIG.ZOOM_LIMIT.MIN,
                max: MAP_CONFIG.ZOOM_LIMIT.MAX
            },
            regions: mapDataArr
        },
        tooltip: {
            trigger: 'item'
        },
        series: [
          {
              zlevel: 1,
              name: '基站',
              type: 'scatter',
              coordinateSystem: 'geo',
              encode: {
                  value: 2
              },
              showEffectOn: 'emphasis',
              rippleEffect: {
                  brushType: 'stroke'
              },
              hoverAnimation: true,
              data: points,
              symbolSize: 10,
              symbol: 'circle',
              z: 10,
              label: {
                normal: {
                    show: true,
                    position: 'right',
                    color: 'orange',
                    formatter: '{b}'
                }
              },  
              itemStyle: {
                normal: {
                    color: function (param) {
                        return param.data.color
                    }
                }
              },
              tooltip: {
                show: true,
                formatter: function(param) {
                    return `${param.seriesName}-${param.name}-${param.value.toString()}`
                }
              }
          },
          {
            zlevel: 1,
            name: '基站',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            encode: {
                value: 2
            },
            showEffectOn: 'emphasis',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            data: points,
            symbol: 'rect',
            symbolSize: [10, 30],
            symbolOffset: [0, -30],
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  color: 'green',
                  fontSize: 12,
                },
                formatter: function (param) {
                    return `${param.seriesName}-${param.data.name}`
                }
              }
            },  
            tooltip: {
                show: false
            },
            itemStyle: {
              normal: {
                // 手动绘制
                color: {
                    type: 'color',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      { offset: 0, color: 'orange' },
                      { offset: 0.5, color: 'green' },
                      { offset: 1, color: 'blue' }
                    ]
                  },
                shadowBlur: 20, // 设置阴影的模糊程度
                shadowColor: 'rgba(0, 0, 0, 0.8)', // 设置阴影的颜色

                // color: {
                //     type: 'pattern',
                //     image: image,  // 图片的 URL
                //     repeat: 'no-repeat'  // 图片不重复平铺
                // },
              }
            },
          }
        ]
    }
    return options
}

function generateAreaSelections (data, container) {
    const oFragment = document.createDocumentFragment()
    data.forEach((area) => {
        if (area.level === 'city') {
            const option = document.createElement('option')
            option.value = area.cp.toString()
            option.textContent = area.name
            oFragment.append(option)
        }
    })
    container.append(oFragment)
}

function generatePointCountSelections(counts, container) {
    const oFragment = document.createDocumentFragment()
    counts.forEach((count) => {
        const option = document.createElement('option')
        option.value = count
        option.textContent = count
        oFragment.append(option)
    })
    container.append(oFragment)
}

async function getData() {
    const result = await fetch('public/GuangDong.json')
    const data = await result.json()
    return data
}

function handleMapClick(param) {
    const { componentType } = param

    switch (componentType) {
        case 'geo':
            handleMapDrill(param)
            break;
        case 'series':
            handleLabelClick(param)
            break;
        default:
            break;
    }
}
 
function handleMapDrill(param) {
    const isDrilled = state.mapData[param.name];
    if (isDrilled) {
        //避免重复画地图
        if (state.noDrillCity.includes(param.name)) return;
        drawMap(param.name, state.mapData[param.name]);
    } else {
        selectedArea(param)
    }
}

function handleLabelClick(param) {
    const { data } = param;
    oLabelInfo.textContent = `${data.name}:${data.value.toString()}`
}

function handleRoamChange(param) {
    const options = getOptions()
    const currentZoom = typeof param === 'number' ? param : options.geo[0].zoom

    if (currentZoom >= MAP_CONFIG.DISTRICT_LEVEL_ZOOM) {
        drawDistrictMap()
    } else {
        drawAreaMap()
    }
}

function selectedArea(params) {
    const name = params.name;
    setOptions({
        geo:{
            type:'map',
            regions:[{
                name:name,
                selected:true
            }]
        }
    })
}

function handleSearch() {
    if (!oSearchValue.value) return

    const neObj = state.neItems.find((item) => item.name === oSearchValue.value)
    if (!neObj) return

    const options = getOptions();
    options.geo[0].center = neObj.value
    options.geo[0].zoom = 5
    setOptions(options)
}

function handleClear() {
    handlePointCount(0)
}

function handleReset() {
    const center = oAreaSelect[0].value
    const count =  oPointCount[0].value

    oSearchValue.value = ''
    oPointCount.value = count
    oAreaSelect.value = center
    oLabelInfo.textContent = ''

    const options = getOptions();
    options.geo[0].center = center.split(',')
    options.geo[0].zoom = MAP_CONFIG.DEFAULT_ZOOM

    if (state.isDistrictLevel) {
        drawAreaMap()
    }

    handlePointCount(count, options)
}

function handleZoom(e) {
    const action = e.target.dataset.key
    if (!action) return

    const options = getOptions()
    let currentZoom = options.geo[0].zoom

    switch (action) {
        case MAP_CONFIG.ZOOM_IN:
            currentZoom = currentZoom + MAP_CONFIG.ZOOM_STEP
            break
        case MAP_CONFIG.ZOOM_OUT:
            currentZoom = currentZoom - MAP_CONFIG.ZOOM_STEP
            break
        default:
            break
    }

    if (currentZoom < MAP_CONFIG.ZOOM_LIMIT.MIN || currentZoom > MAP_CONFIG.ZOOM_LIMIT.MAX) {
        return
    }

    handleRoamChange(currentZoom)

    options.geo[0].zoom = currentZoom
    setOptions(options)
}

function handleAreaSelect(e) {
    const center = e.target.value.split(',')
    const options = getOptions();
    options.geo[0].center = center
    options.geo[0].zoom = 5
    setOptions(options)
}

function getSamplePoints(count) {
    const randomPoints = getRandomPoints(count)
    const randomSeriesData = generateRandomSeriesData(randomPoints)
    return randomSeriesData
}

function handlePointCount(e, resetOptions) {
    const options = resetOptions || getOptions()
    const count = Number(isNumberOrString(e) ? e : e.target.value)
    const randomSeriesData = getSamplePoints(count)

    state.neItems = randomSeriesData
    options.series[0].data = randomSeriesData
    options.series[1].data = randomSeriesData

    if (count >= 200) {
        options.geo[0].zoom = 3
    }
    
    setOptions(options)
}

function getRandomPoints(count) {
    const coordinateList = [];
    for (let i = 0; i < count; i++) {
        const coordinate = generateRandomCoordinate();
        coordinateList.push(coordinate);
    }
    return coordinateList
}

function generateRandomCoordinate() {
    const { MAP_BOUNDS } = MAP_CONFIG
    const lat = Math.random() * (MAP_BOUNDS.MAX_LAT - MAP_BOUNDS.MIN_LAT) + MAP_BOUNDS.MIN_LAT;
    const lng = Math.random() * (MAP_BOUNDS.MAX_LNG - MAP_BOUNDS.MIN_LNG) + MAP_BOUNDS.MIN_LNG;
    return [lng, lat]
}

function generateRandomSeriesData(points) {
    const _data = []
    points.forEach((point, index) => {
        const color = getRandomColor()
        _data.push({
            name: `广东${index}`,
            value: point,
            color: color 
        })
    })
    return _data
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}

function getLinearIcon() {
    const image = new Image(10, 30)
    image.src = 'public/linear.png'
    return image
}

function isNumberOrString(value) {
    return typeof value === 'number' || typeof value === 'string'
}

function getOptions() {
    return state.chart.getOption()
}

function setOptions(newOptions) {
    state.chart.setOption(newOptions)
}

init()
