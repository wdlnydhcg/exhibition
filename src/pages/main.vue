/*
 * @Author: lizhiwei8
 * @ 构建主页面
 * @Date: 2018-08-01 13:24:48
 * @Last Modified by: lizhiwei8
 * @Last Modified time: 2018-08-17 17:27:24
 */
<template>
  <div class="IFE-Main" :class="{'stopCurrent':stopCurrent}">
    <div class="pre_page" @click="pre_Page"></div>
    <div class="next_page" @click="next_Page"></div>
    
    <hotPic :class="{'changePage':changePage=='T1'}" v-show="pageObject.T1"></hotPic>
    <vip  :class="{'changePage':changePage=='T2'}" v-show="pageObject.T2"></vip>
    <vip2  :class="{'changePage':changePage=='T3'}" v-show="pageObject.T3"></vip2>
    <cash-box :class="{'changePage':changePage=='T4'}" v-if="pageObject.T4"></cash-box>
    <factory-page :class="{'changePage':changePage=='T5'}" v-if="pageObject.T5"></factory-page>
  </div>
</template>k
<script>
import hotPic from '@/pages/hotPic/hotPic'
import cashBox from '@/pages/cashbox/cashBox'
import vip from '@/pages/vip/vip'
import vip2 from '@/pages/vip2/vip2'
import four from '@/pages/four'
import factoryPage from '@/pages/factory/factory'
export default{
  name: 'ife',
  components: {
    hotPic,
    cashBox,
    vip,
    vip2,
    four,
    factoryPage
  },
  data () {
    return {
      time: '',
      pageObject: {
        T1: false,     //热力
        T2: false,    //路线一
        T3: false,
        T4: false,    //金库
        T5: true      //工厂
      },
      pageId: 'T5',
      changePage:"",
      stopCurrent:false
      // timeInterVal:""
    }
  },
  watch: {
    pageId: {
      handler: function (val) {
        for (const key in this.pageObject) {
          if (this.pageObject.hasOwnProperty(key)) {
            if (key === val) {
              this.pageObject[key] = true
            } else {
              this.pageObject[key] = false
            }
          }
        }
      }
    }
  },
  created () {
    window.intervalObj = ''
  },
  mounted () {
    this.monitorKeyboard()
    this.countKeyBoard()
  },
  methods: {
    countKeyBoard () {
      window.intervalObj = setInterval(() => {
        this.next_Page()
      // }, 1000 * 6000)
      },1000 * 60*20)

    },
    monitorKeyboard () {
      var that = this
      document.onkeydown = function (e) {
        var key
        key = window.event.keyCode
        if (key === 37) { // left
          that.pre_Page()
        } else if (key === 39) { // right
          that.next_Page()
        } else if (key === 32) {  //空格
          if (window.intervalObj === '') {
            that.next_Page();
            that.countKeyBoard();
            that.stopCurrent = false;
          } else {
            clearInterval(window.intervalObj)
            that.stopCurrent = true;
            window.intervalObj = ''
          }
        } else if (key === 40) { // 保留下按键
        } else if (key === 38) { // 保留上按键
        }
      }
    },
    setTimeJump (curPage, nextPage) {
      let that = this
      this.changePage = curPage
      setTimeout(() => {
        that.pageId = nextPage
        that.pageObject[curPage] = false
        that.pageObject[nextPage] = true
      }, 1000)
    },
    pre_Page () {
      let that = this
      if (this.pageId === 'T1') {
        that.setTimeJump('T1', 'T5')
      } else if (this.pageId === 'T2') {
        that.setTimeJump('T2', 'T1')
      } else if (this.pageId === 'T3') {
        that.setTimeJump('T3', 'T2')
      } else if (this.pageId === 'T4') {
        that.setTimeJump('T4', 'T3')
      } else if (this.pageId === 'T5') {
        that.setTimeJump('T5', 'T4')
      }
    },
    next_Page () {
      let that = this
      if (this.pageId === 'T1') {
        that.setTimeJump('T1', 'T2')
      } else if (this.pageId === 'T2') {
        that.setTimeJump('T2', 'T3')
      } else if (this.pageId === 'T3') {
        that.setTimeJump('T3', 'T4')
      } else if (this.pageId === 'T4') {
        that.setTimeJump('T4', 'T5')
      } else if (this.pageId === 'T5') {
        that.setTimeJump('T5', 'T1')
      }
    }
  }
}
</script>
<style lang="less">

</style>
