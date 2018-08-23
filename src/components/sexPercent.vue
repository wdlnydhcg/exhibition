<template>
<div class="sex_wrap">
  <div class="first-level sex-level">
    <div class="blue-above" :style="{width:Blue1}">
        <img src="../static/image/boy.png">
    </div>
    <div class="rad-below" :style="{width:Rad1}">
        <img src="../static/image/girl.png">
    </div>
  </div>
  <div class="second-level sex-level">
    <div class="blue-above" :style="{width:Blue2}">
        <img src="../static/image/boy.png">
    </div>
    <div class="rad-below" :style="{width:Rad2}">
        <img src="../static/image/girl.png">
    </div>
  </div>
  <div class="third-level sex-level">
    <div class="blue-above" :style="{width:Blue3}">
        <img src="../static/image/boy.png">
    </div>
    <div class="rad-below" :style="{width:Rad3}">
        <img src="../static/image/girl.png">
    </div>
  </div>
  <div class="four-level sex-level">
    <div class="blue-above" :style="{width:Blue4}">
        <img src="../static/image/boy.png">
    </div>
    <div class="rad-below" :style="{width:Rad4}">
        <img src="../static/image/girl.png">
    </div>
  </div>
  <div class="four-level sex-level">
    <div class="blue-above" :style="{width:Blue4}">
        <img src="../static/image/boy.png">
    </div>
    <div class="rad-below" :style="{width:Rad4}">
        <img src="../static/image/girl.png">
    </div>
  </div>
</div>
</template>
<script>
export default{
  name: 'sexPercent',
  props: {
    percent: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      Blue1: 0,
      Rad1: '100%',
      Blue2: 0,
      Rad2: '100%',
      Blue3: 0,
      Rad3: '100%',
      Blue4: 0,
      Rad4: '100%'
    }
  },
  methods: {
    computedPer () {
      let fullLevel = Math.floor(this.percent / 20)
      let residuePer = this.percent % 20
      for (let index = 1; index <= 5; index++) {
        if (index <= fullLevel) {
          this[`Blue${index}`] = '100%'
          this[`Rad${index}`] = 0
        } else if (index === fullLevel + 1) {
          this[`Blue${index}`] = (residuePer / 20) * 100 + '%'
          // this[`Rad${index}`] = (100 - residuePer) + '%'
        }
      }
    }
  },
  mounted () {
    this.computedPer()
  }
}
</script>
<style lang="less">
.sex_wrap{
    width:100%;
    height:100%;
    .sex-level{
        width:15.3%;
        height:100%;
        float:left;
        position:relative;
        margin-right:4.7%;
        img {
            vertical-align: top;
        }
    }
     .sex-level:last-child{
       margin-right:0;
     }
    .blue-above{
        position:absolute;
        left:0;
        top:0;
        z-index:10;
        height:100%;
        overflow:hidden;
        background: #061342;
    }
    .rad-below{
        position:absolute;
        right:0;
        top:0;
        height:100%;
        overflow:hidden;
        background: #061342;
    }
}

</style>
