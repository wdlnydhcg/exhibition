/*
 * @Author: lizhiwei8
 * @ 雷达图
 * @Date: 2018-08-02 16:50:50
 * @Last Modified by: lizhiwei8
 * @Last Modified time: 2018-08-14 12:10:50
 */

<template>
  <div class="wrap_business">
    <div class="title_business">
        <span>今日第一次办理业务人员指数</span>
    </div>
    <div class="radar_chart">
    <div id="radar">无法显示图表</div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'radar',
  props: {
    radarData: {
      type: Object
    }
  },
  methods: {
    setRadar: function () {
      let businessEchart = document.getElementById('radar')
      let business = echarts.init(businessEchart)
      let legend = ['实时统计', '预测统计', '历史统计']
      console.log('nowData is ---', this.radarData.now)
      let option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          orient: 'vertical',
          right: '0%',
          top: '20%',
          data: legend,
          textStyle: {
            color: '#2574C9'
          }
        },
        radar: {
          startAngle: 120,
          name: {
            textStyle: {
              color: '#2574C9'
            }
          },
          axisLine: {
            show: false
          },
          splitNumber: 4,
          splitLine: {
            lineStyle: {
              color: '#2574C9',
              shadowColor: '#1C49BC',
              shadowBlur: 12,
              shadowOffsetX: 0,
              shadowOffsetY: 0
            }
          },
          splitArea: {
            areaStyle: {
              opacity: 0.9,
              color: [new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                {
                  color: '#070f24',
                  offset: 0.37
                },
                {
                  color: '#1C49BC',
                  offset: 1
                }
              ]), '#070f24', '#070f24', '#070f24'].reverse()
            }
          },
          indicator: [
            {
              name: '柜台区', max: 40
            }, {
              name: '对公区', max: 40
            }, {
              name: '贵宾区', max: 40
            }, {
              name: '自助区', max: 40
            }, {
              name: '理财区', max: 40
            }, {
              name: '现金区', max: 40
            }
          ]
        },
        series: [
          {
            name: '实时统计，预测统计与历史统计',
            type: 'radar',
            data: [
              {
                value: this.radarData.now,
                name: '实时统计',
                label: {
                  normal: {
                    show: true,
                    formatter: function (params) {
                      return params.value
                    }
                  }
                }
              }, {
                value: this.radarData.prediction,
                name: '预测统计',
                label: {
                  normal: {
                    show: true,
                    formatter: function (params) {
                      return params.value
                    }
                  }
                }
              }, {
                value: this.radarData.history,
                name: '历史统计',
                label: {
                  normal: {
                    show: true,
                    formatter: function (params) {
                      return params.value
                    }
                  }
                }
              }
            ]
          }
        ],
        color: ['#01FFFF', '#FCA7B0', '#FBF543']
      }
      business.setOption(option)
    }
  },
  mounted () {
    this.setRadar()
  }
}
</script>
<style lang="less">
.wrap_business{
  width: 1000px;
  height: 600px;
  overflow:hidden;
}
.title_business{
  color:#2574C9;
  padding-left: 5%;
}
.radar_chart{
  width:1000px;
  height:600px;
}
#radar{
  width: 1000px;
  height: 600px;
  margin-Top:-75px;
  margin-left: -60px;
}
</style>
