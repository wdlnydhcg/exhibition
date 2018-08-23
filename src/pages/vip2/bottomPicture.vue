/*
 * @Author: lizhiwei8
 * @ 底部人员切换
 * @Date: 2018-08-09 18:53:35
 * @Last Modified by: lizhiwei8
 * @Last Modified time: 2018-08-16 16:12:46
 */

<template>
<div id="picture_move_div_vip2">
    <div :class="{
      picture_move_img:true,
      yellowBgTheme:currentSelectedPicture[0].colorTheme === 'yellow' ? true : false,
      blueBgTheme:currentSelectedPicture[0].colorTheme === 'blue' ? true : false,
      pictureSelected: currentSelectedPicture[0].isSelected
      }">
        <img src="../../static/image/trail-pic/01.jpg">
    </div>
    <div :class="{
      picture_move_img:true,
      yellowBgTheme:currentSelectedPicture[1].colorTheme === 'yellow' ? true : false,
      blueBgTheme:currentSelectedPicture[1].colorTheme === 'blue' ? true : false,
      pictureSelected: currentSelectedPicture[1].isSelected
      }">
        <img src="../../static/image/trail-pic/02.jpg">
    </div>
    <div :class="{
      picture_move_img:true,
      yellowBgTheme:currentSelectedPicture[2].colorTheme === 'yellow' ? true : false,
      blueBgTheme:currentSelectedPicture[2].colorTheme === 'blue' ? true : false,
      pictureSelected: currentSelectedPicture[2].isSelected
      }">
        <img src="../../static/image/trail-pic/03.jpg">
    </div>
    <div :class="{
      picture_move_img:true,
      yellowBgTheme:currentSelectedPicture[3].colorTheme === 'yellow' ? true : false,
      blueBgTheme:currentSelectedPicture[3].colorTheme === 'blue' ? true : false,
      pictureSelected: currentSelectedPicture[3].isSelected
      }">
        <img src="../../static/image/trail-pic/04.jpg">
    </div>
    <div :class="{
      picture_move_img:true,
      yellowBgTheme:currentSelectedPicture[4].colorTheme === 'yellow' ? true : false,
      blueBgTheme:currentSelectedPicture[4].colorTheme === 'blue' ? true : false,
      pictureSelected: currentSelectedPicture[4].isSelected
      }">
        <img src="../../static/image/trail-pic/05.jpg">
    </div>
</div>
</template>
<script>
export default{
  data () {
    return {
      currentSelectedPicture: [
        {
          isSelected: true,
          // 时间计算   pointTime*pointNum + pointStayTime*停留点数量 + (<imgInfoTime) imgInfoTime*停留点个数 + 未知时间
          stayTime: 38,
          colorTheme: 'blue',
          pictureCode: '01'
        }, {
          isSelected: false,
          stayTime: 43,
          colorTheme: 'yellow',
          pictureCode: '02'
        }, {
          isSelected: false,
          stayTime: 38,
          colorTheme: 'blue',
          pictureCode: '03'
        }, {
          isSelected: false,
          stayTime: 38,
          colorTheme: 'yellow',
          pictureCode: '04'
        }, {
          isSelected: false,
          stayTime: 38,
          colorTheme: 'yellow',
          pictureCode: '05'
        }
      ]
    }
  },
  methods: {
    changeSelect () {
      let _this = this
      let currentSelectedPicture = this.currentSelectedPicture
      let delayChangeFunciton = function (picInfoArr = []) {
        let nowSelIndex = 0
        let stayTime = 23
        picInfoArr.forEach((element, index) => {
          if (element.isSelected) {
            nowSelIndex = index
            stayTime = element.stayTime
          }
        })
        setTimeout(() => {
          let _len = picInfoArr.length
          let _maxIndex = (_len - 1) < 0 ? 0 : (_len - 1)
          // 获取随机数,随机运行
          let Random = Math.floor(Math.random() * _len)
          let indexRandom = Random === nowSelIndex ? (Random === _maxIndex ? Random - 1 : Random + 1) : Random
          picInfoArr.forEach((element, index) => {
            if (index === indexRandom) {
              element.isSelected = true
            } else {
              element.isSelected = false
            }
          })
          console.log('---indexRandom---  ', indexRandom)
          // 依次运行
          // if (picInfoArr[_maxIndex].isSelected) {
          //   picInfoArr.forEach((element, index) => {
          //     if (index === 0) {
          //       element.isSelected = true
          //       nowSelIndex = 0
          //     } else {
          //       element.isSelected = false
          //     }
          //   })
          // } else {
          //   picInfoArr.forEach((element, index) => {
          //     if (index === nowSelIndex + 1) {
          //       element.isSelected = true
          //     } else {
          //       element.isSelected = false
          //     }
          //   })
          //   nowSelIndex += 1
          // }
          console.log('==底部图片=indexRandom====  ', indexRandom)
          _this.currentSelectedPicture = picInfoArr
          _this.$emit('getPersonInfo', picInfoArr[indexRandom])
          delayChangeFunciton(picInfoArr)
        }, stayTime * 1000)
      }
      delayChangeFunciton(currentSelectedPicture)
      // for (let index = 0; index < currentSelectedPicture.length; index++) {
      //   delayChangeFunciton(currentSelectedPicture, currentSelectedPicture.stayTime)
      // }

      // let pictureSelected = [false, false, false]
      // setInterval(function () {
      //   if (pictureSelected[2] === true) {
      //     pictureSelected = [false, false, false]
      //     pictureSelected[0] = true
      //     _index = 0
      //   } else {
      //     pictureSelected = [false, false, false]
      //     pictureSelected[_index + 1] = true
      //     _index += 1
      //   }
      //   _this.pictureSelected = pictureSelected
      //   _this.$emit('getPersonInfo', '0' + (_this.pictureSelected.indexOf(true) + 1))
      //   console.log('图片处索引', _this.pictureSelected.indexOf(true) + 1)
      // }, 23000)
    }
  },
  mounted () {
    this.changeSelect()
  }
}
</script>
<style lang="less" scoped>
div#picture_move_div_vip2 {
    width: 80%;
    position: relative;
    margin-left: 13%;
    padding-left: 18%;
    background:url('../../static/image/trail-pic/picture_move_bg.png') no-repeat center;
    background-size: 100% 100%;
    background-position-x: -86px;
}
.picture_move_img {
    display: inline-block;
    width: 200px;
    height: 200px;
    overflow: hidden;
    margin:0 20px;
    padding: 1.2%;
    margin-top:10px;
}
@keyframes changeToBig {  /*定义关键帧名称*/
  0%{
      transform: scale(1);  /*开始为原始大小*/
    }
  25%{
      transform: scale(1.1);
    }
  100%{
      transform: scale(1.1);
  }
}
@-webkit-keyframes changeToBig {  /*定义关键帧名称*/
  0%{
      transform: scale(1);  /*开始为原始大小*/
    }
  25%{
      transform: scale(1.1);
    }
  100%{
      transform: scale(1.1);
  }
}
.picture_move_img img{
  width:100%;
  height:100%;
}
.pictureSelected{
   animation: changeToBig 1s ease-in-out 1;
   -webkit-animation: changeToBig 1s ease-in-out 1; /* Safari 和 Chrome */
}
.blueBgTheme.pictureSelected{
    background:url('../../static/image/trail-pic/reception-bg.png') no-repeat center;
    background-size:97% 95%;
    background-position-y: 7px;
}
.yellowBgTheme.pictureSelected{
    background:url('../../static/image/trail-pic/unreception-bg.png') no-repeat center;
    background-size:97% 95%;
    background-position-y: 7px;
}
</style>
