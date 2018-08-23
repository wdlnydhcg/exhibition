<template>
    <div id="cashStockAnalysis">
        <div class="totalCash">
            <div class="cashNum">
                <p v-text="totalCash.label"></p>
                <new-num-free-style  :height="totalCash.height" :from="totalCash.from" :to="totalCash.to"></new-num-free-style>
            </div>
            <div class="stat_queued_circle">
                <circlePie :label='label' :id="echartId" :percentage='percentage'></circlePie>
            </div>
        </div>
        <div class="detailCash">
            <div class="page" id="detailPage">
                <div name="pageOne" id="pageOne" v-show="pageOne">
                    <div class="detail_page_one" id="detailPageOne" >
                        <div class="detailCashItem" v-for="(item,key) in cashDetailListPrev" :key="key">
                            <p v-text="item.label"></p>
                            <new-num-free-style  :height="36" :from="item.from" :to="item.to"></new-num-free-style>
                        </div>
                    </div>
                </div>
                <div name="pageTwo" id="pageTwo" v-show="pageTwo">
                    <div class="detail_page_two" id="detailPageTwo" >
                        <div class="detailCashItem" v-for="(item,key) in cashDetailListNext" :key="key">
                            <p v-text="item.label"></p>
                            <new-num-free-style  :height="36" :from="item.from" :to="item.to"></new-num-free-style>
                        </div>
                    </div>
                </div>
            </div>
                
            <div class="page_icon">
                <div class="pageContent" id="pageContent">
                    <div class="page_prev"></div>
                    <div class="page_next"></div>
                </div>
            </div>
        </div>
         
    </div>
</template>
<script>
import dataJson from './dataJson.json'
import newNumFreeStyle from '@/components/newNumFreeStyle'
import circlePie from './circlePie'
    export default {
        components:{
            circlePie,
            newNumFreeStyle
        },
        destroyed() {
               window.clearInterval(window.timerId_left);
        },
        mounted() {
            this.drawCashUseAnalysis();
         
            //滚动效果
               window.timerId_left = setInterval(()=>{
                // let detailPage = document.getElementById("detailPage");
                // let pageOne = document.getElementById("detailPageOne");
                // let pageTwo = document.getElementById("detailPageTwo");
                // if(pageOne&&pageOne.style&&pageOne.style.display!="none"){
                //     pageOne.style.display="none";
                //     pageTwo.style.display="block";
                //     pageOne.classList.remove("leftAnimation");
                //     pageTwo.classList.add("rightAnimation");
                //     pageOne.style.animationPlayState = 'running';
                //     pageTwo.style.animationPlayState = 'running';
                // }else{
                //     pageTwo.style.display="none";
                //     pageOne.style.display="block";
                //     pageOne.classList.remove("leftAnimation");
                //     pageTwo.classList.add("rightAnimation");
                //     pageOne.style.animationPlayState = 'running';
                //     pageTwo.style.animationPlayState = 'running';
                // }
                this.pageTwo =!this.pageTwo;
                this.pageOne =!this.pageOne;
            },6000)
        },
        data(){
            return {
                pageOne:true,
                pageTwo:false,
                label: '环比下降',
                percentage: 23,
                // timerId:0,
                echartId:'totalCashChart',
                totalCash:{
                    height:60,
                    label:'库存现金（￥）',
                    from:100000,
                    to:32610000
                },
                cashDetailListPrev:[{
                    label:"100元券（￥）",
                    from:0,
                    to:10000000
                },{
                    label:"ATM用钞（￥）",
                    from:0,
                    to:11000000,
                },{
                    label:"50元券（￥）",
                    from:0,
                    to:1545000
                },{
                    label:"20元券（￥）",
                    from:0,
                    to:2895000
                },{
                    label:"5元券（￥）",
                    from:0,
                    to:789600
                },{
                    label:"1元券（￥）",
                    from:0,
                    to:189600
                }],
                cashDetailListNext:[{
                        label:"5角券（￥）",
                        from:0,
                        to:78960
                    },{
                        label:"1角券（￥）",
                        from:0,
                        to:89600
                    },{
                        label:"外币（￥）",
                        from:0,
                        to:789600
                    }]

            }
        },
        methods:{
             drawCashUseAnalysis(){
                let that = this;
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('cashUseAnalysis'))
                // 绘制图表
                myChart.setOption({
                    title: { 
                        text: '现金使用趋势分析',
                        left:50,
                        textStyle:{
                            color:that.labelColor,
                            fontSize:24,
                            fontWeight:"normal"
                        }
                    },
                    grid:{
                        y:100
                    },
                    legend: {
                        itemGap:30,
                        itemWidth:27,
                        data:['网点上缴','ATM回收','上门收款'],
                        right:90,
                        top:10,                        
                        textStyle:{
                            color:that.labelColor,
                            fontSize:16
                        }
                    },
                   
                    xAxis: {
                        type: 'category',
                        data:["07-25","07-26","07-27","07-28","07-29","07-30","07-31"],
                        axisTick: {show: false},
                        axisLine:{
                            lineStyle:{
                                color:that.barLineColor
                            },
                        },
                        axisLabel: {
                            interval: 0,
                            fontSize:16,
                            textStyle: {
                                color: that.labelColor
                            }
                        }
                    },
                    yAxis: {
                        name:"万元",
                        axisTick: {show: false},
                        nameTextStyle:{
                            fontSize :16,
                            padding  :[0,60,10,20],
                            color:that.labelColor
                        },
                        splitLine:{
                            lineStyle:{
                                type:"dotted",
                                color:that.barLineColor
                            }
                        },
                        splitNumber:4,
                        axisLine:{
                            lineStyle:{
                                color:that.barLineColor
                            },
                        },
                        axisLabel: {
                            borderColor:that.barLineColor,
                            fontSize:16,
                            textStyle: {
                                color: that.labelColor
                            }
                        }
                    },
                    series: [{
                        name: '上门收款',
                        type: 'bar',
                        barWidth:20,
                        itemStyle:{
                            normal:{
                                color:that.bar_color_red
                            }
                        },
                        data:[ ,630,,,430,,] ,
                       
                    },{
                        name: 'ATM回收',
                        type: 'line',
                        symbolSize: 10,
                        barWidth:20,
                        symbol:"circle",
                        itemStyle:{
                            normal:{
                                borderWidth :2,
                                borderColor:"#000",
                                color:that.bar_color_yellow
                            }
                        },
                        data:[100,280,290,400,380,440,380] ,   
                    },{
                        name: '网点上缴',
                        type: 'line',
                        symbolSize: 10,
                        barWidth:20,
                        symbol:"circle",
                        itemStyle:{
                            normal:{
                                borderWidth :2,
                                borderColor:"#000",
                                color:that.bar_color_blue
                            }
                        },
                        data:[500,400,590,620,610,700,580] 
                    }]
                });
            }
        }
    }
</script>
<style scoped>
    #cashStockAnalysis{
        width:100%;
        height:100%;
    }
    .totalCash{
        position:relative;
        width:836px;
        margin-left:80px;
        margin-bottom: 20px;
        height:161px;
        overflow:hidden;
        background:url('../../../static/image/third/left_bg1.png') center center no-repeat;
    }
    .cashNum{
        position:absolute;
        height:100%;
        width:100%;
        top:0px;
        left:30px;
        padding-left: 20px;
    }
    .cashNum p{
        color:#4a9cf2;
        margin-top: 20px;
    }
    .stat_queued_circle {
        width: 300px;
        height: 230px;
        float:right;
    }
    .detailCash{
        height:542px;
        width:836px;
        margin-left:80px;
        clear:both;
        position: relative;
        overflow:hidden;
        background:url('../../../static/image/third/left_bg2.png') center center no-repeat;
    }
    .detailCashItem{
        height:160px;
        width:42%;
        float:left;
        margin-left:50px;
    }
    .detailCashItem p{
        color:#4a9cf2;
    }
    .detail_page_one,.detail_page_two{
        position:relative;
        height:542px;
        width:836px;
        float:left;
        padding-top:20px;
    }

    .detailCash .page{
        position:relative;
        clear:both;
        width:2000px;
        height:100%;
        padding-top: 40px;
    }

    .leftAnimation{
        -webkit-animation:goLeft 4s 1 linear alternate forwards;
        -webkit-animation-play-state:paused;
        animation-play-state:paused; 
    }
    .rightAnimation{
        -webkit-animation:goRight 4s 1 linear alternate forwards;
        -webkit-animation-play-state:paused;
        animation-play-state:paused; 
    }
    .page_icon{
        position:absolute;
        display:none;
        height:12px;
        width:48px;
        overflow:hidden;
        left:35%;
        bottom:10px;
        z-index:100;
    }
    .pageContent{
        position:absolute;
        width:96px;
        height:12px;
    }

    .page_prev{
        float:left;
       height:12px;
       width:48px;
       background:url('../../../static/image/third/page_prev.png') center center  no-repeat; 
    }
    .page_next{
        float:left;
       height:12px;
       width:48px;
       background:url('../../../static/image/third/page_next.png') center center no-repeat; 
    }





   /*   .pageLeftAnimation{
        -webkit-animation:pageLeft 2s 1 linear alternate forwards;
        -webkit-animation-play-state:paused;
        animation-play-state:paused; 
    }
    .pageRightAnimation{
        -webkit-animation:pageRight 2s 1 linear alternate forwards;
        -webkit-animation-play-state:paused;
        animation-play-state:paused; 
    }

   @keyframes goLeft {
        0% {
            display: block;
            opacity:0;
        }
        50% {
            opacity:0.5;
        }
        100% {
            opacity:1;
        }
    }
    @keyframes goRight {
        0% {
            display: block;
            opacity:0;
        }
        50% {
            opacity:0.5;
        }
        100% {
            opacity:1;
        }
    }

    @keyframes pageLeft {
        0% {
            left:0px;
        }
        100% {
            left:-48px;
        }
    }
    @keyframes pageRight {
        0% {
            left:-48px;
        }
        100% {
            left:0px;
        }
    } */
    /* .pageOne-enter-active, .pageOne-leave-active {
        transition: opacity 2s;
    }
    .pageOne-enter, .pageOne-leave-to  {
        opacity: 0;
    }

    .pageTwo-enter-active, .pageTwo-leave-active {
        transition: opacity 2s;
    }
    .pageTwo-enter, .pageTwo-leave-to  {
        opacity: 0;
    } */
     #pageOne {
        opacity: 0;
        animation: bounce_1 6s;
        animation-fill-mode: forwards;
        animation-timing-function:linear;   

    }
     @keyframes bounce_1 {
        0% {
            opacity: 0;
        }
        20% {
            opacity: 1;
        }
        80% {
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }
    
    #pageTwo {
        opacity: 0;
        animation: bounce_2 6s;
        animation-fill-mode: forwards;
        animation-timing-function:linear;   
    }
       
    @keyframes bounce_2 {
        0% {
            opacity: 0;
        }
        20% {
            opacity: 1;
        }
        80% {
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }


</style>
