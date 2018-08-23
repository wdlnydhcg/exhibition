<template>
    <div :class="{'delayInfo':delay}" v-if="initTip">
        <div v-if="direction == 'bottom'"  class="direction-bottom">
            <div class="mainTip" :style="{'top':yAxis+'px','left':xAxis+'px'}">
                <div class="line" :style="{'height':lineHeight+'px'}"></div>
                <!-- <div class="sinceSpot" :style="{'top':0+'px'}"></div> -->
                <img class="sinceSpot" src="@/static/image/sinceSpot.png" alt="">
                <div class="tipInfo" :class="{'c1_2':colNum==1&&rowNum==2,'c2_2':colNum==2&&rowNum==2,'c2_3':colNum==2&&rowNum==3,'c2_4':colNum==2&&rowNum==4}" :style="{'top':(lineHeight-4)+'px'}">
                    <div class="biankuang biankuang_1"></div>
                    <div class="biankuang biankuang_2"></div>
                    <div class="biankuang biankuang_3"></div>
                    <div class="biankuang biankuang_4"></div>
                    <div class="tipInfoContent">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="direction == 'top'"  class="direction-top">
            <div class="mainTip" :style="{'top':yAxis-lineHeight+'px','left':xAxis+'px'}">
                <div class="line" :style="{'height':lineHeight+'px'}"></div>
                <!-- <div class="sinceSpot" :style="{'top':lineHeight+'px'}"></div> -->
                <img class="sinceSpot" src="@/static/image/sinceSpot.png" :style="{'top':(lineHeight-35)+'px'}" alt="">
                <div class="tipInfo" :class="{'c1_2':colNum==1&&rowNum==2,'c2_2':colNum==2&&rowNum==2,'c2_3':colNum==2&&rowNum==3,'c2_4':colNum==2&&rowNum==4}">
                    <div class="biankuang biankuang_1"></div>
                    <div class="biankuang biankuang_2"></div>
                    <div class="biankuang biankuang_3"></div>
                    <div class="biankuang biankuang_4"></div>
                    <div class="tipInfoContent">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        created() {
            setTimeout(() => {
                this.initTip = true
            }, this.delay*1000);
        },
        props:{
            delay:{
                type:Number,
                default:0
            },
            rowNum:{
                type:String,
            },
            colNum:{
                type:String,
            },
            lineHeight:{
                type:String,
                default:'400'
            },
            direction:{
                type:String,
                default:"top"
            },
            xAxis:{
                type:String,
                default:0
            },
            yAxis:{
                type:String,
                default:0
            }
        },
        data(){
            return{
                initTip:false
            }
        }
    }
</script>
<style scoped>
    

         .mainTip{
            position: relative;
        }
         .mainTip{
            position: relative;
        }
        
        .tipInfo{
            top: -2px;
            position: absolute;
            display: inline-block;
            min-height: 100px;
            min-width: 100px;
            /* border: 2px solid #3b9fed; */
            margin-left: 50px;
            padding: 10px 24px 0px 10px;
            overflow: hidden;
       
        }
        .direction-top .tipInfo .tipInfoContent{
           
            position: relative;
            opacity: 0;
           
            animation: easeInContent 12s;
            
        }
         .direction-bottom .tipInfo .tipInfoContent{
            position: relative;
            opacity: 0;
            animation: easeInContent 12s;
        }
        .delayInfo .tipInfo .tipInfoContent{
            position: relative;
            opacity: 0;
            animation: delayInfo-easeInContent 12s;
            animation-fill-mode: forwards;
        }
        .c1_2 .tipInfoContent {
            background-image:  url("./../static/image/second/1-2/BG.png");
            background-repeat: no-repeat;
            height: 204px;

        }
        .c2_2 .tipInfoContent {
             height: 244px;
            background-image:  url("./../static/image/second/2-2/BG.png");
            background-repeat: no-repeat;
        }
        .c2_3 .tipInfoContent {
            height: 225px;
            background-image:  url("./../static/image/second/2-3/BG.png");
            background-repeat: no-repeat;
        }
        .c2_4 .tipInfoContent {
            background-image:  url("./../static/image/second/2-4/BG.png");
            background-repeat: no-repeat;
             height: 277px;
        }
        .tipInfo-title{
            line-height: 58px;
            height: 50px;
            padding-left: 55px;
            color: #3b9fed;
            font-size: 24px;
        }
        .tipInfo-row{
            margin:13px 0;
        }
         /* .tipInfo-title:before{
            content: "";
            margin: 10px 10px 10px -25px;
            display: inline-block;
            width: 20px;
            height: 20px;
            position: absolute;
            background: #3b9fed;
        } */
        .tipInfo-col{
            display: inline-block;
            margin: 2px 5px;
        }
        .tipInfoLabel{
            display: inline-block;
            text-align: right;
            color: #3b9fed;
        }
        .tipInfoLabel.width-150{
            min-width: 150px;
        }
        .tipInfoLabel.width-140{
            min-width: 140px;
        }
        .tipInfoLabel.width-160{
            min-width: 160px;
        }
        .tipInfoLabel.width-200{
            min-width: 200px;
        }
        .tipInfoLabel.width-250{
            min-width: 250px;
        }

        .tipInfoLabel.width-120{
            min-width: 120px;
        }

        .direction-top .line {
            position: absolute;
            display: inline-block;
            width:50px;
            border-left: 1.5px solid #3b9fed;
            border-top: 1.5px solid #3b9fed;
            animation-fill-mode: forwards;
            clip: rect(400px, 2px,430px, -10px);
            animation: lineWidth-top-Animation 12s;
         
        }
        .direction-bottom .line{
            position: absolute;
            display: inline-block;
            width:50px;
            border-left: 2px solid #3b9fed;
            border-bottom: 2px solid #3b9fed;
            animation-fill-mode: forwards;
            clip: rect(0px, 2px,0px, -10px);
            animation: lineWidth-bottom-Animation 12s;
        }
         .delayInfo .direction-top .line {
            position: absolute;
            display: inline-block;
            width:50px;
            border-left: 1.5px solid #3b9fed;
            border-top: 1.5px solid #3b9fed;
            clip: rect(400px, 2px,430px, -10px);
            animation: delayInfo-lineWidth-top-Animation 12s;
            animation-fill-mode: forwards;
         
        }
         .delayInfo .direction-bottom .line{
            position: absolute;
            display: inline-block;
            width:50px;
            border-left: 2px solid #3b9fed;
            border-bottom: 2px solid #3b9fed;
            clip: rect(0px, 2px,0px, -10px);
            animation: delayInfo-lineWidth-bottom-Animation 12s;
            animation-fill-mode: forwards;
        }
         @keyframes delayInfo-lineWidth-bottom-Animation{
            0% {
                clip: rect(0px, 2px,0px, -10px);
            }
            8.3% {
                clip: rect(0px, 2px,430px, -10px);
            }
            16.6% {
                clip: rect(0px,215px,430px, -10px);
            }
            100%{
                clip: rect(0px,215px,430px, -10px);
            }       
        }
        @keyframes delayInfo-lineWidth-top-Animation{
            0% {
                clip: rect(430px, 2px,430px, -10px);
            }
            8.3% {
                clip: rect(0px, 2px,430px, -10px);
            }
            16.6% {
                clip: rect(0px,215px,430px, -10px);
            }
            100% {
                clip: rect(0px,215px,430px, -10px);
            }
           
            
        }
        @keyframes lineWidth-bottom-Animation{
            0% {
                clip: rect(0px, 2px,0px, -10px);
            }
            8.3% {
                clip: rect(0px, 2px,430px, -10px);
            }
            16.6% {
                clip: rect(0px,215px,430px, -10px);
            }

            24.9% {
                clip: rect(0px,215px,430px, -10px);
            }
            50% {
                clip: rect(0px,215px,430px, -10px);
            }
            83.34%{
                clip: rect(0px,215px,430px, -10px);
            }

            91.67%{
                clip: rect(0px, 2px,430px, -10px);
            }
            100%{
                clip: rect(0px, 2px,0px, -10px);
            }
            
        }
        @keyframes lineWidth-top-Animation{
            0% {
                clip: rect(430px, 2px,430px, -10px);
            }
            8.3% {
                clip: rect(0px, 2px,430px, -10px);
            }
            16.6% {
                clip: rect(0px,215px,430px, -10px);
            }

            24.9% {
                clip: rect(0px,215px,430px, -10px);
            }
            50% {
                clip: rect(0px,215px,430px, -10px);
            }
            83.34%{
                clip: rect(0px,215px,430px, -10px);
            }

            91.67%{
                clip: rect(0px, 2px,430px, -10px);
            }
            100%{
                clip: rect(430px, 2px,430px, -10px);
            }
            
        }
        .sinceSpot{
            content: "";
            display: inline-block;
            border-radius: 50%;
            position: absolute;     
            left: -35px;
            opacity: 0;
            animation-name:sinceSpot-ease;
            animation-duration: 12000ms;
            animation-fill-mode: forwards;
            animation-timing-function:linear;
        }
        .delayInfo .sinceSpot{
            content: "";
            display: inline-block;
            border-radius: 50%;
            position: absolute;     
            left: -35px;
            opacity: 0;
            animation-name:delayInfo-sinceSpot-ease;
            animation-duration: 12000ms;
            animation-fill-mode: forwards;
            animation-timing-function:linear;
        }
        @keyframes delayInfo-sinceSpot-ease {
            0%{
                opacity: 0;
            }
            10%{
                opacity: 1;
            }
            90%{
                opacity: 1;
            }
            100%{
                opacity: 1;
            }
        }
        @keyframes sinceSpot-ease {
            0%{
                opacity: 0;
            }
            10%{
                opacity: 1;
            }
            90%{
                opacity: 1;
            }
            100%{
                opacity: 0;
            }
        }
        .direction-top .sinceSpot{
            top: 365px;
            left: -55px;
        }
        .direction-bottom .sinceSpot{
            bottom: -40px;
            left: -55px;
        }
        .tipInfoValue{
            text-align: left;
             color: #f4cc38;
             display: inline-block;
             width: 64px;
        }
        .biankuang {
            width: 3px;
            height: 3px;
            position: absolute;
        }
        .biankuang.biankuang_4{
            animation-delay:1.2s;
            -webkit-animation-delay:1.2s;
        }
        .biankuang.biankuang_3{
            animation-delay:2.2s;
            -webkit-animation-delay:2.2s;
        }
        .biankuang.biankuang_2{
            animation-delay:3.2s;
            -webkit-animation-delay:3.2s;
        }
        .biankuang.biankuang_1{
            animation-delay:4.2s;
            -webkit-animation-delay:4.2s;
        }
        .biankuang_1{
             width: 5px;
            /* background-image: url("./../static/image/second/border_left.png"); */
            background-repeat: no-repeat; 
            bottom: 30px;
            animation: tipInfoHeight_1_Animation 10s linear forwards;
        }
         .delayInfo .biankuang_1{
             width: 5px;
            /* background-image: url("./../static/image/second/border_left.png"); */
            background-repeat: no-repeat; 
            bottom: -3px;
            animation: delayInfo-tipInfoHeight_1_Animation 10s linear forwards;
        }
        @keyframes delayInfo-tipInfoHeight_1_Animation {
            0% {
                height: 0%;
                bottom: -3px;
            }
            5%{
                height: 5%;
                bottom: -3px;
            }
            10% {
               height: 100%;
               bottom: -3px;
            }
            20% {
               height: 100%;
                bottom: -3px;
            }
            30% {
               height: 100%;
            }
            100% {
               height: 100%;
            }
        }

        @keyframes tipInfoHeight_1_Animation {
            0% {
                height: 0%;
                bottom: 30px;
            }
            5%{
                height: 5%;
                bottom: 30px;
            }
            10% {
               height: 100%;
               bottom: -3px;
            }
            20% {
               height: 100%;
                bottom: -3px;
            }
            30% {
               height: 100%;
            }
            40% {
               height: 100%;
            }
            50% {
               height: 100%;
            }
            60% {
               height: 100%;
            }
            70% {

               height: 0%;
            }
            80% {
               height: 0%;
            }
            90% {
               height: 0%;
            }
            100% {
               height: 0%;
            }
        }
        .c1_2 .biankuang_1{
            background-image: url("./../static/image/second/1-2/border_left.png");
        }
        .c2_2 .biankuang_1{
            background-image: url("./../static/image/second/2-2/border_left.png");
        }
        .c2_3 .biankuang_1{
            background-image: url("./../static/image/second/2-3/border_left.png");
        }
        .c2_4 .biankuang_1{
            background-image: url("./../static/image/second/2-4/border_left.png");
        }

        .biankuang_3{
            width: 5px;
            /* background-image: url("./../static/image/second/border_right.png"); */
            background-repeat: no-repeat; 
            animation: tipInfoHeight_3_Animation 10s linear forwards;
        }
        .delayInfo .biankuang_3{
            width: 5px;
            /* background-image: url("./../static/image/second/border_right.png"); */
            background-repeat: no-repeat; 
            animation: delayInfo-tipInfoHeight_3_Animation 10s linear forwards;
        }
        @keyframes delayInfo-tipInfoHeight_3_Animation {
           0% {
              height: 0%;
            }
            10% {
               height: 100%;
            }
            100%{
                height:100%;
            }
        }
        .c1_2 .biankuang_3{
            background-image: url("./../static/image/second/1-2/border_right.png");
        }
        .c2_2 .biankuang_3{
            background-image: url("./../static/image/second/2-2/border_right.png");
        }
        .c2_3 .biankuang_3{
            background-image: url("./../static/image/second/2-3/border_right.png");
        }
        .c2_4 .biankuang_3{
            background-image: url("./../static/image/second/2-4/border_right.png");
        }

        .biankuang_2{
            height: 24px;
            background-repeat: no-repeat;
            animation: tipInfoWidth_2_Animation 10s linear forwards;
        }
        .delayInfo  .biankuang_2{
            height: 24px;
            background-repeat: no-repeat;
            animation:  delayInfo-tipInfoWidth_2_Animation 10s linear forwards;
        }
        @keyframes delayInfo-tipInfoWidth_2_Animation {
            0% {
              width: 0%;
            }
            10% {
               width: 100%;
            }
            100% {
               width: 100%;
            }
            
        }
        .c1_2 .biankuang_2{
            background-image: url("./../static/image/second/1-2/border_bottom.png");
        }
        .c2_2 .biankuang_2{
            background-image: url("./../static/image/second/2-2/border_bottom.png");
        }
        .c2_3 .biankuang_2{
            bottom: 5px;
            background-image: url("./../static/image/second/2-3/border_bottom.png");
        }
        .c2_4 .biankuang_2{
            background-image: url("./../static/image/second/2-4/border_bottom.png");
        }


        .biankuang_4{
            height: 33px;
            background-repeat: no-repeat;
            animation: tipInfoWidth_4_Animation 10s linear forwards;
        }
        .delayInfo .biankuang_4{
            height: 33px;
            background-repeat: no-repeat;
            animation:  delayInfo-tipInfoWidth_4_Animation 10s linear forwards;
        }
         @keyframes delayInfo-tipInfoWidth_4_Animation {
            0% {
              width: 0%;
            }
            10% {
               width: 100%;
            }
            100% {
               width: 100%;
            }
            
        }
        .c1_2 .biankuang_4{
            background-image: url("./../static/image/second/1-2/border_top.png");
        }
        .c2_2 .biankuang_4{
            background-image: url("./../static/image/second/2-2/border_top.png");
        }
        .c2_3 .biankuang_4{
            background-image: url("./../static/image/second/2-3/border_top.png");
        }
        .c2_4 .biankuang_4{
            background-image: url("./../static/image/second/2-4/border_top.png");
        }
        .biankuang_1 {
            height: 0px;
            bottom: -3px;
            left: 0px;
        }
        .biankuang_2 {
            width: 0px;
            bottom: 24px;
            right: 2px;
            position: absolute;
        }
        .biankuang_3 {
            height: 0px;
            top: 34px;
            right: 2px;
        }
        .c1_2 .biankuang_3{
            right: 6px;
        }
        .c2_3 .biankuang_3{
            right: 44px;
        }
        .c2_4 .biankuang_3{
            right: 35px;
        }
        .c2_4 .biankuang_2{
            bottom: 22px;
        }
        .c2_2 .biankuang_2{
            bottom: 63px;
        }
        .c2_2 .biankuang_3{
            right: 30px;
            top: 35px;
        }
        .biankuang_4 {
            width: 0px;
            top: 2px;
            left: 0px;
        }
        @keyframes bs {
            0% {
                box-shadow: inset -1px 1px 4px 2px #8cf3f3, inset -1px 1px 4px 2px #222222, -1px 1px 4px 2px #b2ff1a;
            }
            50% {
                box-shadow: inset -1px 1px 4px 2px #8cf3f3, inset -1px 1px 4px 2px #222222,-1px 1px 4px 2px #1affff;
            }
        }
        @keyframes identifier {
            
        }
        @keyframes easeInContent {
            0% {
                opacity: 0;
            }
            10% {
                opacity: 0;
            }

            20% {
                opacity: 1;
            }
            40% {
                opacity: 1;
            }
            60% {
                opacity: 1;
            }
            80% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        }
        @keyframes delayInfo-easeInContent {
            0% {
                opacity: 0;
            }
            10% {
                opacity: 0;
            }

            20% {
                opacity: 1;
            }
            100% {
                opacity: 1;
            }
            
        }
        @keyframes tipInfoWidth_2_Animation {
            0% {
              width: 0%;
            }
            10% {
               width: 100%;
            }
            20% {
               width: 100%;
            }
            30% {
               width: 100%;
            }
            40% {
               width: 100%;
            }
            50% {
               width: 100%;
            }
            60% {
               width: 100%;
            }
            70% {
               width: 100%;
            }
            80% {
               width: 0%;
            }
            90% {
               width: 0%;
            }
            100% {
               width: 0%;
            }
        }
        @keyframes tipInfoWidth_4_Animation {
            0% {
              width: 0%;
            }
            10% {
               width: 100%;
            }
            20% {
               width: 100%;
            }
            30% {
               width: 100%;
            }
            40% {
               width: 100%;
            }
            50% {
               width: 100%;
            }
            60% {
               width: 100%;
            }
            70% {
               width: 100%;
            }
            80% {
               width: 100%;
            }
            90% {
               width: 100%;
            }
            100% {
               width: 0%;
            }
        }
        
        @keyframes tipInfoHeight_3_Animation {
           0% {
              height: 0%;
            }
            10% {
               height: 100%;
            }
            20% {
               height: 100%;
            }
            30% {
               height: 100%;
            }
            40% {
               height: 100%;
            }
            50% {
               height: 100%;
            }
            60% {
               height: 100%;
            }
            70% {
               height: 100%;
            }
            80% {
               height: 100%;
            }
            90% {
               height: 0%;
            }
            100% {
               height: 0%;
            }
        }
       

</style>
