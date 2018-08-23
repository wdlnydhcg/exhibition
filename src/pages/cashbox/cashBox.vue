
<template>
  <div class="full">
   <div class="IFE-Header">
     <div class="IFE-Main-Title">海康AI Cloud解决方案助力金融科技创新</div>
     <div class="IFE-Main-Sub">智慧运营</div>
    </div>
    <div class="IFE-Content">
      <div class="bubbleInfo tip_left_top"></div>
      <div class="bubbleInfo tip_left_bottom"></div>
      <div class="bubbleInfo tip_right_top"></div>
      <div class="bubbleInfo tip_right_bottom"></div>
      <div class="IFE-Left">
        <div class="IFE-Left-Top">
          <div class="IFE-Side-Title" style="padding-top:3%">现金存量分析</div>
          <div class="IFE-Side-Content">
              <cash-stock-analysis></cash-stock-analysis>
          </div>
        </div>
        <div class="IFE-Left-Bottom">
          <div class="IFE-Side-Title">现金存量趋势</div>
          <div class="IFE-Side-Content">
            <div>
                <bank-change-analysis></bank-change-analysis>
                <cash-use-analysis></cash-use-analysis>
            </div>
          </div>
        </div>
      </div>
      <div class="IFE-Center">
          <center-factor></center-factor>
      </div>
      <div class="IFE-Right">
        <div class="IFE-Right-Top">
          <div class="IFE-Side-Title">当日任务情况</div>
          <div class="IFE-Side-Content">
            <task-progress></task-progress>
          </div>
        </div>
        <div class="IFE-Right-Bottom">
          <div class="IFE-Side-Title" style="height: 8%;">当日监控预警</div>
          <div class="IFE-Side-Content">
              <today-monitor-alarm></today-monitor-alarm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
import sexPercent from '@/components/sexPercent'

import newNumFreeStyle from '@/components/newNumFreeStyle'
// D:\workspace\国际会展\financialExhibition\src\pages\cashbox\subPage\bankChangeAnalysis.vue
import alarmMgr from  '@/pages/factory/subPage/alarmMgr'
import bankChangeAnalysis from '@/pages/cashbox/subPage/bankChangeAnalysis'
import cashUseAnalysis from '@/pages/cashbox/subPage/cashUseAnalysis'
import todayMonitorAlarm from '@/pages/cashbox/subPage/todayMonitorAlarm'
import cashStockAnalysis from '@/pages/cashbox/subPage/cashStockAnalysis'
import centerFactor from '@/pages/cashbox/subPage/centerFactor'
import taskProgress from '@/pages/cashbox/subPage/taskProgress'

export default{
  name: 'hotPic',
  components: {
    sexPercent,
    newNumFreeStyle,
    bankChangeAnalysis,
    cashUseAnalysis,
    todayMonitorAlarm,
    cashStockAnalysis,
    centerFactor,
    taskProgress
  },
  data () {
    return {
      time: ''
    }
  },
  created () {

  },
  mounted () {
    
  },
  methods: {
  
  }
}
</script>
<style lang="less">
    .business{
        width:300px;
        height:300px;
    }
    .inlineDiv{
        display: inline-block;
    }
    .loopPie{
        float: right;
        right: 120px;
        top: 125px;
        position: absolute;
    }
    .IFE-Main .full .IFE-Side-Title {
        height: 10%;
        width: 100%;
        text-align: left;
        padding-top: 2%;
        font-size: 24px;
        color: #ffffff;
        opacity: 0.74;
        font-weight: bold;
        letter-spacing: 5px;
    }
   .bubbleInfo{
        z-index: 2;
        position: absolute;
        width: 600px;
        height: 260px;
        opacity: 0;
        animation-name: easy-show-bubble;
        animation-delay: 2s;
        animation-duration: 15000ms;
        animation-fill-mode: forwards;
        animation-timing-function:linear;    
   }
   @keyframes easy-show-bubble {
      0%{
        opacity: 0;
      }
      10%{
        opacity: 1;
      }
      90%{
        opacity: 1;
      }
      100%{
        opacity: 0;
      }
   }
  .tip_left_top{
    background: url(../../static/image/bubble/cashBoxTip_1.png);
    background-repeat: no-repeat;
    left: 800px;
    top: 630px;
  }
  .tip_left_bottom{
    background: url(../../static/image/bubble/cashBoxTip_2.png);
    background-repeat: no-repeat;
    left: 796px;
    top: 871px;
  }
  .tip_right_top{
    background: url(../../static/image/bubble/cashBoxTip_3.png);
    background-repeat: no-repeat;
    right: 880px;
    top: 629px;
  }
  .tip_right_bottom{
    background: url(../../static/image/bubble/cashBoxTip_4.png);
    background-repeat: no-repeat;
    right: 875px;
    top: 871px;
  }
</style>
