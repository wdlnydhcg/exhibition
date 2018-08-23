<template>
    <div id="taskProgress" :class="{'pageOne_bg':pageOne==true,'pageTwo_bg':pageTwo==true}">
        <div class="taskProgressContent" id="taskProgressContent">
            <!-- <transition name="pageOne" :appear='true'> -->
                <div class="page_one" id="pageOne" v-show="pageOne">
                    <div class="inOutStorageContent">
                        <p class="partLabel" style="left:60px;" v-text="inOutStorage.label"></p>
                        <div class="part1">
                           
                            <div class="complete">
                                
                                <p v-text="inOutStorage.part1.complete.label"></p>
                                <new-num-free-style  :height="60" :from="inOutStorage.part1.complete.from" :to="inOutStorage.part1.complete.to"></new-num-free-style>
                            </div>
                            <div class="task">
                                
                                <p v-text="inOutStorage.part1.task.label"></p>
                                <new-num-free-style  :height="30" :from="inOutStorage.part1.task.from" :to="inOutStorage.part1.task.to"></new-num-free-style>
                            </div>
                        </div>
                        <div class="part2">
                            <div class="complete">
                              
                                <p v-text="inOutStorage.part2.complete.label"></p>
                                <new-num-free-style  :height="60" :from="inOutStorage.part2.complete.from" :to="inOutStorage.part2.complete.to"></new-num-free-style>
                            </div>
                            <div class="task">
                             
                                <p v-text="inOutStorage.part2.task.label"></p>
                                <new-num-free-style  :height="30" :from="inOutStorage.part2.task.from" :to="inOutStorage.part2.task.to"></new-num-free-style>
                            </div>
                        </div>
                        <div class="stat_queued_circle">
                            <circlePie :label='inOutStorage.chartLabel' :id="inOutStorage.id" :percentage='inOutStorage.percentage'></circlePie>
                        </div>
                    </div>
                    <div class="integralPointContent">
                        <p class="partLabel" v-text="integralPoint.label"></p>
                        <div class="part1">
                            <div class="complete">
                                
                                <p v-text="integralPoint.part1.complete.label"></p>
                                <new-num-free-style  :height="40" :from="integralPoint.part1.complete.from" :to="integralPoint.part1.complete.to"></new-num-free-style>
                            </div>
                        </div>
                        <div class="part2">
                            <div class="task">
                                <p v-text="integralPoint.part2.task.label"></p>
                                <new-num-free-style  :height="26" :from="integralPoint.part2.task.from" :to="integralPoint.part2.task.to"></new-num-free-style>
                            </div>
                        </div>
                        <div class="stat_queued_circle">
                            <circlePie :label='integralPoint.chartLabel' :id="integralPoint.id" :percentage='integralPoint.percentage'></circlePie>
                        </div>
                    </div>
                    <div class="atmMoneyContent">
                        <p class="partLabel" v-text="atmMoney.label"></p>
                        <div class="part1">
                            <div class="complete">
                                <p v-text="atmMoney.part1.complete.label"></p>
                                <new-num-free-style  :height="40" :from="atmMoney.part1.complete.from" :to="atmMoney.part1.complete.to"></new-num-free-style>
                            </div>
                        </div>
                        <div class="part2">
                            <div class="task">
                                <p v-text="atmMoney.part2.task.label"></p>
                                <new-num-free-style  :height="26" :from="atmMoney.part2.task.from" :to="atmMoney.part2.task.to"></new-num-free-style>
                            </div>
                        </div>
                        <div class="stat_queued_circle">
                            <circlePie :label='atmMoney.chartLabel' :id="atmMoney.id" :percentage='atmMoney.percentage'></circlePie>
                        </div>
                    </div>
                </div>
            <!-- </transition> -->
            <!-- <transition name="pageTwo"  :appear='true'> -->
                <div class="page_two" id="pageTwo" v-show="pageTwo">
                    <div class="outletsMoneyContent">
                        <p class="partLabel" style="left:60px;" v-text="outletsMoney.label"></p>
                        <div class="part1">
                            <div class="complete">
                                <p v-text="outletsMoney.part1.complete.label"></p>
                                <new-num-free-style  :height="40" :from="outletsMoney.part1.complete.from" :to="outletsMoney.part1.complete.to"></new-num-free-style>
                            </div>
                        </div>
                        <div class="part2">
                            <div class="task">
                                <p v-text="outletsMoney.part2.task.label"></p>
                                <new-num-free-style  :height="26" :from="outletsMoney.part2.task.from" :to="outletsMoney.part2.task.to"></new-num-free-style>
                            </div>
                        </div>
                        <div class="stat_queued_circle">
                            <circlePie :label='outletsMoney.chartLabel' :id="outletsMoney.id" :percentage='outletsMoney.percentage'></circlePie>
                        </div>
                    </div>
                    <div class="deliveryContent">
                        <p class="partLabel" style="left:0;" v-text="delivery.label"></p>
                        <div class="part1">
                            <div class="complete">
                                <new-num-free-style  :height="60" :from="delivery.part1.complete.from" :to="delivery.part1.complete.to"></new-num-free-style>
                            </div>
                        </div>
                    </div>
                </div>
            <!-- </transition> -->
        </div>
        <div class="page_icon">
            <div class="pageContent" id="progressPageContent">
                <div class="page_prev"></div>
                <div class="page_next"></div>
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
             window.clearInterval(window.timerId_right);
        },
        mounted() {
            //滚动效果
            window.timerId_right = setInterval(()=>{
                // let pageOne = document.getElementById("pageOne");
                // let pageTwo = document.getElementById("pageTwo");
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
                console.log("taskProgress")
            },6000)
        },
        data(){
            return {
                pageOne:true,
                pageTwo:false,
                // timerId:0,
                label: '环比下降',
                inOutStorage:{
                    height:60,
                    label:'尾箱出入库（箱1）',
                    id:'inOutStorageChart',
                    chartLabel:'完成进度',
                    percentage:96.4,
                    part1:{
                        complete:{
                            label:'完成出库',
                            from:0,
                            to:82
                        },
                        task:{
                            label:'出库任务',
                            from:0,
                            to:89
                        }
                    },
                    part2:{
                        complete:{
                            label:'完成入库',
                            from:0,
                            to:108
                        },
                        task:{
                            label:'入库任务',
                            from:0,
                            to:108
                        }
                    }
                },
                integralPoint:{
                    height:60,
                    label:'整点清分（￥）',
                    id:'integralPointChart',
                    chartLabel:'完成进度',
                    percentage:(6000000/11000000).toFixed(2)*100,
                    part1:{
                        complete:{
                            label:'已完成',
                            from:0,
                            to:6000000
                        }
                    },
                    part2:{
                        task:{
                            label:'今日任务',
                            from:0,
                            to:11000000
                        }
                    }
                },
                //ATM配款
                atmMoney:{
                    height:60,
                    label:'ATM配款（￥）',
                    id:'atmMoneyChart',
                    chartLabel:'完成进度',
                    percentage:(8000000/10800000).toFixed(2)*100,
                    part1:{
                        complete:{
                            label:'已完成',
                            from:0,
                            to:8000000
                        }
                    },
                    part2:{
                        task:{
                            label:'今日任务',
                            from:0,
                            to:10800000
                        }
                    }
                },
                //网点配款
                outletsMoney:{
                    height:60,
                    label:'网点配款（￥）',
                    id:'outletsMoneyChart',
                    chartLabel:'完成进度',
                    percentage:(4000000/6200000).toFixed(2)*100,
                    part1:{
                        complete:{
                            label:'已完成',
                            from:0,
                            to:4000000
                        }
                    },
                    part2:{
                        task:{
                            label:'今日任务',
                            from:0,
                            to:6200000
                        }
                    }
                },
                delivery:{
                    height:60,
                    label:'上缴人行（￥）',
                    part1:{
                        complete:{
                            from:0,
                            to:10000000
                        }
                    },
                }

            }
        },
        methods:{

        }
    }
</script>
<style scoped>

    #taskProgress{
        width:100%;
        height:100%;
        box-sizing:border-box;
        left:100px;
        overflow:hidden;
        position:relative;
        background-repeat: no-repeat;
        /* animation:change_bg 12s infinite; */
        /* animation-timing-function: step-start; */
        /* animation-name:change_bg;

        animation-direction: 12s; */
    }
    #taskProgress.pageOne_bg{
        background:url('../../../static/image/third/right_bg1.png') 0 25% no-repeat;
    }
    #taskProgress.pageTwo_bg{
        background:url('../../../static/image/third/right_bg2.png') 0 25% no-repeat;
        background-position-y: 39px;
    }
    @keyframes change_bg {
        0%{
            background:url('../../../static/image/third/right_bg1.png') 0 25% no-repeat;
        }
        50%{
            background:url('../../../static/image/third/right_bg1.png') 0 25% no-repeat;
        }
        100%{
            background:url('../../../static/image/third/right_bg2.png') 0 25% no-repeat;
            background-position-y: 39px;
        }
    }
    .taskProgressContent{
        position: absolute;
        width:2200px;
        height:100%;
    }
    .page_one,.page_two{
        float:left;
    }

    .inOutStorageContent,.integralPointContent,.atmMoneyContent,.outletsMoneyContent,.deliveryContent{
        position:relative;
        width:929px;
        height:161px;
        left:-60px;
        margin-bottom:77px;
        clear:both;
    }
    .partLabel{
        position: absolute;
        color:#4a9cf2;
        top:0;
        left:30px;
    }
    .inOutStorageContent .part1 {
        clear:both;
        margin-left:50px;
    }
    .inOutStorageContent .part1 .complete{
        position: relative;
        float:left;
        min-width:140px;
        height:60px;
        margin-top:100px;
        margin-left:140px;
    }
    
    .inOutStorageContent .part1 .complete p{
        position: absolute;
        top:-40px;
        left:0;
        color:#4a9cf2;
    }
    .inOutStorageContent .part1 .task{
        position: relative;
        float:left;
        min-width:100px;
        height:60px;
        margin-top:130px;
    }
    .inOutStorageContent .part1 .task p{
        position: absolute;
        top:-40px;
        left:0;
        color:#4a9cf2;
    }
    .inOutStorageContent .part2 .complete{
        position: relative;
        float:left;
        min-width:140px;
        height:60px;
        margin-top:100px;
        margin-left:60px;
    }
    .inOutStorageContent .part2 .complete p{
        position: absolute;
        top:-40px;
        left:0;
        color:#4a9cf2;
    }
    .inOutStorageContent .part2 .task{
        position: relative;
        float:left;
        min-width:100px;
        height:60px;
        margin-top:130px;
    }
    .inOutStorageContent .part2 .task p{
        position: absolute;
        top:-40px;
        left:0;
        color:#4a9cf2;
    }

    .integralPointContent{
        margin-top:70px;
        margin-left:100px;
    }

    .integralPointContent .part1,.integralPointContent .part2 {
        margin-left:50px;
        float:left;
    }
    .integralPointContent .part1 .complete{
        position: relative;
        float:left;
        min-width:140px;
        height:60px;
        margin-top:100px;
        margin-left:60px;
    }
    
    .integralPointContent .part1 .complete p{
        position: absolute;
        top:-40px;
        left:0;
        color:#4a9cf2;
    }

    .integralPointContent .part2 .task{
        position: relative;
        float:left;
        min-width:140px;
        height:60px;
        margin-top:117px;
        margin-left:100px;
    }
    .integralPointContent .part2 .task p{
        position: absolute;
        top:-40px;
        left:0;
        color:#4a9cf2;
    }

    
    .atmMoneyContent{
        margin-top:73px;
        margin-left:160px;
    }

    .atmMoneyContent .part1,.atmMoneyContent .part2 {
        margin-left:50px;
        float:left;
    }
    .atmMoneyContent .part1 .complete{
        position: relative;
        float:left;
        min-width:140px;
        height:60px;
        margin-top:100px;
        margin-left:60px;
    }
    
    .atmMoneyContent .part1 .complete p{
        position: absolute;
        top:-40px;
        left:0;
        color:#4a9cf2;
    }

    .atmMoneyContent .part2 .task{
        position: relative;
        float:left;
        min-width:140px;
        height:60px;
        margin-top:117px;
        margin-left:100px;
    }
    .atmMoneyContent .part2 .task p{
        position: absolute;
        top:-40px;
        left:0;
        color:#4a9cf2;
    }

    .outletsMoneyContent .part1,.outletsMoneyContent .part2 {
        margin-left:50px;
        float:left;
    }
    .outletsMoneyContent .part1 .complete{
        position: relative;
        float:left;
        min-width:140px;
        height:60px;
        margin-top: 115px;
        margin-left: 90px;
    }
    
    .outletsMoneyContent .part1 .complete p{
        position: absolute;
        top:-40px;
        left:0;
        color:#4a9cf2;
    }

    .outletsMoneyContent .part2 .task{
        position: relative;
        float:left;
        min-width:140px;
        height:60px;
        margin-top:117px;
        margin-left:100px;
    }
    .outletsMoneyContent .part2 .task p{
        position: absolute;
        top:-40px;
        left:0;
        color:#4a9cf2;
    }

    .deliveryContent{
        margin-top:70px;
        margin-left:145px;
    }

    .deliveryContent .part1 .complete{
        position: relative;
        float:left;
        min-width:140px;
        height:60px;
        margin-top:100px;
        margin-left:200px;
    }
    
    .deliveryContent .part1 .complete p{
        position: absolute;
        top:-40px;
        left:0;
        color:#4a9cf2;
    }

    .stat_queued_circle {
        position:absolute;
        width: 160px;
        height: 160px;
        top:40px;
        right:100px;
    }
    .atmMoneyContent .stat_queued_circle{
        right:150px;
    }
    .inOutStorageContent .stat_queued_circle{
        right:5px;
    }

    .detailCash{
        height:542px;
        width:836px;
        margin-left:60px;
        clear:both;
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

    .page_icon{
        position:absolute;
        height:12px;
        width:48px;
        display:none;
        overflow:hidden;
        left:56%;
        bottom:75px;
        z-index:100;
    }
    .pageTwo{
        display:none;
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

    /* .pageLeftAnimation{
        -webkit-animation:pageLeft1 2s 1 linear alternate forwards;
        -webkit-animation-play-state:paused;
        animation-play-state:paused; 
    }
    .pageRightAnimation{
        -webkit-animation:pageRight1 2s 1 linear alternate forwards;
        -webkit-animation-play-state:paused;
        animation-play-state:paused; 
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

    @keyframes pageLeft1 {
        0% {
            left:0px;
        }
        100% {
            left:-48px;
        }
    }
    @keyframes pageRight1 {
        0% {
            left:-48px;
        }
        100% {
            left:0px;
        }
    }
    @keyframes goLeft {
        0% {
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
            opacity:0;
        }
        50% {
            opacity:0.5;
        }
        100% {
            opacity:1;
        }
    } */

    /* .pageOne-enter-active, .pageOne-leave-active {
        transition: all 2s;
    }
    .pageOne-enter, .pageOne-leave-to {
        opacity: 0;
    }

    .pageTwo-enter-active, .pageTwo-leave-active {
        transition: all 2s;
    }
    .pageTwo-enter, .pageTwo-leave-to {
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
