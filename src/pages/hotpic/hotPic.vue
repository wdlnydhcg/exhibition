/*
 * @Author: lizhiwei8
 * @ 实时区域人数热度图
 * @Date: 2018-08-01 15:39:48
 * @Last Modified by: lizhiwei8
 * @Last Modified time: 2018-08-21 13:50:11
 */

<template>
  <div class="full">
   <div class="IFE-Header">
     <div class="IFE-Main-Title">海康AI Cloud解决方案助力金融科技创新</div>
     <div class="IFE-Main-Sub">智慧营销</div>
    </div>
    <div class="IFE-Content">
      <div class="bubbleInfo tip_left_top"></div>
      <div class="bubbleInfo tip_left_bottom"></div>
      <div class="bubbleInfo tip_right_top"></div>
      <div class="bubbleInfo tip_right_bottom"></div>
      <div class="IFE-Left">
        <div class="IFE-Left-Top">
          <div class="IFE-Side-Title" style="padding-top:35px;padding-left:70px;">客流人员信息统计</div>
          <div class="IFE-Side-Content">
              <div class="simplePie-row row-total">
                <div class="simplePie-title">业务交易总数</div>
                <div class="totalNum total-num">
                  <new-num-free-style  :height="40" :from="0" :to="tradeObject.totalNum[0]"></new-num-free-style>
                </div>
                <simple-pie :title="tradeObject.title[0]" pieColor="#fef957" :totalNum="tradeObject.totalNum[0]" :itemNum="tradeObject.itemNum[0]"></simple-pie>
                <simple-pie :title="tradeObject.title[1]" pieColor="#fe728c" :totalNum="tradeObject.totalNum[0]" :itemNum="tradeObject.itemNum[1]"></simple-pie>
              </div>
              <div class="simplePie-row">
                <div class="simplePie-title">自助业务成交数量</div>
                <div class="totalNum">
                  <new-num-free-style  :height="40" :from="0" :to="tradeObject.totalNum[1]"></new-num-free-style>
                </div>
                <simple-pie style="padding-left:20px;" :title="tradeObject.title[2]" pieColor="#fef957" :totalNum="tradeObject.totalNum[1]" :itemNum="tradeObject.itemNum[2]"></simple-pie>
                <simple-pie :title="tradeObject.title[3]" pieColor="#fe728c" :totalNum="tradeObject.totalNum[1]" :itemNum="tradeObject.itemNum[3]"></simple-pie>
                <simple-pie :title="tradeObject.title[4]" pieColor="#01f8ff" :totalNum="tradeObject.totalNum[1]" :itemNum="tradeObject.itemNum[4]"></simple-pie>
              </div>
              <line-bias></line-bias>

          </div>
        </div>
     <div class="IFE-Left-Bottom">
          <div class="IFE-Side-Title">人员属性分析统计</div>
          <div class="IFE-Side-Content">
            <div class="sex_per">
              <div class="sex_per_title">
               <span>等候区今日到访性别占比</span>
              </div>
              <div>
                <div class="sex_boy">
                  <num-free-style number="51" :length="2"></num-free-style><span class="per">%</span>
                </div>
                <div class="sex_pic">
                  <sexPercent :percent="51"></sexPercent>
                </div>
                <div class="sex_girl">
                  <num-free-style number="49" :length="2"></num-free-style><span class="per">%</span>
                </div>
              </div>
            </div>
            <div class="age_bar">
              <div class="waitTotalNum">
                <div class="titleInfo">等候区排队总人数</div>
                <new-num-free-style  :height="75" :from="0" :to="waitTotalNum" length="6"></new-num-free-style>
              </div>
              <hori-bar2 ref="waitAnalysis" @waitNum="waitNumChange"></hori-bar2>
            </div>
          </div>
        </div>
      </div>
      <div class="IFE-Center">
        <div class="center_title">
            <span class="hot_card_title">实时区域人数热度图</span>
            <span class="vip_card_title">VIP人员动线图</span>
        </div>
        <!-- 热力图 -->
        <div class="wrap_hot_map">
          <div class="detail_trail_bg">
            <heatmapJS :hmData="hmData"></heatmapJS>
          </div>
        </div>
        <!-- 当前人数组 -->
        <div class="wrap_center_bottom">
         <div class="hot_now_num">
           <nowNumber></nowNumber>
         </div>
        </div>
      </div>
      <div class="IFE-Right">
        <div class="IFE-Right-Top">
          <div class="IFE-Side-Title">区域热度统计</div>
          <div class="IFE-Side-Content">
            <div class="stat_queued_time">
              <div class="stat_queued_text">
                <div class="stat_queued_title">
                  功能区当前人数统计
                </div>
                <div class="stat_text">
                  <div class="text_line">
                    <span class="text_line_span">
                      <label>贵宾服务区:</label><span>5人</span>
                    </span>
                    <span class="text_line_span">
                      <label>咨询引导区:</label><span>4人</span>
                    </span>
                    <span class="text_line_span">
                      <label>非现金业务区:</label><span>6人</span>
                    </span>
                  </div>
                  <div class="text_line">
                    <span class="text_line_span">
                      <label>现金服务区:</label><span>4人</span>
                    </span>
                    <span class="text_line_span">
                      <label>智能营销区:</label><span>3人</span>
                    </span>
                    <span class="text_line_span">
                      <label>24小时服务区:</label><span>10人</span>
                    </span>
                  </div>
                  <div class="text_line">
                    <span class="text_line_span">
                      <label>休息等候区:</label><span>25人</span>
                    </span>
                    <span class="text_line_span">
                      <label>智能服务区:</label><span>8人</span>
                    </span>
                    <span class="text_line_span">
                      <label>线上线下融合区:</label><span>10人</span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="stat_queued_circle">
                <loopCircle :label=label :percentage=percentage></loopCircle>
                <!-- <circlePie :label=label :percentage=percentage></circlePie> -->
              </div>
            </div>
            <div class="stat_queued_line">
              <area-hot-statis></area-hot-statis>
              <!-- <lineChart :lineChartData=lineChartData></lineChart> -->
            </div>
          </div>
        </div>
        <div class="IFE-Right-Bottom">
          <div class="IFE-Side-Title" style="padding-top: 10px;">移动展业数据统计
            <span class="region_title">
              <label>地区:</label>
              <span>杭州市 滨江区</span>
            </span>
          </div>
          <div class="IFE-Side-Content">
            <region></region>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import nowNumber from '@/pages/hotpic/nowNumber'
import region from '@/pages/hotpic/region'
import circlePie from '@/pages/hotpic/circlePie'
import radar from '@/pages/hotpic/radar'
import lineChart from '@/pages/hotpic/lineChart'
import barChart from '@/pages/hotpic/barChart'
import hotPicData from '@/static/mockJson/hotpic'
import heatmapJS from '@/pages/hotpic/heatMap'
import sexPercent from '@/components/sexPercent'
import simplePie from '@/pages/hotpic/simplePie'
import newNumFreeStyle from '@/components/newNumFreeStyle'
import lineBias from '@/pages/hotpic/lineBias'
import horiBar2 from '@/pages/hotpic/horiBar2'
import areaHotStatis from '@/pages/hotpic/areaHotStatis'
import loopCircle from '@/pages/hotpic/loopCircle'

export default{
  name: 'hotPic',
  components: {
    circlePie,
    radar,
    lineChart,
    barChart,
    heatmapJS,
    sexPercent,
    region,
    nowNumber,
    simplePie,
    newNumFreeStyle,
    lineBias,
    horiBar2,
    areaHotStatis,
    loopCircle
  },
  data () {
    return {
      hmData: [],
      time: '',
      index: 0,
      label: '排队堵塞率',
      percentage: 70,
      radarData: {},
      lineChartData: {},
      tradeObject: {
        title: ['对公业务数量', '对私业务数量', '贵金属成交量', '新产品成交量', '新增行用卡数量'],
        totalNum: [123, 118],
        itemNum: [100, 23, 12, 7, 9]
      },
      waitTotalNum:9,
     

    }
  },
  computed:{
     
  },
  created () {
    this.randomIndex()
    this.getData()
    if (!window.upDataHotPic) {
      window.upDataHotPic = setInterval(function () {
        this.randomIndex()
        this.getData()
        return false
      }, 1000 * 60 * 60)
    }
  },
  mounted () {

  },
  methods: {
    waitNumChange:function (data) {
      this.waitTotalNum = data
      // console.log("data  ---  1",data);
      
      //  return 
    },
    randomIndex: function () {
      this.index = Math.floor(Math.random() * 2)
    },
    getData: function () {
      this.radarData = hotPicData.radar[this.index]
      this.circleData = hotPicData.circlePie[this.index]
      this.hmData = hotPicData.heatMap[0]
    }
  },
 
}
</script>
<style lang="less" scoped>
body{
  line-height:normal !important;
}
/* 办理业务人员统计 */
.number_business{
    height: 200px;
    margin-top: -118px;
    width:860px;
}
.VIP_level,.VIP_num{
  float:Left;
  height:200px;
  width:420px;
  text-align:center;
}
.VIP_num_title{
  color:#2574C9;
  line-height: 90px;
}
.VIP_num_num{
  height:50px;
  line-height:50px;
}
.VIP_level_title{
    height: 50px;
    line-height: 90px;
    color: #2574C9;
}
.VIP_level_text {
    height: 100px;
    color: #eb8d67;
    font-size: 60px;
    line-height: 100px;
}
.VIP_level_person{
  color: #2574C9;
}
.middle_line {
    float:Left;
    border-left: 2px solid #2574C9;
    height: 82px;
    margin-top: 60px;
}
/* 人员属性分析统计 */
.sex_per{
  height:165px;
  padding-left:9%;
}
.age_bar{
  height:450px;
  width:900px;
  margin-left:5%;
  margin-top: 120px;
}
.sex_pic{
  width:300px;
  height:100px;
  margin-top: 16px;
  margin-left: 100px;
  margin-right:80px;
}
.sex_per_title {
    color: #3594ec;
    font-size: 20px;
}
.sex_boy,.sex_girl,.sex_pic{
  float:left;
  line-height: 165px;
  position:relative;
}
span.per{
  color: #fff;
  font-size: 25px;
  position: absolute;
  bottom: -12px;
}
//
/* 智慧网点业务排队统计 */
.stat_queued_time {
    height: 230px;
    width: 1000px;
    margin-left: 11%;
    padding-right: 4%;
    padding-bottom: 20px;
    color:#2574C9;
}
.stat_queued_circle {
    width: 255px;
    height: 230px;
    float: right;
    right: 30px;
    bottom: 20px;
    position: relative;
}
.stat_queued_text {
    float:left;
    width: 700px;
}
.stat_queued_line {
    height: 480px;
    width: 1050px;
    padding-left: 200px;
}
.stat_queued_title {
    height: 50px;
    font-size: 24px;
    text-indent: 30px;
    color: #41b3ef;
}
.text_line_span label {
    display: inline-block;
    width: 165px;
    padding: 10px;
    text-align: right;
    color: #41b3ef;
}
.text_line_span span{
  display:inline-block;
  color:#ffff09;
  width: 55px;
}
.text_line{
  padding-left: 5px;
}
//

/* 热力图 */
.wrap_hot_map {
    position:relative;
    width: 2600px;
    height: 1300px;
    margin-top: 50px;
    margin-left: 420px;
   background:no-repeat url('../../static/image/trail-pic/vip-plan-bg1.png') left;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.detail_trail_bg{
    position:absolute;
    left:0;
    top:0;
    width: 2600px;
    height: 1300px;
    background:no-repeat url('../../static/image/trail-pic/vip-plan-bg2.png') left;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
/* 移动展业数据统计 */
 span.region_title{
  margin-left: 24%;
}
span.region_title>label{
  font-size:15px;
  color:#2574C9;
}
span.region_title>label:before{
  content:url("../../static/image/hot-map/coordinate-blue-icon.png");
  margin: 5px 10px 0px 0px;
  top: 5px;
  position: relative;
}
span.region_title>span{
  color:#ceac2d;
  font-size:15px;
}
// 中间标题
.center_title{
    width: 100%;
    height: 150px;
    text-align: center;
    color: #1c5487;
    font-size: 42px;
    letter-spacing: 3px;
    line-height:150px;
}
span.hot_card_title, span.vip_card_title {
    display: inline-block;
    height: 170px;
    width:600px;
    line-height: 110px;
    padding:30px;
}
span.vip_card_title {
  background: url("../../static/image/hot-map/select-title.png") no-repeat center;
  background-size: 100% 88.5%;
}
span.hot_card_title{
  background: url("../../static/image/hot-map/selected-title.png") no-repeat center;
  background-size: 100% 100%;
  color:#7fb1df;
}
// 底部实时数据
.hot_now_num{
  height: 78%;
  width: 50%;
  margin-left: 26%;
}
//
.wrap_center_bottom {
    width: 100%;
    height: 300px;
    margin-top: 50px;
}
//
.IFE-Main .full .IFE-Content .IFE-Left{
  background-image:url("../../static/image/p1-left-bg.png");
}
//
.simplePie-row {
    padding-left: 250px;
    position: relative;
}
.row-total{
  padding-left:270px !important;
}
.simplePie-title{
    color: #6499c3;
    display: inline-block;
    height: 100%;
    position: absolute;
    margin-left: -160px;
    margin-top: 13px;
    font-size: 20px;
    min-width: 100px;
    text-align: center;
}
 .totalNum{
    color: rgb(255, 255, 255);
    position: absolute;
    margin-left: -110px;
    margin-top: 60px;
    font-size: 50px;
    min-width: 100px;
    text-align: center;
}
.total-num{
  margin-left:-138px;
}
.titleInfo{
    color: #3594ec;
    font-size: 18px;
    height: 55px;
    line-height: 55px;
}
.waitTotalNum{
    padding-left: 50px;
    display: inline-block;
    height: 165px;
    margin-left: 30px;
    background: url("../../static/image/third/left_bg1.png");
    background-repeat: no-repeat;
    width: 835px;

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
  background: url(../../static/image/bubble/hopTip_1.png);
  background-repeat: no-repeat;
  left: 800px;
  top: 630px;
}
.tip_left_bottom{
  background: url(../../static/image/bubble/hopTip_2.png);
  background-repeat: no-repeat;
  left: 796px;
  top: 871px;
}
.tip_right_top{
  background: url(../../static/image/bubble/hopTip_3.png);
  background-repeat: no-repeat;
  right: 818px;
  top: 629px;
}
.tip_right_bottom{
  background: url(../../static/image/bubble/hopTip_4.png);
  background-repeat: no-repeat;
  right: 818px;
  top: 871px;
}
</style>
