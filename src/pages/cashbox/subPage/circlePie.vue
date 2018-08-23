/*
 * @Author: dingbaishun
 * @ 环形图
 * @Date: 2018-08-02
 * @Last Modified by: dingbaishun
 * @Last Modified time: 2018-08-06 20:11:18
 */
<template>
  <div class="echartsContent">
    <div class="echartscirclepie" :id="id" :style="{height:height+'px',width:width+'px'}"></div>
    <p class="echartsLabel" v-text="label"></p>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'circlePie',
  props: {
    id:{
      type:String,
      default:''
    },
    label: {
      type: String,
      default: '完成进度'
    },
    height:{
      type:Number,
      default:200
    },
    width:{
      type:Number,
      default:200
    },
    percentage: {
      type: Number,
      default: 50
    }
  },
  methods: {
    setCirclePie: function () {
      let circlePieChart = document.getElementById(this.id+"")
      let myChart = echarts.init(circlePieChart)
      let percentage = this.percentage
      let itemFontColor2 = '#4592e4'
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
            name: 'Pie1',
            type: 'pie',
            clockWise: true,
            startAngle: 180,
            radius: [40, 47],
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
                    fontSize: '18',
                    fontWeight: 'normal',
                    color: '#01fefc'
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: '#01fefc'
                }
              },
            
            }, {
              name: 'invisible',
              value: 100 - percentage,
              label: {
                normal: {
                  formatter: '{100-d}%' ,
                  position: 'outside',
                  show: false,
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
.echartsContent{
  display: inline-block;
  position:relative;
}
.echartsContent p{
  position: absolute;
  top: 15px;

  color: #4a9cf2;
  font-size: 20px;
  text-align: center;
  width: 100%;

}
</style>
