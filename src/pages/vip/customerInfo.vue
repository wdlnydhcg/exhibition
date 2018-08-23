/*
 * @Author: lizhiwei8
 * @ 客户基础信息
 * @Date: 2018-08-16 17:17:51
 * @Last Modified by: lizhiwei8
 * @Last Modified time: 2018-08-21 10:59:35
 */

<template>
  <div id="customerInfo">
    <div class="customer_suggest">
      <div class="suggest_pro_left">
        <div  class="_title" style="margin-left:28px;">客户接待人数</div>
          <div class="_fail">
            <num-free-style number="105" :length="3"></num-free-style>
          </div>
      </div>
      <div class="suggest_pro_right">
          <div class="_title">推荐产品成功率</div>
            <div class="_success">
                <num-free-style number="18" :length="2"></num-free-style><span class="per">%</span>
            </div>
      </div>
    </div>
    <div class="customer_type">
        <div class="_title">客户类型统计</div>
        <div id="customerTypeBar"></div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'customerInfo',
  props: {},
  data () {
    return {
      customerReData: [10, 10, 10, 10],
      customerunReData: [16, 4, 12, 5]
    }
  },
  methods: {
    initCustomerInfoEcharts () {
      let _this = this
      let myChart = echarts.init(document.getElementById('customerTypeBar'))
      let option = {
        legend: {
          right: '6%',
          top: '20%',
          orient: 'vertical',
          data: ['已接待', '待接待'],
          textStyle: {
            color: '#2574C9'
          }
        },
        grid: {
          left: '11%',
          right: '14%',
          bottom: '3%',
          top: '34%',
          containLabel: true
        },
        xAxis: {
          show: false,
          axisTick: {
            show: false
          },
          type: 'value'
        },
        yAxis: {
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            color: '#2574C9',
            fontSize: '18'
          },
          type: 'category',
          data: ['养老群体', '留学旅游', '城镇新兴', '中产阶级']
        },
        series: [
          {
            name: '已接待',
            type: 'bar',
            stack: '总量',
            itemStyle: {
              color: '#65d5fa'
            },
            label: {
              normal: {
                show: true,
                position: 'outOfRanget'
              }
            },
            barWidth: 20,
            // hoverAnimation: {animation: false},
            data: this.customerReData
          }, {
            name: '待接待',
            type: 'bar',
            stack: '总量',
            itemStyle: {
              color: '#ff5f5f'
            },
            label: {
              normal: {
                show: true,
                formatter: function (value) {
                  return _this.customerReData[value.seriesIndex] + value.value
                },
                position: 'right',
                textStyle: {
                  color: '#2574C9',
                  fontSize: '18'
                }
              }
            },
            barGap: -300,
            barCateGoryGap: 1,
            data: this.customerunReData
          }
        ]
      }
      myChart.setOption(option)
    }
  },
  mounted () {
    this.initCustomerInfoEcharts()
  }
}
</script>
<style lang="less" scoped>
div#customerTypeBar {
    height: 400px;
    width: 806px;
    margin: -8% 0 2% 23%;
}
#customerInfo{
  height: 100%;
  width: 100%;
  .customer_suggest{
    height: 240px;
    width: 720px;
    margin-left: 34%;
    margin-top: 60px;
  }
  .suggest_pro_right, .suggest_pro_left{
      float:left;
      color:#529dee;
      margin-right:180px;
      ._title {
       padding: 0 22px 22px 0;
       font-size: 22px;
     }
  }
  ._success,._fail{
    position:relative;
    width:153px;
    padding-left: 15px;
    span.per {
        color: #2574C9;
        font-size: 25px;
        position: absolute;
        bottom: 20px;
    }
  }
  .customer_type{
      ._title{
        color: #2574C9;
        padding-left: 20%;
        font-size: 24px;
        margin-top: -2%;
        margin-bottom: 4%;
      }
  }
}
</style>
