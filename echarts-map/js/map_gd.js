//存放地图数据
let mapData = null;

let noDrillCity = ['中山市','东莞市'];

//是否已下钻
let isDrilled = false;

// 获取地图数据并注册广东地图
$.getJSON('json/json_gd/GuangDong.json', function(data){
    mapData =  data;
    echarts.registerMap('广东省', mapData['广东省']);
    // 绘制广东地图 地图init在drawMap方法里面以及setOption
    drawMap('广东省', mapData['广东省']);
});

// 创建图表实例
let chart = echarts.init(document.getElementById('box'));

// 地图点击事件
chart.on('click', function(param) {
    // console.log('clickMap...', param);
    isDrilled = mapData[param.name];
    if (isDrilled) {
        //避免重复画地图
        if (noDrillCity.includes(param.name)) return;
        drawMap(param.name, mapData[param.name]);
    } else {
        // drawMap('广东省', mapData['广东省']);
        selectedArea(param)
    }

});
//单独选中某个区域单独显示
function selectedArea(params) {
   var name = params.name;
   console.log(name)
       chart.setOption({
           geo:{
               type:'map',
               regions:[{
                   name:name,
                   selected:true
               }]
           }
       })
}

const image = new Image(10, 30)
image.src = 'public/1.png'
function drawMap(map, data) {
    //防止重复注册
    if (!echarts.getMap(map)) echarts.registerMap(map, data);
    let mapDataArr = [];
    // console.log(data)
    data.features.forEach(function (item) {
        if (item.properties.name === map) {
            mapDataArr.push({
                name: item.properties.name,
                administrativeCode: item.properties.adcode,//行政代码
                cp: item.properties.cp,
                level: item.properties.level,//级别
                label: {
                    normal: {show: false},
                    emphasis: {show: false}
                },
                itemStyle: {
                    normal: {
                        borderWidth: 0,
                        shadowColor: '#45a7f9',
                        shadowBlur: 30
                    },
                    emphasis: {
                        opacity: 0
                    }
                }
            });
        } else {//做额外的处理
            mapDataArr.push({
                name: item.properties.name,
                administrativeCode: item.properties.adcode,
                cp: item.properties.cp,
                level: item.properties.level
            });
        }
    });

    let option = {
        backgroundColor: '#666',
        geo: {
            map: map,
            roam: true,
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
                    // color: '#fff'
                }
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
              data: [
                  {name: '广州123', value: [113.280637,23.125178] },
                  {name: '广州456', value: [113.365116,22.772595] },
                  {name: '广州789', value: [113.227015,23.585731] },
              ],
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
                    color: 'red',
                    shadowBlur: 10,
                    shadowColor: '#333',
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowOffsetY: 8
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
            data: [
                {name: '广州123', value: [113.280637,23.125178] },
                {name: '广州456', value: [113.365116,22.772595] },
                {name: '广州789', value: [113.227015,23.585731] },
            ],
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
                // color: {
                //     type: 'color',
                //     x: 0,
                //     y: 0,
                //     x2: 0,
                //     y2: 1,
                //     colorStops: [
                //       { offset: 0, color: 'orange' },
                //       { offset: 0.5, color: 'green' },
                //       { offset: 1, color: 'blue' }
                //     ]
                //   },
                // shadowBlur: 20, // 设置阴影的模糊程度
                // shadowColor: 'rgba(0, 0, 0, 0.8)', // 设置阴影的颜色

                color: {
                    type: 'pattern',
                    image: image,  // 图片的 URL
                    repeat: 'no-repeat'  // 图片不重复平铺
                },
              }
            },
          }
        ]
    }
    chart.setOption(option);
}