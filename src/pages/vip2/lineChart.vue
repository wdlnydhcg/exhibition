/*
 * @Author: yuyanfei
 * @ 环形图
 * @Date: 2018-08-02
 * @Last Modified by: lizhiwei8
 * @Last Modified time: 2018-08-16 15:58:54
 */
<template>
  <div id="lineChartVip2">无法显示折线统计图</div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'lineChartVip2',
  props: {
    lineChartVipData: {
      type: Object
    }
  },
  methods: {
    setlineChartVip: function () {
      let myChart = echarts.init(document.getElementById('lineChartVip2'))
      let legend = ['存款', '贷款', '理财']
      let itemStyle = {
        // borderColor: 'rgba(44,59,70,0)',
        // borderWidth: 5,
        // borderType: 'solid'
      }
      let axisLine = {
        lineStyle: {
          color: '#2574C9'
        }
      }
      let lineStyle = {
        width: 1
      }
      let option = {
        textStyle: {
          color: '#2574C9',
          fontSize: 15
        },
        legend: {
          orient: 'horizontal',
          right: '10%',
          data: legend,
          textStyle: {
            color: '#2574C9'
          }
        },
        grid: {
          top: 40,
          left: 62,
          right: 120,
          bottom: 32
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            rotate: 40
          },
          axisLine: axisLine,
          axisTick: {
            show: false
          },
          data: [
            '0:00', '2:00', '4:00',
            '6:00', '8:00', '10:00',
            '12:00', '14:00', '16:00',
            '18:00', '20:00', '22:00'
          ]
        },
        yAxis: {
          name: '客流趋势预测',
          type: 'value',
          nameGap: 25,
          splitLine: {
            show: true,
            lineStyle: {
              type: 'doted',
              color: '#2574C9',
              opacity: 0.5
            }
          },
          axisLine: axisLine,
          axisTick: {
            show: false
          }
        },
        series: [
          {
            name: '存款',
            data: [null, null, null,
              0, 250, 500,
              635, 770, 655,
              0, null, null],
            type: 'line',
            smooth: false,
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: itemStyle,
            lineStyle: lineStyle,
            hoverAnimation: false
          }, {
            name: '贷款',
            data: [null, null, 0,
              100, 250, 325,
              495, 515, 500,
              0, null, null],
            type: 'line',
            smooth: false,
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: itemStyle,
            lineStyle: lineStyle,
            hoverAnimation: false
          }, {
            name: '理财',
            data: [null, null, 0,
              300, 230, 100,
              130, 230, 290,
              0, null, null],
            type: 'line',
            smooth: false,
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: itemStyle,
            lineStyle: lineStyle,
            hoverAnimation: false
          }
        ],
        color: ['#7FEFF1', '#F8B90a', '#F27768']
      }
      myChart.setOption(option)
    }
  },
  mounted () {
    this.setlineChartVip()
  }
}
</script>
<style lang="less">
#lineChartVip2{
  box-sizing: border-box;
  height: 440px;
  width: 800px;
}
</style>
