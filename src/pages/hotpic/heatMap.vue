/*
 * @Author: yuyanfei
 * @ 热力图
 * @Date: 2018-08-06
 * @Last Modified by: lizhiwei8
 * @Last Modified time: 2018-08-09 11:16:13
 */
<template>
  <div id="heatmap">
      <div class="tooltip"></div>
      <div class="legend-area">
        <div id="gradient"></div>
        <div id="min"></div>
        <div id="max"></div>
      </div>
  </div>
</template>
<script>
// npm install heatmap.js --save
// https://www.patrick-wied.at/static/heatmapjs/ 参考地址
import heatmapJS from 'heatmap.js'
export default {
  name: 'heatmapJS',
  props: {
    hmData: Array
  },
  methods: {
    setHeatMap: function () {
      /*  start legend code */
      // we want to display the gradient, so we have to draw it
      var legendCanvas = document.createElement('canvas')
      legendCanvas.width = 100
      legendCanvas.height = 10
      var min = document.getElementById('min')
      var max = document.getElementById('max')
      var gradientImg = document.getElementById('gradient')
      var legendCtx = legendCanvas.getContext('2d')
      var gradientCfg = {}
      function updateLegend (data) {
        // the onExtremaChange callback gives us min, max, and the gradientConfig
        // so we can update the legend
        min.innerHTML = 0
        max.innerHTML = 250
        // regenerate gradient image
        if (data.gradient !== gradientCfg) {
          gradientCfg = data.gradient
          var gradient = legendCtx.createLinearGradient(0, 0, 100, 1)
          for (var key in gradientCfg) {
            gradient.addColorStop(key, gradientCfg[key])
          }
          legendCtx.fillStyle = gradient
          legendCtx.fillRect(0, 0, 100, 10)
          gradientImg.src = legendCanvas.toDataURL()
        }
      };
      /* legend code end */
      let domNode = document.getElementById('heatmap')
      let heatmapInstance1 = heatmapJS.create({
        container: domNode,
        gradient: {
          '0.1': '#0a144c',
          '0.2': '#122560',
          '0.3': '#1D4C78',
          '0.35': '#18609A',
          '0.4': '#248AB2',
          '0.45': '#29A89D',
          '0.5': '#38BA96',
          '0.55': '#5ECD8B',
          '0.6': '#89D980',
          '0.65': '#A7DF70',
          '0.7': '#E0DA5E',
          '0.75': '#F9D752',
          '0.8': '#fdae61',
          '0.85': '#FD811D',
          '0.9': '#FF5D0a',
          '0.95': '#ff0000'
        },
        radius: 90
      })
      let heatmapInstance = heatmapJS.create({
        container: domNode,
        gradient: {
          '0.1': '#0a144c',
          '0.2': '#122560',
          '0.3': '#1D4C78',
          '0.35': '#18609A',
          '0.4': '#248AB2',
          '0.45': '#29A89D',
          '0.5': '#38BA96',
          '0.55': '#5ECD8B',
          '0.6': '#89D980',
          '0.65': '#A7DF70',
          '0.7': '#E0DA5E',
          '0.75': '#F9D752',
          '0.8': '#fdae61',
          '0.85': '#FD811D',
          '0.9': '#FF5D0a',
          '0.95': '#ff0000'
        },
        radius: 100,
        blur: 1.0,
        // onExtremaChange will be called whenever there's a new maximum or minimum
        onExtremaChange: function (data) {
          updateLegend(data)
        }
      })
      /* tooltip code start */
      var demoWrapper = document.getElementsByClassName('demo-wrapper')
      var tooltip = document.getElementsByClassName('tooltip')
      function updateTooltip (x, y, value) {
        // + 15 for distance to cursor
        var transl = 'translate(' + (x + 15) + 'px, ' + (y + 15) + 'px)'
        tooltip.style.webkitTransform = transl
        tooltip.innerHTML = value
      }
      demoWrapper.onmousemove = function (ev) {
        var x = ev.layerX
        var y = ev.layerY
        // getValueAt gives us the value for a point p(x/y)
        var value = heatmapInstance.getValueAt({
          x: x,
          y: y
        })
        tooltip.style.display = 'block'
        updateTooltip(x, y, value)
      }
      // hide tooltip on mouseout
      demoWrapper.onmouseout = function () {
        tooltip.style.display = 'none'
      }
      /* tooltip code end */

      // 构建一些随机数据点,网页切图价格这里替换成你的业务数据
      // let points = []
      // let maxx = 0
      // let minn = 1234
      // let lenBasic = 3
      // let lenEmphasize = 50
      // let randomNumber = Math.floor(Math.random() * 2)
      // while (lenBasic--) {
      //   let val = Math.floor(Math.random() * 800)
      //   maxx = Math.max(maxx, val)
      //   minn = Math.min(minn, val)
      //   let pointRight = {
      //     x: Math.floor(Math.random() * 1000) + 1500,
      //     y: Math.floor(Math.random() * 550) + 600,
      //     value: val
      //   }
      //   let pointLeft = {
      //     x: Math.floor(Math.random() * 400 + 310),
      //     y: Math.floor(Math.random() * 300 + 100),
      //     value: val
      //   }
      //   let pointMiddle = {
      //     x: Math.floor(Math.random() * 600 + 1000),
      //     y: Math.floor(Math.random() * 300 + 500),
      //     value: val
      //   }
      //   points.push(pointLeft) // 左侧正方形区域的基础热力分布
      //   points.push(pointRight) // 右侧区域的基础热力分布
      //   points.push(pointMiddle) // 中间区域的基础热力分布
      // }
      // while (lenEmphasize--) {
      //   let val = Math.floor(Math.random() * 1234)
      //   maxx = Math.max(maxx, val)
      //   minn = Math.min(minn, val)
      //   let point1 = {
      //     x: Math.floor(Math.random() * 400) + 1500,
      //     y: Math.floor(Math.random() * 300) + 600,
      //     value: val
      //   }
      //   let point0 = {
      //     x: Math.floor(Math.random() * 400) + 600,
      //     y: Math.floor(Math.random() * 300) + 300,
      //     value: val
      //   }
      //   if (randomNumber === 1) {
      //     points.push(point1) // 右侧区域的重点热力分布
      //   } else {
      //     points.push(point0) // 左侧区域的重点热力分布
      //   }
      // }
      console.log('hmData-----------------------------------')
      console.log(this.hmData)

      let data = {
        max: 1700,
        min: 0,
        data: this.hmData
      }
      // let data1 = {
      //   max: 1700,
      //   min: 0,
      //   data: this.hmData.filter(function (row) {
      //     return row.value > 2000
      //   })
      // }
      console.log(data)
      // 因为data是一组数据,web切图报价所以直接setData
      heatmapInstance.setData(data) // 数据绑定还可以使用
      // heatmapInstance1.setData(data1)
    }
  },
  mounted () {
    this.setHeatMap()
  }
}
</script>
<style lang="less">
#heatmap{
  margin: 150px auto;
  width: 2919px;
  height: 1632px;
}
#gradient{
  margin-left: 2600px;
  width: 10px;
  height: 100px;
  background-image: url('../../static/image/rainbow.png');
  background-repeat: no-repeat;
  background-size: 100%;
}
// #tooltip{
//   position: absolute;
//   left: 0;
//   top: 0;
//   background: rgba(0,0,0,.8);
//   color: #fff;
//   font-size: 14px;
//   padding: 5px;
//   line-height: 18px;
// }
.legend-are{
  padding-top: 1201px;
}
#min{
  color: #fff;
  padding-left: 2619px;
  margin-top: -17px;
}
#max{
  color: #fff;
  padding-left: 2619px;
  margin-top: -108px;
}
.legend-area {
    position: absolute;
    bottom: 35%;
    right: 7%;
}
</style>
