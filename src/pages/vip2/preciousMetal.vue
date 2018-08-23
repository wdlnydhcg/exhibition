/*
 * @Author: lizhiwei8
 * @ 贵金属交易统计
 * @Date: 2018-08-16 17:17:51
 * @Last Modified by: lizhiwei8
 * @Last Modified time: 2018-08-21 11:13:56
 */

<template>
  <div id="preciousMetal">
    <div class="customer_success">
      <div class="now_person_num">
          <div class="_title">实时人数统计</div>
            <div class="now_num">
              <div class="table_title _line">
                <span>停留时长</span><span>等候人数</span>
              </div>
              <div class="_line">
                <span>&lt;5min</span><span>{{nowPerNum.min05}}</span>
              </div>
              <div class="_line">
                <span>5-10min</span><span>{{nowPerNum.min10}}</span>
              </div>
              <div class="_line">
                <span>10-15min</span><span>{{nowPerNum.min15}}</span>
              </div>
            </div>
      </div>
    </div>
    <div class="success_num">
        <div class="_title">历史交易成功量</div>
        <div id="preciousMetalBar"></div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'preciousMetal',
  props: {},
  data () {
    return {
      nowPerNum: {
        'min05': 13,
        'min10': 7,
        'min15': 4
      },
      oldData: [4, 8, 26, 25, 24, 5, 3],
      middleData: [30, 40, 35, 6, 23, 4, 12],
      youngData: [18, 30, 17, 18, 8, 19, 4]
    }
  },
  methods: {
    initCustomerInfoEcharts () {
      let myChart = echarts.init(document.getElementById('preciousMetalBar'))
      let option = {
        legend: {
          right: '0',
          top: '5%',
          data: ['老年(56-75)', '中年(36-55)', '青年(18-35)'],
          textStyle: {
            color: '#2574C9'
          }
        },
        grid: {
          left: '4%',
          right: '14%',
          bottom: '2%',
          top: '16%',
          containLabel: true
        },
        yAxis: {
          maxInterval: '100',
          minInterval: '0',
          axisLine: {
            lineStyle: {
              color: '#2574C9'
            }
          },
          splitLine: {
            lineStyle: {
              type: 'dotted',
              color: '#2574C9'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#2574C9',
            fontSize: '18'
          },
          type: 'value'
        },
        xAxis: {
          axisLine: {
            lineStyle: {
              color: '#2574C9'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#2574C9',
            fontSize: '18'
          },
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月']
        },
        series: [
          { // 下
            name: '青年(18-35)',
            type: 'bar',
            stack: '总量',
            itemStyle: {
              color: '#ff5f5f'
            },
            label: {
              normal: {
                show: true,
                position: 'outOfRanget'
              }
            },
            barWidth: 20,
            // hoverAnimation: {animation: false},
            data: this.youngData
          }, {
            name: '中年(36-55)',
            type: 'bar',
            stack: '总量',
            itemStyle: {
              color: '#ffbc01'
            },
            label: {
              normal: {
                show: false
              }
            },
            data: this.middleData
          }, {
            name: '老年(56-75)',
            type: 'bar',
            stack: '总量',
            itemStyle: {
              color: '#65d5fa'
            },
            label: {
              normal: {
                show: false
              }
            },
            data: this.oldData
          }
        ]
      }
      myChart.setOption(option)
    }
  },
  mounted () {
    if (!window.updataNowPerNum) {
      window.updataNowPerNum = setInterval(() => {
        if (this.nowPerNum.min05 < 15) {
          this.nowPerNum.min05 = this.nowPerNum.min05 + 1
        } else if (this.nowPerNum.min05 === 15) {
          this.nowPerNum.min05 = 4
        }
        if (this.nowPerNum.min10 < 26) {
          this.nowPerNum.min10 = this.nowPerNum.min10 + 1
        } else if (this.nowPerNum.min10 === 26) {
          this.nowPerNum.min10 = 12
        }
        if (this.nowPerNum.min15 < 10) {
          this.nowPerNum.min15 = this.nowPerNum.min15 + 1
        } else if (this.nowPerNum.min15 === 10) {
          this.nowPerNum.min15 = 2
        }
      }, 8000)
    }
    this.initCustomerInfoEcharts()
  }
}
</script>
<style lang="less" scoped>
div#preciousMetalBar {
   height: 400px;
    width: 850px;
    margin: -1% 0 2% 7%;
}
#preciousMetal{
  height: 100%;
  width: 100%;
  .customer_success{
    height: 240px;
    width: 84%;
    margin-left: 9%;
  }
 .now_person_num{
    float: left;
    color: #529dee;
    margin-right: 20%;
    width: 34%;
      ._title {
       padding: 0 22px 22px 0;
       font-size: 22px;
     }
    ._line span {
      display: inline-block;
      width: 50%;
    }
    ._line {
      text-align: center;
      font-size: 20px;
      padding:5px 0;
    }
    .table_title._line {
      margin-bottom: 30px;
      padding-top: 15px;
    }
  }
  .now_num {
    position:relative;
    width:900px;
    height:210px;
    padding-left: 15px;
    background:url('../../static/image/trail-pic/table-bg.png') no-repeat center;
    background-size:100% 100%;
  }
  .success_num{
      ._title{
         color: #2574C9;
        padding-left: 9%;;
        font-size: 24px;
        margin-top: 6%;
        width: 280px;
      }
  }
}
</style>
