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
            zlevel: 1,
            z: 1,
            // 缩放选项
            roam: true,
            itemStyle: {
                normal: {
                    borderWidth: 2,
                    borderColor: '#0356b2',
                    areaColor: '#242539'
                },
                emphasis: {
                    borderWidth: 0,
                    // areaColor: '#144393',
                    areaColor: '#ffff00',
                    shadowColor: '#8dc6ea',
                    shadowBlur: 30
                }
            },
            label: {
                normal: {
                    color: '#fff',
                    show: true,
                    // fontSize: 20,
                    // formatter: value => {
                    //     return value.name.substring(0, 2)
                    // }
                },
                emphasis: {
                    color: 'red'
                }
            },
            regions: mapDataArr
        }
    };

    chart.setOption(option);
}