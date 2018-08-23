/*
 * @Author: lizhiwei8
 * @ 贝塞尔轨迹运动绘制
 * @Date: 2018-08-06 10:35:43
 * @Last Modified by: lizhiwei8
 * @Last Modified time: 2018-08-21 15:06:03
 */
<template>
<div style="position:relative;top:0;left:0" id="wrap_all_vip2">
    <!-- 轨迹中的移动图片 -->
    <div :class="{move_wrap_img_div:true,
      animationImgShow:animationImgShow,
      moveImgShow:moveImgShow,
      moveImgHide:moveImgHide}" :id="canvas_img_div_vip2">
      <img v-show="move_img_src === '01'" src="../../static/image/trail-pic/01.jpg">
      <img v-show="move_img_src === '02'" src="../../static/image/trail-pic/02.jpg">
      <img v-show="move_img_src === '03'" src="../../static/image/trail-pic/03.jpg">
      <img v-show="move_img_src === '04'" src="../../static/image/trail-pic/04.jpg">
      <img v-show="move_img_src === '05'" src="../../static/image/trail-pic/05.jpg">
    </div>
    <!-- 弹框信息提示 -->
    <div v-show="currentDialogImg.isShow" :class="{
      dialog_img_div_vip2:true,
      animationDialogImg:currentDialogImg.animationDialogImg,
      dialogImgHide:currentDialogImg.dialogImgHide,
      dialogImgShow:currentDialogImg.dialogImgShow,
      blueDialogImg: currentTheme.theme === 'blue', yellowDialogImg: currentTheme.theme === 'yellow'}"
     :id="dialog_img_div_vip2" :style="{left:currentDialogImg.dialog_img_line_left+'px', top:currentDialogImg.dialog_img_line_top+'px'}">
      <div class="dialog_img_main">
        <div class="dialog_img_pic">
          <img v-show="move_img_src === '01'" src="../../static/image/trail-pic/01.jpg">
          <img v-show="move_img_src === '02'" src="../../static/image/trail-pic/02.jpg">
          <img v-show="move_img_src === '03'" src="../../static/image/trail-pic/03.jpg">
          <img v-show="move_img_src === '04'" src="../../static/image/trail-pic/04.jpg">
          <img v-show="move_img_src === '05'" src="../../static/image/trail-pic/05.jpg">
       </div>
       <div class="dialog_img_text">
         <div class="dialog_title">{{currentDialogImg.dialog_title}}</div>
         <div class="dialog_name_level"><span>{{currentDialogImg.dialog_name}}</span><label>{{currentDialogImg.dialog_level}}</label></div>
         <div class="dialog_age_type">
           <span class="dialog_customer">客户年龄段: </span><label class="dialog_customer">{{currentDialogImg.dialog_age}}</label>
           <span class="dialog_customer">客户类型: </span><label class="dialog_customer">{{currentDialogImg.dialog_type}}</label>
          </div>
         <div class="dialog_sex_tuijie">
           <span class="dialog_customer">客户性别: </span><label class="dialog_customer">{{currentDialogImg.dialog_sex}}</label>
           <span class="dialog_customer">推介营销: </span><label class="dialog_customer">{{currentDialogImg.dialog_tuijie}}</label>
         </div>
       </div>
      </div>
      <div class="dialog_img_triangle_up"></div>
      <div class="dialog_img_line" :style="{height:currentDialogImg.dialog_img_line_height+'px'}">
        <div class="_line" :style="{height:currentDialogImg.dialog_img_line_height+'px'}"></div>
      </div>
      <div class="dialog_img_triangle_down"></div>
    </div>
     <canvas id="canvas_vip2" :width="2600" :height="1300"></canvas>
     <template v-for="(item, index) in ipcPoint">
       <!-- 停留点位 -->
        <div :class="{blueStayPoint: currentTheme.theme === 'blue',
        yellowStayPoint: currentTheme.theme === 'yellow',
        animationScaleStayPoint:animationScaleStayPoint,
        animationScaleStayPointHide:animationScaleStayPointHide
        }"
        :style="{left:item.left+'px', top:item.top+'px'}"
        :id="'canvas_ipcPoint_vip2_'+index" :key="'ipcPoint-vip2-'+index" ></div>
        <!-- 停留时间提示框 -->
        <div :class="{
          time_tip_wrap:true,
          animationTimeTip:animationTimeTip,
          animationTimeHide:animationTimeHide,
          isLeft:item.timePosition.indexOf('left')!==-1,
          isRight:item.timePosition.indexOf('right')!==-1,
          blueTimeTip: currentTheme.theme === 'blue',
          yellowTimeTip: currentTheme.theme === 'yellow'
          }"
        :style="{left:item.timePosition.indexOf('left')!==-1?(item.left+31-150)+'px':(item.left+31+8)+'px',
         top:item.timePosition.indexOf('top')!==-1?(item.top+31-19)+'px':(item.top+31+23)+'px'}"
        :id="'canvas_time_tip_vip2'+index" :key="'timeTip-vip2'+index">
          <div :class="['tip_time',item.timePosition]">{{item.time}}</div>
          <div :class="['tip_line',item.timePosition]"></div>
        </div>
     </template>
</div>
</template>
<script>
export default{
  props: ['currentPersonInfo'],
  watch: {
    currentPersonInfo: function (newVal, oldVal) {
      if (newVal) {
        /* 参数示例
        {
          isSelected: true,
          stayTime: 23,
          colorTheme: 'blue',
          pictureCode: '01'
        } */
        let pictureCode = newVal.pictureCode
        console.log('轨迹获取最新图新信息--newVal=====', newVal)
        // 清空轨迹和定时器
        this.clearCanvas()
        // 设置轨迹
        this.currentBasePoint = this.basePointArr[`trail${pictureCode}`].toMove
        this.currentStayPoint = this.basePointArr[`trail${pictureCode}`].toStay
        // 设置当前弹框信息
        this.currentDialogImg = this.canvasDialogImg[pictureCode]
        this.currentDialogImg.isShow = false
        setTimeout(() => {
          this.animationScaleStayPointHide = false
          this.animationScaleStayPoint = true
          this.animationTimeTip = true
          this.moveImgHide = false
          // 轨迹小图片
          this.move_img_src = pictureCode
          // 设置颜色主题
          this.currentTheme = newVal.colorTheme === 'yellow' ? this.canvasThemeColor.yellowTheme : this.canvasThemeColor.blueTheme
          this.createPoint()
        }, 4000)
      }
    }
  },
  data () {
    return {
      // 设置基本信息
      animationScaleStayPointHide: false,
      animationTimeHide: false,
      animationScaleStayPoint: true,
      animationTimeTip: true,
      animationImgShow: false,
      moveImgShow: false,
      moveImgHide: false,
      move_img_src: '01',
      canvas_img_div_vip2: 'canvas_img_div_vip2', // 移动头像弹框
      dialog_img_div_vip2: 'dialog_img_div_vip2', // 信息弹框
      canvasId: 'canvas_vip2',
      canvasWrapwidth: 2600,
      canvasWrapheight: 1300,
      // 设置轨迹弹框信息参数集合
      canvasDialogImg: {
        '01': {
          dialog_reception: true,
          dialog_img_src: '01',
          dialog_title: '已接待',
          dialog_age: '青年',
          dialog_sex: '男',
          dialog_name: '郑先生',
          dialog_level: '二星级用户',
          dialog_type: '中产阶级',
          dialog_tuijie: '资金理财',
          dialog_business: '业务办理预约',
          isShow: false,
          // 动画
          dialogImgShow: false,
          dialogImgHide: false,
          animationDialogImg: false,
          // 轨迹弹框位置设置
          dialog_img_line_left: 0,
          dialog_img_line_top: 0,
          // 中间线高度
          dialog_img_line_height: 100
        },
        '02': {
          dialog_reception: false,
          dialog_img_src: '02',
          dialog_title: '未接待',
          dialog_age: '中年',
          dialog_sex: '男',
          dialog_name: '许先生',
          dialog_level: '四星级用户',
          dialog_type: '城镇新兴',
          dialog_tuijie: '理财投资',
          dialog_business: '业务办理预约',
          isShow: false,
          // 动画
          dialogImgShow: false,
          dialogImgHide: false,
          animationDialogImg: false,
          // 轨迹弹框位置设置
          dialog_img_line_left: 0,
          dialog_img_line_top: 0,
          // 中间线高度
          dialog_img_line_height: 100
        },
        '03': {
          dialog_reception: true,
          dialog_img_src: '03',
          dialog_title: '已接待',
          dialog_age: '中年',
          dialog_sex: '男',
          dialog_name: '刘先生',
          dialog_level: '三星级用户',
          dialog_type: '留学旅游',
          dialog_tuijie: '留学贷款',
          dialog_business: '业务办理预约',
          isShow: false,
          // 动画
          dialogImgShow: false,
          dialogImgHide: false,
          animationDialogImg: false,
          // 轨迹弹框位置设置
          dialog_img_line_left: 0,
          dialog_img_line_top: 0,
          // 中间线高度
          dialog_img_line_height: 100
        },
        '04': {
          dialog_reception: false,
          dialog_img_src: '03',
          dialog_title: '未接待',
          dialog_age: '中年',
          dialog_sex: '男',
          dialog_name: '王先生',
          dialog_level: '三星级用户',
          dialog_type: '中产阶级',
          dialog_tuijie: '资金理财',
          dialog_business: '业务办理预约',
          isShow: false,
          // 动画
          dialogImgShow: false,
          dialogImgHide: false,
          animationDialogImg: false,
          // 轨迹弹框位置设置
          dialog_img_line_left: 0,
          dialog_img_line_top: 0,
          // 中间线高度
          dialog_img_line_height: 100
        },
        '05': {
          dialog_reception: false,
          dialog_img_src: '03',
          dialog_title: '未接待',
          dialog_age: '老年',
          dialog_sex: '男',
          dialog_name: '赵先生',
          dialog_level: '三星级用户',
          dialog_type: '养老群体',
          dialog_tuijie: '养老基金',
          dialog_business: '业务办理预约',
          isShow: false,
          // 动画
          dialogImgShow: false,
          dialogImgHide: false,
          animationDialogImg: false,
          // 轨迹弹框位置设置
          dialog_img_line_left: 0,
          dialog_img_line_top: 0,
          // 中间线高度
          dialog_img_line_height: 100
        }
      },
      // 当前信息弹框
      currentDialogImg: {
        dialog_reception: false,
        dialog_img_src: '02',
        dialog_title: '已接待',
        dialog_age: '青年',
        dialog_sex: '男',
        dialog_name: '许先生',
        dialog_level: '四星级用户',
        dialog_type: '中产阶级',
        dialog_tuijie: '资金理财',
        dialog_business: '业务办理预约',
        isShow: false,
        // 动画
        dialogImgShow: false,
        dialogImgHide: false,
        animationDialogImg: false,
        // 轨迹弹框位置设置
        dialog_img_line_left: 0,
        dialog_img_line_top: 0,
        // 中间线高度
        dialog_img_line_height: 100
      },
      // 停留点设置
      ipcPoint: [],
      pointTime: 150, // 绘制一个点位用时
      pointNum: 100, // 生成的点位数量
      pointStayTime: 5000, // 每个停留点暂停用时
      imgInfoTime: 5000, // 弹框动画用时
      ARR: [], // 生成的点位集合
      // 主题色集合
      canvasThemeColor: {
        blueTheme: {
          theme: 'blue',
          abovePointColor: '#63eafe',
          belowPointColor: 'rgb(33, 37, 41, 0)'
        },
        yellowTheme: {
          theme: 'yellow',
          abovePointColor: '#f2df18',
          belowPointColor: 'rgb(33, 37, 41, 0)'
        }
      },
      // 当前主题 默认蓝色
      currentTheme: {
        theme: 'blue',
        abovePointColor: '#63eafe',
        belowPointColor: 'rgb(33, 37, 41, 0)'
      },
      // 基点集合 停留点集合
      basePointArr: {
        // 智慧网点入口 - 智能营销区 - 线上线下金融合区
        trail01: {
          toMove: [{ x: 1600, y: 1300 }, { x: 1500, y: 1200 }, { x: 1300, y: 1000 },
            {x: 1100, y: 800}, {x: 1500, y: 700}, {x: 1600, y: 650},
            {x: 1700, y: 600}, {x: 1800, y: 500}, {x: 2000, y: 400}],
          toStay: [{pointPosition: 1, time: '2min', timePosition: 'right_top_time', dialogBusiness: '智慧网点入口'}, {pointPosition: 66, time: '5min', timePosition: 'right_bottom_time', dialogBusiness: '智能营销区'}, {pointPosition: 99, time: '8min', timePosition: 'right_top_time', dialogBusiness: '线上线下金融合区'}]
        },
        // 咨询引导区 - 非现金业务区 - 休息等候区 - 现金业务区
        trail02: {
          toMove: [{ x: 1600, y: 1100 }, { x: 1800, y: 1050 }, { x: 1900, y: 1000 },
            { x: 2000, y: 800 }, { x: 1900, y: 700 }, { x: 1800, y: 600 }, { x: 1700, y: 500 },
            { x: 1600, y: 400 }, { x: 1500, y: 300 }, { x: 1400, y: 350 }, { x: 1300, y: 400 },
            { x: 1200, y: 400 }, { x: 1300, y: 450 }, { x: 1200, y: 500 }, { x: 1000, y: 600 },
            { x: 1000, y: 600 }, { x: 900, y: 700 }, { x: 800, y: 750 }, { x: 700, y: 700 },
            { x: 700, y: 650 }, { x: 600, y: 600 }, { x: 550, y: 520 }],
          toStay: [{pointPosition: 1, time: '2min', timePosition: 'right_bottom_time', dialogBusiness: '咨询引导区'},
            {pointPosition: 50, time: '3min', timePosition: 'right_bottom_time', dialogBusiness: '非现金业务'},
            {pointPosition: 80, time: '3min', timePosition: 'right_bottom_time', dialogBusiness: '休息等待区'},
            {pointPosition: 99, time: '12min', timePosition: 'right_top_time', dialogBusiness: '现金业务区'}]
        },
        // 咨询引导区 - 非现金业务区
        trail03: {
          toMove: [{ x: 1600, y: 1100 }, { x: 1800, y: 1050 }, { x: 1900, y: 1000 },
            { x: 2000, y: 800 }, { x: 1900, y: 700 }, { x: 1800, y: 600 }, { x: 1700, y: 500 },
            { x: 1600, y: 400 }, { x: 1400, y: 450 }, { x: 1300, y: 500 }, { x: 1200, y: 350 }],
          toStay: [{pointPosition: 1, time: '2min', timePosition: 'right_bottom_time', dialogBusiness: '咨询引导区'},
            {pointPosition: 99, time: '12min', timePosition: 'left_bottom_time', dialogBusiness: '非现金业务区'}]
        },
        // 智慧网点入口 - 智能营销区 - 智能服务区
        trail04: {
          toMove: [{ x: 1600, y: 1300 }, { x: 1500, y: 1200 }, { x: 1300, y: 1000 },
            {x: 1200, y: 800}, {x: 1500, y: 600}, {x: 1600, y: 550},
            {x: 1700, y: 400}, {x: 1800, y: 300}, {x: 1900, y: 750},
            {x: 2100, y: 750}, {x: 2200, y: 800}, {x: 2300, y: 750},
            {x: 2400, y: 750}, {x: 2500, y: 750}],
          toStay: [{pointPosition: 1, time: '2min', timePosition: 'right_bottom_time', dialogBusiness: '智慧网点入口'},
            {pointPosition: 40, time: '1min', timePosition: 'left_top_time', dialogBusiness: '智能营销区'},
            {pointPosition: 99, time: '11min', timePosition: 'right_bottom_time', dialogBusiness: '智能服务区'}]
        },
        // 咨询引导区 - 智能营销区 - 休息等候区
        trail05: {
          toMove: [{ x: 1600, y: 1100 }, { x: 1800, y: 1050 }, { x: 1900, y: 1000 },
            { x: 2000, y: 800 }, { x: 1900, y: 700 }, { x: 1800, y: 600 }, { x: 1700, y: 650 },
            { x: 1600, y: 600 }, { x: 1500, y: 650 }, { x: 1400, y: 600 }, { x: 1300, y: 650 },
            { x: 1200, y: 500 }, { x: 1100, y: 600 }, { x: 900, y: 600 }, { x: 900, y: 650 }],
          toStay: [{pointPosition: 1, time: '5min', timePosition: 'right_bottom_time', dialogBusiness: '咨询引导区'},
            {pointPosition: 47, time: '6min', timePosition: 'left_bottom_time', dialogBusiness: '智能营销区'},
            {pointPosition: 99, time: '12min', timePosition: 'left_bottom_time', dialogBusiness: '休息等候区'}]
        }
      },
      // 当前停留点位集合
      currentStayPoint: [{pointPosition: 1, time: '2min', timePosition: 'right_top_time', dialogBusiness: '智慧网点入口'}, {pointPosition: 66, time: '5min', timePosition: 'right_bottom_time', dialogBusiness: '智能营销区'}, {pointPosition: 99, time: '8min', timePosition: 'right_top_time', dialogBusiness: '线上线下金融合区'}],
      // 当前基点
      currentBasePoint: [{ x: 1600, y: 1300 }, { x: 1500, y: 1200 }, { x: 1300, y: 1000 },
        {x: 1100, y: 800}, {x: 1500, y: 700}, {x: 1600, y: 650},
        {x: 1700, y: 600}, {x: 1800, y: 500}, {x: 2000, y: 400}]
    }
  },
  methods: {
    // 计算点位
    MultiPointBezier (points, t) {
      let len = points.length
      let x = 0
      let y = 0
      let erxiangshi = function (start, end) {
        let cs = 1
        let bcs = 1
        while (end > 0) {
          cs *= start
          bcs *= end
          start--
          end--
        }
        return (cs / bcs)
      }
      for (var i = 0; i < len; i++) {
        var point = points[i]
        x += point.x * Math.pow((1 - t), (len - 1 - i)) * Math.pow(t, i) * (erxiangshi(len - 1, i))
        y += point.y * Math.pow((1 - t), (len - 1 - i)) * Math.pow(t, i) * (erxiangshi(len - 1, i))
      }
      return { x: x, y: y }
    },
    // 生成点位
    // anchorpoints：贝塞尔基点
    // pointsAmount：生成的点数
    CreateBezierPoints (anchorpoints, pointsAmount) {
      let points = []
      for (var i = 0; i < pointsAmount; i++) {
        let point = this.MultiPointBezier(anchorpoints, i / pointsAmount)
        points.push(point)
      }
      return points
    },
    // 清空画布
    clearCanvas () {
      let context = this.initCanvas().context
      let imgDiv = this.initCanvas().imgDiv
      this.currentDialogImg.isShow = false
      let _this = this
      context.clearRect(0, 0, _this.canvasWrapwidth, _this.canvasWrapheight)
      this.ARR.forEach((element, index) => {
        context.beginPath()
        context.arc(element.x, element.y, 4, 0, Math.PI * 2, true)
        context.fillStyle = _this.currentTheme.abovePointColor
        context.fill()
        context.closePath()
        if (index === 99) {
          setTimeout(() => {
            context.clearRect(0, 0, _this.canvasWrapwidth, _this.canvasWrapheight)
            _this.ARR.forEach((element, index) => {
              context.beginPath()
              context.arc(element.x, element.y, 3, 0, Math.PI * 2, true)
              context.fillStyle = _this.currentTheme.abovePointColor
              context.fill()
              context.closePath()
            })
            setTimeout(() => {
              context.clearRect(0, 0, _this.canvasWrapwidth, _this.canvasWrapheight)
              _this.ARR.forEach((element, index) => {
                context.beginPath()
                context.arc(element.x, element.y, 1, 0, Math.PI * 2, true)
                context.fillStyle = _this.currentTheme.abovePointColor
                context.fill()
                context.closePath()
              })
            }, 100)
          }, 200)
        }
      })
      setTimeout(() => {
        context.clearRect(0, 0, _this.canvasWrapwidth, _this.canvasWrapheight)
        this.moveImgHide = true
        _this.animationScaleStayPoint = false
        _this.animationScaleStayPointHide = true
        _this.animationTimeTip = false
        _this.animationTimeHide = true
      }, 1000)
      setTimeout(() => {
        _this.ipcPoint = []
        imgDiv.style.display = 'none'
      }, 3000)
    },
    // 初始化canvas
    initCanvas (canvasId = this.canvasId, imgDivId = this.canvas_img_div_vip2) {
      let theCanvas = document.getElementById(canvasId)
      let context = theCanvas.getContext('2d')
      let imgDiv = document.getElementById(imgDivId)
      return { context, imgDiv }
    },
    // 绘制点位
    createPoint () {
      this.moveImgHide = false
      let context = this.initCanvas().context
      // 获取点
      let allTrailPoints = []
      allTrailPoints = this.CreateBezierPoints(this.currentBasePoint, this.pointNum)
      this.ARR = allTrailPoints
      // 绘制点
      let _this = this
      let currentStayPoint = _this.currentStayPoint
      let timerIndex = 0
      // 定时器回调函数
      let setMoveTimer = function () {
        timerIndex++
        if (timerIndex >= allTrailPoints.length) {
          timerIndex = 0
          clearInterval(moveCreatePointTimer)
        } else {
          for (let i = 0; i < currentStayPoint.length; i++) {
            /* 设置停留点的 时间提示框和信息弹框 */
            if (timerIndex === currentStayPoint[i].pointPosition) {
              // 摄像头停留位置,点和时间
              _this.ipcPoint.push({time: currentStayPoint[i].time, timePosition: currentStayPoint[i].timePosition, left: allTrailPoints[timerIndex].x - 31, top: allTrailPoints[timerIndex].y - 31})
              console.log('停留点位', currentStayPoint[i])
              // 信息弹框
              _this.currentDialogImg.isShow = true
              _this.currentDialogImg.animationDialogImg = true
              // 移动图片
              _this.animationImgShow = true
              setTimeout(function () {
                _this.animationImgShow = false
                _this.currentDialogImg.isShow = false
              }, _this.imgInfoTime)
              _this.currentDialogImg.dialog_img_line_left = allTrailPoints[timerIndex].x - 370 - 135
              _this.currentDialogImg.dialog_img_line_height = (allTrailPoints[timerIndex].y - 351) > _this.canvasWrapheight / 3 ? _this.canvasWrapheight / 3 : (allTrailPoints[timerIndex].y - 351)
              _this.currentDialogImg.dialog_img_line_top = allTrailPoints[timerIndex].y - 351 - _this.currentDialogImg.dialog_img_line_height
              _this.currentDialogImg.dialog_business = currentStayPoint[i].dialogBusiness
              clearInterval(moveCreatePointTimer)
              setTimeout(function () {
                console.log('绘制点位的 timerIndex', timerIndex)
                moveCreatePointTimer = setInterval(setMoveTimer, _this.pointTime)
              }, _this.pointStayTime)
            } else {
              // 绘制轨迹点位,明点和背景点
              context.beginPath()
              context.arc(allTrailPoints[timerIndex].x, allTrailPoints[timerIndex].y, 5, 0, Math.PI * 2, true)
              context.fillStyle = _this.currentTheme.abovePointColor
              context.fill()
              context.closePath()
              context.beginPath()
              context.arc(allTrailPoints[timerIndex].x, allTrailPoints[timerIndex].y + 10, 5, 0, Math.PI * 2, true)
              context.fillStyle = _this.currentTheme.belowPointColor
              context.fill()
              context.closePath()
            }
            // 移动人脸图片位置
            let pointImage = _this.initCanvas().imgDiv
            let _point = allTrailPoints[timerIndex]
            if (timerIndex >= allTrailPoints.length) {
              pointImage.style.display = 'none'
              timerIndex = 0
              clearInterval(window.moveCanvasImgDiv)
            } else {
              if (timerIndex === 1) {
                pointImage.style.display = 'none'
              } else {
                pointImage.style.display = 'block'
                // _this.moveImgShow = true
              }
              // if (timerIndex === 99) {
              //   _this.moveImgHide = true
              // }
              pointImage.style.left = (_point.x - 42) + 'px'
              pointImage.style.top = (_point.y - 110) + 'px'
            }
          // end
          }
        }
      }
      let moveCreatePointTimer = setInterval(setMoveTimer, _this.pointTime) // 使用具名定时器 debugger
    }
  },
  mounted () {
    this.createPoint()
  }

}
</script>
<style lang="less" scoped>
#wrap_all_vip2{
  .move_wrap_img_div{
    z-index:1000;
    position:absolute;
    top:10px;
    left:60px;
    display:none;
    width:84px;
    height:100px;
    z-index:100000;
    background:url('../../static/image/trail-pic/move-pic-bg.png') center no-repeat;
    background-size: 145% 130%;
    padding: 8px 6px;
    padding-bottom: 17px;
  }
  .move_wrap_img_div img{
    width:100%;
    height:100%;
  }
// 设置轨迹主题
  .blueStayPoint, .yellowStayPoint{
    width: 62px;
    height: 62px;
    position: absolute;
  }
  .blueStayPoint{
    background: url("../../static/image/trail-pic/ipc-blue-point.png") no-repeat center;
  }
  .yellowStayPoint{
    background: url("../../static/image/trail-pic/ipc-yellow-point.png") no-repeat center;
  }
// 设置时间提示框
  .time_tip_wrap{
    position:absolute;
    .tip_time{
      width:120px;
      height:40px;
      text-align:center;
      line-height:40px;
      overflow:hidden;
    }
    .tip_line{
      width:43px;
      height:24px;
    }
  }
  .isLeft{
    .tip_line{
      float:right;
    }
    .tip_time{
      float:left;
    }
  }
  .isRight{
    .tip_line{
      float:left;
    }
    .tip_time{
      float:right;
    }
  }
  .time_tip_wrap.blueTimeTip{
    .tip_time{
      background: url('../../static/image/trail-pic/time-blue-tip.png') no-repeat center;
      color:#63eafe;
    }
    .tip_line.right_top_time{
      background: url('../../static/image/trail-pic/blue-right-top-line.png') no-repeat center;
    }
    .tip_line.right_bottom_time{
      background: url('../../static/image/trail-pic/blue-right-bottom-line.png') no-repeat center;
    }
    .tip_line.left_top_time{
      background: url('../../static/image/trail-pic/blue-left-top-line.png') no-repeat center;
    }
    .tip_line.left_bottom_time{
      background: url('../../static/image/trail-pic/blue-left-bottom-line.png') no-repeat center;
    }
    .tip_line,.tip_time{
      background-size:100% 100%;
    }
  }
  .time_tip_wrap.yellowTimeTip{
    .tip_time{
      background: url('../../static/image/trail-pic/time-yellow-tip.png');
      color:#f2df18;
    }
    .tip_line.right_top_time{
      background: url('../../static/image/trail-pic/yellow-right-top-line.png') no-repeat center;
    }
    .tip_line.right_bottom_time{
      background: url('../../static/image/trail-pic/yellow-right-bottom-line.png') no-repeat center;
    }
    .tip_line.left_top_time{
      background: url('../../static/image/trail-pic/yellow-left-top-line.png') no-repeat center;
    }
    .tip_line.left_bottom_time{
      background: url('../../static/image/trail-pic/yellow-left-bottom-line.png') no-repeat center;
    }
    .tip_line,.tip_time{
      background-size:100% 100%;
    }
  }
}
   /*
      入场动画
      淡入效果
   */
  @keyframes toShowAnimation {  /*定义关键帧名称*/
  0%{
       opacity:0;
    }
  25%{
      opacity:0.25;
    }
  50%{
      opacity:0.5;
    }
  75%{
      opacity:0.75;
    }
  100%{
      opacity:0.99;
  }
}
  /* 移动图片
     放大动画
     缩小动画
  */
  @keyframes animationImgShow{
    0%{
      transform: scale(1);
    }
    10%{
      transform:scale(0.8);
    }
    20%{
      transform:scale(0.6);
    }
    30%{
      transform:scale(0.4);
    }
    40%{
      transform:scale(0.2);
    }
    50%{
      transform:scale(0);
    }
    60%{
     transform:scale(0.2);
    }
    70%{
      transform:scale(0.4);
    }
    80%{
      transform:scale(0.6);
    }
    90%{
      transform:scale(0.8);
    }
    100%{
      transform:scale(1);
    }
  }
   /* 信息弹框
      入场动画
      淡入效果
   */
  @keyframes animationDialogImg {  /*定义关键帧名称*/
  0%{
       opacity:0;
    }
  10%{
      opacity:0.25;
    }
  20%{
      opacity:0.5;
    }
  30%{
      opacity:0.75;
    }
  40%{
      opacity:0.99;
  }
  50%{
      opacity:0.99;
  }
  60%{
     opacity:0.99;
  }
  70%{
      opacity:0.75;
  }
  80%{
      opacity:0.35;
  }
  90%{
      opacity:0;
  }
  100%{
      opacity:0;
  }
}
/*
  退场动画
  旋转 淡出效果
*/
@keyframes toHideAnimation2 {
  0%{
    opacity: 0.99;
    transform:rotateY(10deg);
  }
  25%{
    opacity: 0.75;
    transform:rotateY(25deg);
  }
  50%{
    opacity: 0.5;
    transform:rotateY(40deg);
  }
  75%{
    opacity: 0.25;
    transform:rotateY(45deg);
  }
 100%{
    opacity: 0;
    transform:rotateY(50deg);
  }
}
/*
  退场动画
  淡出效果
*/
@keyframes toHideAnimation {
  0%{
    opacity: 0.99
  }
  25%{
    opacity: 0.75
  }
  50%{
    opacity: 0.5
  }
  75%{
    opacity: 0.25
  }
 100%{
    opacity: 0
  }
}
 /* 停留时间提示框
    退场动画
 */
 @keyframes animationTimeTip {
   0%{
     transform: rotateX(0deg);
   }
   20%{
     transform: rotateX(32deg);
   }
   40%{
     transform: rotateX(64deg);
   }
   60%{
     transform: rotateX(32deg);
   }
   80%{
     transform: rotateX(16deg);
   }
   100%{
     transform: rotateX(0deg);
     display:none;
   }
 }
 /* 停留点位缩放动画 */
 @keyframes animationScaleStayPoint {
    0%{
     transform: scale(0.7);
   }
   20%{
     transform: scale(0.8);
   }
   40%{
     transform: scale(1);
   }
   60%{
     transform: scale(1.1);
   }
   80%{
     transform: scale(1);
   }
   100%{
     transform: scale(0.8);
     display:none;
   }
 }
 /* 停留点退场动画 */
 @keyframes animationScaleStayPointHide{
   0%{
     opacity:1;
     transform: scale(1);
   }
   20%{
     opacity:0.8;
     transform: scale(0.8);
   }
   40%{
     opacity:0.6;
     transform: scale(0.6);
   }
   60%{
     opacity:0.4;
     transform: scale(0.4);
   }
   80%{
     opacity:0.2;
     transform: scale(0.2);
   }
   100%{
     opacity:0;
     transform: scale(0.1);
   }
 }
// 设置停留点退场动画
.animationScaleStayPointHide{
  animation: animationScaleStayPointHide 2.5s ease-in-out;
}
.animationTimeHide{
   animation: animationScaleStayPointHide 2.5s ease-in-out;
}
// 设置停留点缩放动画
.animationScaleStayPoint {
  // 停留点呼吸特效
  // animation: animationScaleStayPoint 2s ease-in-out;
  // animation-iteration-count: infinite;
}
// 设置时间提示信息框退场动画
.animationTimeTip{
  animation: animationTimeTip 1s ease-in-out;
  -webkit-animation: animationTimeTip 1s ease-in-out;
}
// 设置移动图片退场动画
.moveImgHide{
  animation: toHideAnimation2 2s ease-in-out 1;
}
// 设置移动图片的出入动画
.moveImgShow{
    animation: toShowAnimation 2s ease-in-out 1;
   -webkit-animation: toShowAnimation 2s ease-in-out 1; /* Safari 和 Chrome */
  }
.animationImgShow{
  animation: animationImgShow 4s ease-in-out;
  -webkit-animation: animationImgShow 4s ease-in-out; /* Safari 和 Chrome */
}
// 设置弹框的动画效果
.dialogImgShow{
    animation: toShowAnimation 3s ease-in-out;
   -webkit-animation: toShowAnimation 3s ease-in-out; /* Safari 和 Chrome */
  }
.dialogImgHide{
   animation: toHideAnimation 1s ease-in-out 1s;
   -webkit-animation: toHideAnimation 1s ease-in-out 1s; /* Safari 和 Chrome */
}
.animationDialogImg{
  animation: animationDialogImg 5.5s ease-in-out;
  -webkit-animation: animationDialogImg 5.5s ease-in-out; /* Safari 和 Chrome */
}
// 停留点弹框
.dialog_img_div_vip2{
  position:absolute;
  z-index:100;
  .dialog_img_text,.dialog_img_pic{
    float:left;
  }
  .dialog_img_main{
    background:linear-gradient(to right, rgba(45, 124, 221, 0.8), rgba(0, 49, 78, 0.2));
    height:300px;
    font-weight:bold;
  }
  .dialog_img_pic{
    margin-left: -10px;
    width:317px;
    height:317px;
    text-align: center;
    line-height: 300px;
    overflow:hidden;
  }
  .dialog_img_pic img{
    width:260px;
    height:273px;
    vertical-align: unset;
    margin-top: 14px;
    margin-left: 0;
  }
  .dialog_img_text{
    color:#fff;
    padding-left: 5px;
    height: 300px;
    width: 700px;
    span.dialog_customer,label.dialog_customer{
      display:inline-block;
      width:160px;
      font-size:28px;
    }
    span.dialog_customer{
      margin-right:10px;
    }
    .dialog_name_level{
      margin-top:-8px;
      margin-bottom:5px;
      span{
        font-size:30px;
        margin-right:30px;
      }
      label{
        opacity:0.6;
        font-size:26px;
      }
    }
    .dialog_name_level span{
      font-size:30px;
    }
    .dialog_name{
      font-weight:bold;
      height: 60px;
      font-size: 28px;
    }
    .dialog_title {
      height: 132px;
      text-align: left;
      line-height: 132px;
      font-size: 32px;
    }
    .dialog_age{
     height: 70px;
     margin-top: 10px;
     font-size: 24px;
     span{
       margin-right:10px;
     }
    }
    .dialog_sex{
      height: 70px;
      font-size: 24px;
      span{
       margin-right:10px;
     }
    }
    .dialog_level {
      height: 40px;
      line-height: 40px;
      font-size: 20px;
    }
    .dialog_business {
      height: 40px;
      line-height: 40px;
      font-size: 20px;
    }
    .dialog_level,.dialog_business{
      opacity:0.8
    }
  }
}
.blueDialogImg {
  .dialog_img_pic{
    background:url("../../static/image/trail-pic/reception-bg.png") no-repeat center;
    background-size:108% 108%;
  }
  .dialog_title{
    color:#63eafe;
  }
  .dialog_title:before{
    vertical-align: middle;
    margin-right:10px;
    content:url("../../static/image/trail-pic/reception-title-bg.png");
  }
  .dialog_img_triangle_up{
    height:25px;
    background:url("../../static/image/trail-pic/blue-tri-up.png") no-repeat center;
    background-size:34px 25px;
  }
  .dialog_img_triangle_down{
    height:26px;
    background:url("../../static/image/trail-pic/blue-tri-down.png") no-repeat center;
    background-size:35px 26px;
  }
  .dialog_img_line{
    height:100px;
    ._line{
     margin-left:501px;
     height:100%;
     width:3px;
     background:linear-gradient(to bottom, rgba(99, 234, 254, 0.7), rgba(99, 234, 254, 0.2));
  }
  }
}
.yellowDialogImg{
  .dialog_img_pic{
    background:url("../../static/image/trail-pic/unreception-bg.png") no-repeat center;
    background-size:95% 97%;
    height: 312px;
    margin-top: -6px;
    img{
      margin-top: 19px;
    }
  }
  .dialog_title{
    color:#ffff09;
  }
  .dialog_title:before{
    vertical-align: middle;
    margin-right:10px;
    content:url("../../static/image/trail-pic/unreception-title-bg.png");
  }
  .dialog_img_triangle_up{
    height:25px;
    background:url("../../static/image/trail-pic/yellow-tri-up.png") no-repeat center;
    background-size:34px 25px;
  }
  .dialog_img_triangle_down{
    height:26px;
    background:url("../../static/image/trail-pic/yellow-tri-down.png") no-repeat center;
    background-size:35px 26px;
  }
  .dialog_img_line{
    height:100px;
    ._line{
     margin-left:501px;
     height:100%;
     width:3px;
     background:linear-gradient(to bottom, rgba(213, 191, 37, 0.7), rgba(222, 224, 93, 0.2));
  }
  }
}
//
</style>
