<template>
<div class="region_wrap">
    <div class="region_stat">
        <div class="region_stat_circle">
            <div class="_circle _circle1">
              <div class="_num">{{data[0]}}</div>
              <div class="_title">覆盖社区</div>
            </div>
            <div class="region_stat_tri"></div>
              </div>
              <div class="region_stat_circle">
            <div class="_circle _circle2">
              <div class="_num">{{data[1]}}</div>
              <div class="_title">业务总量</div>
            </div>
            <div class="region_stat_tri"></div>
              </div>
              <div class="region_stat_circle">
            <div class="_circle _circle3">
              <div class="_num">{{data[2]}}</div>
              <div class="_title">展业频次</div>
            </div>
            <div class="region_stat_tri"></div>
        </div>
    </div>
    <div class="region_content">
        <!-- 区域名 -->
        <span class="hz_region_name" style="top:21%;left:45%;opacity:0.65;transform: rotateX(44deg);">滨和路</span>
        <span class="hz_region_name" style="top:24%;left:85%;opacity:0.65;transform: rotateX(44deg);">建设二路</span>
        <span class="hz_region_name" style="top:28%;left:37%;opacity:0.7;transform: rotateX(43deg);">滨兴路</span>
        <span class="hz_region_name" style="top:31%;left:31%;opacity:0.7;transform: rotateX(43deg);">滨康路</span>
        <span class="hz_region_name" style="top:37%;left:44%;opacity:0.8;transform: rotateX(42deg);">彩虹快速路</span>
        <span class="hz_region_name" style="top:66%;left:75%;opacity:0.95;transform: rotateX(32deg);">安图桥</span>
        <span class="hz_region_name" style="top:75%;left:77%;opacity:0.95;transform: rotateX(32deg);">安阳桥</span>
         <!-- 点位 -->
        <span class="hz_region_coord" style="top:12%;left:73%;opacity:0.3" id="point-id-1"></span><span class="hz_region_coord" style="top:20%;left:87%;opacity:0.5" id="point-id-2"></span>
        <span class="hz_region_coord" style="top:25%;left:95%;opacity:0.6" id="point-id-3"></span><span class="hz_region_coord" style="top:37%;left:37%;opacity:0.9" id="point-id-4"></span>
        <span class="hz_region_coord" style="top:28%;left:75%;opacity:0.65;" id="point-id-5"></span><span class="hz_region_coord" style="top:28%;left:48%;opacity:0.7;" id="point-id-6"></span>
        <span class="hz_region_coord" style="top:26%;left:25%;opacity:0.7;" id="point-id-7"></span><span class="hz_region_coord" style="top:50%;left:90%;" id="point-id-8"></span>
        <span class="hz_region_coord" style="top:40%;left:80%;opacity:0.8;" id="point-id-9"></span><span class="hz_region_coord" style="top:78%;left:83%;" id="point-id-10"></span>
        <span class="hz_region_coord" style="top:28%;left:28%;opacity:0.7;" id="point-id-11"></span><span class="hz_region_coord" style="top:81%;left:81%;" id="point-id-12"></span>
        <span class="hz_region_coord" style="top:91%;left:87%;" id="point-id-13"></span><span class="hz_region_coord" style="top:53%;left:18%;" id="point-id-14"></span>
        <span class="hz_region_coord" style="top:64%;left:34%;" id="point-id-15"></span><span class="hz_region_coord" style="top:72%;left:66%;" id="point-id-16"></span>
    </div>
</div>
</template>
<script>
export default {
  name: 'region',
  data () {
    return {
      data: [53, 346, 18]
    }
  }
}
</script>
<style lang="less" scoped>
.region_wrap{
    width:100%;
    height:100%;
.region_content{
  background: url(../../static/image/hot-map/hz-map.png) no-repeat top right;
  background-size: 100% 103%;
  background-clip: border-box;
  height: 71%;
  width: 92%;
  position: relative;
  margin-left: 5%;
  .hz_region_name{
      position:absolute;
      color:#529dee;
  }
  .hz_region_coord{
    width:18px;
    height:22px;
    position:absolute;
    background:url("../../static/image/hot-map/coordinate-yellow-icon.png")
  }
}
.region_stat {
    height: 30%;
    width: 70%;
    margin-left: 23%;
  .region_stat_circle {
    float: left;
    height: 100%;
    width: 33%;
  }
  ._circle {
    height: 81%;
    width:100%;
    position:relative;
    ._num {
      color: #f2cd27;
      font-size: 50px;
      position: relative;
      top: 20%;
      left: 36%;
      font-size: 60px;
   }
   ._title {
      color: #2574C9;
      font-size: 24px;
      position: absolute;
      top: 60%;
      left: 30%;
}
  }
  ._circle1{
     background:url("../../static/image/hot-map/pie-circle1.png") no-repeat center;
  }
  ._circle2{
     background:url("../../static/image/hot-map/pie-circle2.png") no-repeat center;
     ._num {
       left: 31%;
     }
     ._title {
       left: 31%;
     }
  }
  ._circle3{
     background:url("../../static/image/hot-map/pie-circle3.png") no-repeat center;
    ._num {
     left: 38%;
    }
    ._title {
       left: 32%;
     }
  }
  .region_stat_tri {
    height: 5%;
    background:url("../../static/image/hot-map/circle-tri.png") no-repeat center;
  }
}
}
</style>
