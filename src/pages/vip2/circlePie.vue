/*
 * @Author: yuyanfei
 * @ 环形图
 * @Date: 2018-08-02
 * @Last Modified by: lizhiwei8
 * @Last Modified time: 2018-08-16 15:58:43
 */
<template>
  <div id="echartscirclepieVip2" style="color:#fff;"></div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'circlePie',
  props: {
    label: {
      type: String,
      default: '某某率'
    },
    percentage: {
      type: Number,
      default: 50
    }
  },
  methods: {
    setCirclePie: function () {
      let circlePieChart = document.getElementById('echartscirclepieVip2')
      let myChart = echarts.init(circlePieChart)
      let percentage = this.percentage
      let itemFontColor2 = '#ffffff'
      let textColor = '#ffffff'
      let dataStyle = {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        }
      }
      let placeHolderStyle = {
        normal: {
          color: '#2c3b4600' // 隐形部分的颜色
        }
      }
      let option = {
        textStyle: {
          color: textColor
        },
        series: [
          {
            name: '内环',
            type: 'pie',
            clockWise: true,
            startAngle: 180,
            radius: [94, 96],
            itemStyle: dataStyle,
            hoverAnimation: false,
            center: ['50%', '50%'],
            data: [{
              value: 100,
              label: {
                show: false
              },
              itemStyle: {
                normal: {
                  color: '#2574C9'
                }
              }
            }]
          },
          {
            name: 'Pie1',
            type: 'pie',
            clockWise: true,
            startAngle: 180,
            radius: [100, 104],
            itemStyle: dataStyle,
            hoverAnimation: false,
            center: ['50%', '50%'],
            data: [{
              value: percentage,
              label: {
                normal: {
                  formatter: '{d}%',
                  position: 'center',
                  show: true,
                  textStyle: {
                    fontSize: '50',
                    fontWeight: 'normal',
                    color: '#FFFF00'
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: '#FFFF00'
                }
              }
            }, {
              name: 'invisible',
              value: 100 - percentage,
              label: {
                normal: {
                  formatter: this.label,
                  position: 'center',
                  show: true,
                  textStyle: {
                    fontSize: '14',
                    fontWeight: 'normal',
                    color: itemFontColor2
                  }
                }
              },
              itemStyle: placeHolderStyle
            }]
          }
        ]
      }
      myChart.setOption(option)
    }
  },
  mounted () {
    this.setCirclePie()
  }
}
</script>
<style lang="less">
#echartscirclepieVip2{
  box-sizing: border-box;
  width: 255px;
  height: 230px;
}
</style>
