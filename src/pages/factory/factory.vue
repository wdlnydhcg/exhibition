
<template>
  <div class="full">
   <div class="IFE-Header">
     <div class="IFE-Main-Title">海康AI Cloud解决方案助力金融科技创新</div>
     <div class="IFE-Main-Sub">智慧风控</div>
    </div>
    <div class="IFE-Content">
      <div class="bubbleInfo tip_left_top"></div>
      <div class="bubbleInfo tip_left_bottom"></div>
      <div class="bubbleInfo tip_right_top"></div>
      <div class="bubbleInfo tip_right_bottom"></div>
      <div class="IFE-Left">
        <div class="IFE-Left-Top">
          <div class="IFE-Side-Title">贷款项目基本信息</div>
          <div class="IFE-Side-Content">
            <img style="margin-left: 100px;" src="@/static/image/baseInfo.png" alt="">
          </div>
        </div>
        <div class="IFE-Left-Bottom">
          <div class="IFE-Side-Title">贷后企业监管趋势分析</div>
          <div class="IFE-Side-Content">
            <div>
              <simple-pie></simple-pie>
              <line-bias></line-bias>
            </div>
          </div>
        </div>
      </div>
      <div class="IFE-Center">
          <center-factor></center-factor>
      </div>
      <div class="IFE-Right">
        <div class="IFE-Right-Top">
          <div class="IFE-Side-Title">物联监控设备运维统计</div>
          <div class="IFE-Side-Content">
            <div class="inlineDiv" style="margin-left: 10%;">
              <dev-monitor-pie></dev-monitor-pie>
            </div>
            <div class="inlineDiv loopPie">
              <loop-circle></loop-circle>
            </div>
            <hori-bar></hori-bar>
          </div>
        </div>
        <div class="IFE-Right-Bottom">
          <div class="IFE-Side-Title" style="height: 8%;padding-top: 12px;">异常报警管理</div>
          <div class="IFE-Side-Content">
            <!-- <bar-bias></bar-bias> -->
            <alarm-mgr></alarm-mgr>
            <alarm-overview style="margin-top:30px;"></alarm-overview>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
import sexPercent from '@/components/sexPercent'
import simplePie from '@/pages/factory/subPage/simplePie'
import lineBias from '@/pages/factory/subPage/lineBias'
import devMonitorPie from '@/pages/factory/subPage/devMonitorPie'
import loopCircle from '@/pages/factory/subPage/loopCircle'
import horiBar from '@/pages/factory/subPage/horiBar'
import barBias from '@/pages/factory/subPage/barBias'
import centerFactor from '@/pages/factory/subPage/center_factor'
import alarmOverview from '@/pages/factory/subPage/alarmOverview'
import alarmMgr from  '@/pages/factory/subPage/alarmMgr'
import newNumFreeStyle from '@/components/newNumFreeStyle'

export default{
  name: 'hotPic',
  components: {
    sexPercent,
    simplePie,
    lineBias,
    devMonitorPie,
    loopCircle,
    horiBar,
    barBias,
    centerFactor,
    alarmOverview,
    alarmMgr,
    newNumFreeStyle

  },
  data () {
    return {
      time: ''
    }
  },
  created () {

  },
  destroyed() {


  },
  mounted () {
  
  },
  methods: {
   
  }
}
</script>
<style lang="less">
.IFE-Center{
  // background-image: url("../../static/image/second/map-bg.png");
}
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
      position: absolute;
      width: 800px;
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
  background: url(../../static/image/bubble/factoryTip_1.png);
  background-repeat: no-repeat;
  left: 800px;
  top: 630px;
}
.tip_left_bottom{
  background: url(../../static/image/bubble/factoryTip_2.png);
  background-repeat: no-repeat;
  left: 796px;
  top: 871px;
}
.tip_right_top{
  background: url(../../static/image/bubble/factoryTip_3.png);
  background-repeat: no-repeat;
  right: 818px;
  top: 629px;
}
.tip_right_bottom{
  background: url(../../static/image/bubble/factoryTip_4.png);
  background-repeat: no-repeat;
  right: 818px;
  top: 871px;
}
</style>
