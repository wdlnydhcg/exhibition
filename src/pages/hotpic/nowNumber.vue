<template>
<div class="now_number_wrap">
    <div class="now_number">
      <div class="now_top">
        <div class="now_time_text">
          <div>当前营业厅总人数</div>
          <div>{{now_time_person}}</div>
        </div>
        <div class="now_num">
          <num-free-style  :number="data.nowData[0]" :length="3"></num-free-style>
        </div>
      </div>
      <div class="now_bottom_left">
        <div>
          <span class="bottom-first">现金业务区:</span>
          <label>3人</label>
          <span>等待区:</span>
          <label>15人</label>
        </div>
        <div>
          <span class="bottom-first">VIP业务区:</span>
          <label>4人</label>
          <span  style="width: 18%;">自助区:</span>
          <label>10人</label>
        </div>
      </div>
    </div>
    <div class="next_number">
      <div class="next_top">
        <div class="next_num">
          <num-free-style  :number="data.nextData[0]" :length="3"></num-free-style>
        </div>
        <div class="next_time_text">
          <div>下一时段人数预测</div>
          <div>{{next_time_person}}</div>
        </div>
      </div>
      <div class="next_bottom">
        <div>
          <span>现金业务区:</span>
          <label>4人</label>
          <span>等待区:</span>
          <label>15人</label>
        </div>
        <div>
          <span>VIP业务区:</span>
          <label>3人</label>
          <span style="width: 18%;">自助区:</span>
          <label>13人</label>
        </div>
      </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'region',
  props:{
      waitNum:{
          type:String
      },
  },
  data () {
    return {
      now_time_person: '10:12-11:12',
      next_time_person: '11:12-12:12',
      data: {
        nowData: ['34', '112', '12', '12', '42'],
        nextData: ['35', '123', '52', '34', '21']
      }
    }
  },
  methods: {
    getTime () {
      let nowTime = new Date()
      // let nowMinutes = nowTime.getMinutes() < 10 ? '0' + nowTime.getMinutes() : nowTime.getMinutes()
      // let nowHour = nowTime.getHours() < 10 ? '0' + nowTime.getHours() : nowTime.getHours()
      // let befroreHour = (nowTime.getHours() - 1) < 0 ? 23 : ((nowTime.getHours() - 1) < 10 ? '0' + (nowTime.getHours() - 1) : (nowTime.getHours() - 1))
      // let nextHour = (nowTime.getHours() + 1) === 24 ? '00' : ((nowTime.getHours() + 1) < 10 ? '0' + (nowTime.getHours() + 1) : (nowTime.getHours() + 1))
     
    //  this.now_time_person = befroreHour + ':' + nowMinutes + '-' + nowHour + ':' + nowMinutes
    //   this.next_time_person = nowHour + ':' + nowMinutes + '-' + nextHour + ':' + nowMinutes
       this.now_time_person ="14:00-15:00"
       this.next_time_person ="15:00-16:00"
    }
  },
  created () {
    this.getTime()
    setInterval(() => {
      this.getTime()
    }, 6000)
  }
}
</script>
<style>
body{
  line-height:normal !important;
}
</style>
<style lang="less" scoped>
.now_number_wrap{
    width:100%;
    height:100%;
    color: #3594ec;
    background:url("../../static/image/hot-map/time-number-bottom.png") no-repeat center;
    background-size:100% 100%;
    .now_number, .next_number{
      float:left;
      width:50%;
      height: 100%;
    }
    .now_top{
      text-align: center;
      padding-top: 3%;
      padding-left: 23%;
      height: 55%;
      .now_time_text, .now_num{
        float:left;
      }
      .now_time_text {
        margin-right: 12%;
        padding-top: 2%;
        div{
          margin-bottom:2%;
          text-align:right;
        }
      }
    }
    .next_top{
      height: 55%;
      text-align: center;
      padding-top: 3%;
      padding-left: 23%;
      .next_time_text, .next_num{
        float:left;
      }
      .next_time_text {
        margin-left: 12%;
        padding-top: 2%;
        div{
          margin-bottom:2%;
          text-align:left;
        }
      }
    }
    .now_bottom_left{
       padding-left:21%;
       .bottom-first{
        margin-left:225px;
      }
        span{
          display: inline-block;
          width: 109px;
          margin-bottom: 2%;
          margin-top: 1%;
          margin-right:2%;
          font-size: 20px;
          text-align:right;
        }
        label{
          color:#ffff09;
          margin-right:3%;
        }
    }
    .now_bottom, .next_bottom{
      // height:88px;
      // line-height:88px;
      padding-left:21%;
      
      span{
        display: inline-block;
        width: 17%;
        margin-bottom: 2%;
        margin-top: 1%;
        margin-right:2%;
        font-size: 20px;
        text-align:right;
      }
      label{
        color:#ffff09;
        margin-right:3%;
      }
      // div{
      //   height:44px;
      //   line-height:44px;
      // }
    }
}
</style>
