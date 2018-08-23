/*
 * @Author: lizhiwei8
 * @ 设置数字字体
 * @Date: 2018-08-01 14:23:55
 * @Last Modified by: lizhiwei8
 * @Last Modified time: 2018-08-06 18:41:37
 */
<template>
<span style="white-space:nowrap;">
  <span class="NumberFont" v-for="(item, index) in numberArr" :key="item + '_num_' + index*Math.random()">
    <span class="RealNum" ref="realNum">{{item === 'NULL' ? '' : item}}</span>
    <span class="ShamNum" ref="ShamNum">8</span>
  </span>
</span>
</template>
<script>
export default {
  name: 'numFreeStyle',
  props: {
    number: {
      type: String,
      default: '0000'
    },
    length: {
      type: Number,
      default: 4
    }
  },
  computed: {
    numberArr: function () {
      let _numberArr = this.number.split('')
      let numberArrLength = _numberArr.length
      let defaultLength = this.length
      if (numberArrLength < defaultLength) {
        for (let i = 0; i < (defaultLength - Number(numberArrLength)); i++) {
          _numberArr.unshift('NULL')
        }
      } else if (numberArrLength > defaultLength) {
        _numberArr = _numberArr.splice(0, defaultLength)
      }
      return _numberArr
    }
  }
}
</script>
<style lang="less">
</style>
