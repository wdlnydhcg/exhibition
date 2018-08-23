/*
 * @Author: yuyanfei
 * @ 环形图
 * @Date: 2018-08-02
 * @Last Modified by: lizhiwei8
 * @Last Modified time: 2018-08-14 13:47:40
 */
<template>

  <div id="echartscirclepie" style="color:#fff;"></div>
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
      let circlePieChart = document.getElementById('echartscirclepie')
      let myChart = echarts.init(circlePieChart)
      let percentage = this.percentage
      let itemFontColor2 = '#337fd5'
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
            radius: [68, 72],
            itemStyle: dataStyle,
            hoverAnimation: false,
            center: ['45%', '55%'],
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
            radius: [76, 87],
            itemStyle: dataStyle,
            hoverAnimation: false,
            center: ['45%', '55%'],
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
#echartscirclepie{
  box-sizing: border-box;
  width: 255px;
  height: 230px;
}
</style>
