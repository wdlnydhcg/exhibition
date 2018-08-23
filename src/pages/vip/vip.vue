/*
 * @Author: lizhiwei8
 * @ 实时区域VIP轨迹图
 * @Date: 2018-08-01 15:39:48
 * @Last Modified by: lizhiwei8
 * @Last Modified time: 2018-08-21 13:48:33
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
          <div class="IFE-Side-Title">办理业务人员统计</div>
          <div class="IFE-Side-Content">
              <radar ref="radarChart" :radarData=radarData></radar>
              <div class="number_business">
                <div class="VIP_level">
                  <div class="VIP_level_title">
                    <span>VIP人员数量今日指数</span>
                  </div>
                  <div class="VIP_level_text">
                    <span>高</span>
                  </div>
                  <div class="VIP_level_person">
                    <span>50~100人</span>
                  </div>
                </div>
                <div class="middle_line"></div>
                <div class="VIP_num">
                  <div class="VIP_num_title">
                    <span>当前营业厅VIP人数</span>
                  </div>
                  <div class="VIP_num_num">
                    <num-free-style :number="vipNowNum" :length="4"></num-free-style>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <!-- <div class="IFE-Left-Bottom">
          <div class="IFE-Side-Title">线上线下融合区的数据统计</div>
          <div class="IFE-Side-Content">
            <mix-area></mix-area>
          </div>
        </div> -->

       <div class="IFE-Left-Bottom">
          <div class="IFE-Side-Title">人员属性分析统计</div>
          <div class="IFE-Side-Content">
            <div class="sex_per">
              <div class="sex_per_title">
               <span>今日到访性别占比</span>
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
              <barChart ></barChart>
            </div>
          </div>
        </div>

      </div>
      <div class="IFE-Center">
        <div class="center_title">
            <span class="hot_card_title">实时区域人数热度图</span>
            <span class="vip_card_title">VIP人员动线图</span>
        </div>
        <!-- vip轨迹图 -->
        <div class="wrap_trail">
          <div class="detail_trail_bg">
           <trail :currentPersonInfo="currentPersonInfo"></trail>
          </div>
        </div>
        <!-- 图片组 -->
        <div class="wrap_pictures">
          <bottomPicture @getPersonInfo="getPersonInfo"></bottomPicture>
        </div>
      </div>
      <div class="IFE-Right">
        <div class="IFE-Right-Top">
          <div class="IFE-Side-Title">客户基础信息</div>
          <div class="IFE-Side-Content">
            <customerInfo></customerInfo>
          </div>
        </div>
        <div class="IFE-Right-Bottom">
          <div class="IFE-Side-Title">(当月)移动展业数据统计 </div>
          <div class="IFE-Side-Content">
             <region></region>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import region from '@/pages/hotpic/region'
import circlePie from '@/pages/vip/circlePie'
import radar from '@/pages/vip/radar'
import lineChart from '@/pages/vip/lineChart'
import barChart from '@/pages/vip/barChart'
import sexPercent from '@/components/sexPercent'
import hotPicData from '@/static/mockJson/hotpic'
import trail from '@/pages/vip/trail'
import bottomPicture from '@/pages/vip/bottomPicture'
import mixArea from '@/pages/vip/mixArea'
import customerInfo from '@/pages/vip/customerInfo'
export default{
  name: 'hotPic',
  components: {
    customerInfo,
    circlePie,
    radar,
    lineChart,
    barChart,
    sexPercent,
    trail,
    region,
    bottomPicture,
    mixArea
  },
  data () {
    return {
      vipNowNum: '5',
      time: '',
      index: 0,
      label: '排队堵塞率',
      percentage: 70,
      radarData: {},
      lineChartData: {},
      currentPersonInfo: {}
    }
  },
  created () {
    this.randomIndex()
    this.getData()
    if (!window.upDataVipRadar) {
      window.upDataVipRadar = setInterval(() => {
        // let _vipNowNum = Number(this.vipNowNum)
        // if (_vipNowNum < 20) {
        //   _vipNowNum = _vipNowNum + 2
        // } else if (_vipNowNum >= 20) {
        //   _vipNowNum = 11
        // }
        let _vipNowNum = Math.floor(Math.random()*5)+5;
        this.vipNowNum = _vipNowNum.toString()
        this.randomIndex()
        this.getData()
        return false
      }, 1000 * 30)
    }
  },
  mounted () {
    this.randomIndex()
    this.getData()
  },
  methods: {
    // 获取人员切换信息
    getPersonInfo (data) {
      this.currentPersonInfo = data
    },
    randomIndex: function () {
      this.index = Math.floor(Math.random() * 2)
    },
    getData: function () {
      this.radarData = hotPicData.radar[this.index]
      this.circleData = hotPicData.circlePie[this.index]
    }
  },
  computed: {

  }
}
</script>
<style lang="less" scoped>
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
  padding-left:5%;
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
    color: #2574C9;
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
    float:left;
}
.stat_queued_text {
    float:left;
    width: 700px;
}
.stat_queued_line {
    height: 480px;
    width: 1050px;
    padding-left: 260px;
}
.stat_queued_title {
    height: 50px;
}
.text_line_span label {
    display: inline-block;
    width: 105px;
    padding: 10px;
    text-align: right;
}
.text_line_span span{
  display:inline-block;
  color:#ffff09;
  width: 110px;
}
//
#heatmap{
  margin: 150px auto;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 2919px;
  height: 1632px;
}
//
/* vip轨迹图 */
.wrap_trail {
    position:relative;
    width: 3000px;
    height: 1300px;
    margin-top: 50px;
    margin-left: 420px;
    background:no-repeat url('../../static/image/trail-pic/vip-plan-bg1.png') left;
    background-repeat: no-repeat;
    background-size: 90% 100%;
}
.detail_trail_bg{
    position:absolute;
    left:0;
    top:0;
    width: 3000px;
    height: 1300px;
    background:no-repeat url('../../static/image/trail-pic/vip-plan-bg2.png') left;
    background-repeat: no-repeat;
    background-size: 90% 100%;
}
/* 移动展业数据统计 */
 span.region_title{
  margin-left: 28%;
}
span.region_title>label {
  font-size:15px;
  color:#2574C9;
}
span.region_title>label:before{
  content:url("../../static/image/hot-map/coordinate-blue-icon.png");
  margin: 10px;
}
span.region_title>span{
  color:#ffff09;
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
span.hot_card_title {
  background: url("../../static/image/hot-map/selected-title.png") no-repeat center;
  background-size: 100% 100%;
}
span.vip_card_title{
  background: url("../../static/image/hot-map/select-title.png") no-repeat center;
  background-size: 100% 88.5%;
  color:#7fb1df;
}
// 底部图片
.wrap_pictures {
    width: 100%;
    height: 300px;
    margin-top: 50px;
}
//
.IFE-Main .full .IFE-Content .IFE-Left{
  background-image:url("../../static/image/p1-left-bg.png");
}

.tip_left_top{
  background: url(../../static/image/bubble/vip2Tip_1.png);
  background-repeat: no-repeat;
  left: 800px;
  top: 630px;
}
.tip_left_bottom{
  background: url(../../static/image/bubble/vip2Tip_2.png);
  background-repeat: no-repeat;
  left: 796px;
  top: 871px;
}
.tip_right_top{
  background: url(../../static/image/bubble/vip2Tip_3.png);
  background-repeat: no-repeat;
  right: 818px;
  top: 629px;
}
.tip_right_bottom{
  background: url(../../static/image/bubble/vip2Tip_4.png);
  background-repeat: no-repeat;
  right: 818px;
  top: 871px;
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
</style>
