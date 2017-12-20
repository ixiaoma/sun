<template>
  <div class="home">
      <chart :options="polar"></chart>
  </div>
</template>

<script>
//如果有需要 ，导入 全局的echarts对象
import echarts from 'echarts'
export default {
  data: function () {
        var dataAll = [
        [
            [10.0, 8.04],
            [11.0, 8.33],
            [12.0, 10.84],
            [7.0, 4.82],
            [5.0, 5.68]
        ],
        [
            [10.0, 9.14],
            [8.0, 8.14],
            [11.0, 9.26],
            [14.0, 8.10],
            [12.0, 9.13],
            [7.0, 7.26],
            [5.0, 4.74]
        ],
        [
            [10.0, 7.46],
            [8.0, 6.77],
            [13.0, 12.74],
            [14.0, 8.84],
            [12.0, 8.15],
            [7.0, 6.42],
            [5.0, 5.73]
        ],
        [
            [19.0, 12.50],
            [8.0, 6.89]
        ]
    ];

    var markLineOpt = {
        animation: false,
        lineStyle: {
            normal: {
                type: 'solid'
            }
        },
        data: [[{
            coord: [0, 3],
            symbol: 'none'
        }, {
            coord: [20, 13],
            symbol: 'none'
        }]]
    };

    var option = {
        title: {
            text: '公寓客流量',
            x: 'center',
            y: 0
        },
        grid: [
            {x: '7%', y: '7%', width: '38%', height: '38%'},
            {x2: '7%', y: '7%', width: '38%', height: '38%'},
            {x: '7%', y2: '7%', width: '38%', height: '38%'},
            {x2: '7%', y2: '7%', width: '38%', height: '38%'}
        ],
        tooltip: {
            formatter: 'Group {a}: ({c})'
        },
        xAxis: [
            {gridIndex: 0, min: 0, max: 20},
            {gridIndex: 1, min: 0, max: 20},
            {gridIndex: 2, min: 0, max: 20},
            {gridIndex: 3, min: 0, max: 20}
        ],
        yAxis: [
            {gridIndex: 0, min: 0, max: 15},
            {gridIndex: 1, min: 0, max: 15},
            {gridIndex: 2, min: 0, max: 15},
            {gridIndex: 3, min: 0, max: 15}
        ],
        series: [
            {
                name: 'I',
                type: 'scatter',
                xAxisIndex: 0,
                yAxisIndex: 0,
                data: dataAll[0],
                markLine: markLineOpt
            },
            {
                name: 'II',
                type: 'scatter',
                xAxisIndex: 1,
                yAxisIndex: 1,
                data: dataAll[1],
                markLine: markLineOpt
            },
            {
                name: 'III',
                type: 'scatter',
                xAxisIndex: 2,
                yAxisIndex: 2,
                data: dataAll[2],
                markLine: markLineOpt
            },
            {
                name: 'IV',
                type: 'scatter',
                xAxisIndex: 3,
                yAxisIndex: 3,
                data: dataAll[3],
                markLine: markLineOpt
            }
        ]
    };
    return {
      polar: option
    }
  }
}
</script>