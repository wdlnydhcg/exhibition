<template>
 <div class="vue-progress-bar default-theme">
  <div class="vue-progress-bar__tip">
   <span class="vue-progress-bar__tiplabel">{{label}}</span>
   <span class="vue-progress-bar__tiptext">{{text}}</span>
  </div>
  <div class="vue-progress-bar__outer">
   <div class="vue-progress-bar__inner" :style="barStyle"></div>
  </div>
 </div>
</template>
 
<script>
    export default {
    props:{
    label:String,
    text:String,
    height:{
    type: Number,
    default: 0,
    required: true,
    validator: val => val >= 0
    },
    color: {
    type: String,
    default: ''
    },
    percentage:{
    type: Number,
    default: 0,
    required: true,
    validator: val => val >= 0 && val <= 100
    }
    },
    computed:{
    barStyle() {
    const style = {};
    style.width = this.percentage + '%';
    style.height = this.height + 'px';
    style.backgroundColor = this.color;
    return style;
    }
    }
    }
</script>
 
<style scoped>
 .vue-progress-bar.default-theme .vue-progress-bar__outer {
   background: #eee;
 }
 
 .vue-progress-bar  .vue-progress-bar__tiptext{
   float: right;
 }
</style>