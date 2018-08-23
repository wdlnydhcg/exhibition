/*
 * @Author: yuyanfei
 * @ 柱状图
 * @Date: 2018-08-02
 * @Last Modified by: lizhiwei8
 * @Last Modified time: 2018-08-16 15:58:11
 */
<template>
  <div id="barChartVip2">无法显示柱状统计图</div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'barChartVip2',
  props: {
    lineChartData: {
      type: Object
    }
  },
  methods: {
    setbarChartVip: function () {
      let myChart = echarts.init(document.getElementById('barChartVip2'))
      let legend = ['20-30岁', '30-40岁', '>40岁']
      let axisLine = {
        lineStyle: {
          color: '#2574C9'
        }
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
          },
          itemWidth: 14
        },
        grid: {
          top: 40,
          left: 80,
          right: 120,
          bottom: 32
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            rotate: 20
          },
          axisLine: axisLine,
          axisTick: {
            show: false
          },
          data: [
            '存款', '贷款', '贵金属', '代销业务', '理财', '第三方存款', '其它投资'
          ]
        },
        yAxis: {
          name: '办理各项业务年龄分布',
          type: 'value',
          nameGap: 20,
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
            name: '20-30岁',
            data: [90, 250, 220, 310, 210, 130, 240],
            type: 'bar',
            barGap: 0,
            hoverAnimation: false
          }, {
            name: '30-40岁',
            data: [255, 160, 130, 300, 195, 115, 270],
            type: 'bar',
            hoverAnimation: false
          }, {
            name: '>40岁',
            data: [130, 80, 300, 400, 470, 130, 260],
            type: 'bar',
            hoverAnimation: false
          }
        ],
        color: ['#34ABFF', '#F2DD32', '#F37C3A']
      }
      myChart.setOption(option)
    }
  },
  mounted () {
    this.setbarChartVip()
  }
}
</script>
<style lang="less">
#barChartVip2{
  box-sizing: border-box;
  height:450px;
  width:900px;
}
</style>
