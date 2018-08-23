<template>
        <div class="centerBg">

            <div class="control_tab">
                <span class="tab" :class="{'selected':tabName=='tab1'}">网点配款</span>
                <span class="tab" :class="{'selected':tabName=='tab2'}">尾箱出库</span>
            </div>
            <div class="control_content" :class="{'cashToQuota':cashToquota,'quotaToFinal':quotaToFinal,'finalToDoor':finalToDoor,'doorTofinal':doorTofinal,'finalToClear':finalToClear,'clearToCash':clearToCash}">
                <div class="route_1"></div>
                <div class="route_2"></div>
                <div class="route_3"></div>
                <div class="route_4"></div>
                <div class="route_5"></div>
                <div class="route_6"></div>
                <div class="cashBg-dark"></div>
                <div class="cashBg-light"></div>
                
                <div class="car"></div>
                <div class="cashBoxTip">
                    <div class="cashBoxTip-item">
                        <!-- <div class="item-title">网点尾箱</div> -->
                        <div class="numItem">
                            <p class="subItem-title">流通卷(¥)</p>
                            <new-num-free-style  :height="totalCash.height" :from="0" :to="cashBox.flowRoll"></new-num-free-style>
                        </div>
                        <div class="numItem">
                            <p class="subItem-title">全兑卷(¥)</p>
                            <new-num-free-style  :height="totalCash.height" :from="0" :to="cashBox.allRoll"></new-num-free-style>
                        </div>
                        <div class="numItem">
                            <p class="subItem-title">硬币(¥)</p>
                            <new-num-free-style  :height="totalCash.height" :from="0" :to="cashBox.coin"></new-num-free-style>
                        </div>
                        <div class="numItem">
                            <p class="subItem-title">外币($)</p>
                            <new-num-free-style  :height="totalCash.height" :from="0" :to="cashBox.foreignCoins"></new-num-free-style>
                        </div>
                    </div>
                </div>
                <div class="bootbox">
                    <div class="bootbox-item">
                        <div class="item-title">网点尾箱</div>
                        <div class="numItem ">
                            <p class="subItem-title">已出库</p>
                            <new-num-free-style  :height="totalCash.height" :from="0" :to="finalBox.netFinalBox.out_bank_num"></new-num-free-style>
                        </div>
                        <div class="numItem">
                            <p class="subItem-title">在库数量</p>
                            <new-num-free-style  :height="totalCash.height" :from="0" :to="finalBox.netFinalBox.in_bank_num"></new-num-free-style>
                        </div>
                    </div>
                    <div class="bootbox-item">
                        <div class="item-title">ATM款箱</div>
                        <div class="numItem">
                            <p class="subItem-title">已出库</p>
                            <new-num-free-style  :height="totalCash.height" :from="0" :to="finalBox.ATMBox.out_bank_num"></new-num-free-style>
                        </div>
                        <div class="numItem">
                            <p class="subItem-title">在库数量</p>
                            <new-num-free-style  :height="totalCash.height" :from="0" :to="finalBox.ATMBox.in_bank_num"></new-num-free-style>
                        </div>
                    </div>
                    
                </div>
                <div class="bootBox-dark"></div>
                <div class="bootBox-light"></div>
                
                <div class="loading_components">
                    <div class="progress_text"></div>
                    <div class="triangle_border_down">
                        <span></span>
                    </div>    
                    <span class="progress_value"> 
                        <number ref="number" :from="0" :to="counter" :duration="1"/>%
                    </span>
                    <b-progress :value="counter"  height="22px" class="progress-bar-div" :max="max"></b-progress>
                </div>

                <div class="metalBox">
                     <div class="metalBox-item">
                        
                        <div class="numItem">
                            <p class="subItem-title">黄金库存(盎司)</p>
                            <new-num-free-style  :height="totalCash.height" :from="0" :to="goldRoll"></new-num-free-style>
                        </div>
                    </div>
                </div>

            </div>
        </div>
</template>
<script>
    import newNumFreeStyle from '@/components/newNumFreeStyle'
    import loadingPercent from '@/components/loadingPercent'
    export default {
        components:{
            loadingPercent,
            newNumFreeStyle,
        },
        data(){
            return{
                tabName:'tab1',
                cashToquota:true,       //现金 -> 配款
                quotaToFinal:false,     //配款 -> 尾箱
                finalToDoor:false,      //尾箱 -> 大门
                doorTofinal:false,      //门口 -> 尾箱
                finalToClear:false,     //尾箱库 -> 清分区
                clearToCash:false,      //清分区 -> 现金库
                counter: 0,
                max: 100,
               
                totalCash:{
                    height:45,
                    label:'库存现金（￥）',
                    from:10000,
                    to:84562000
                },
                //尾箱库
                finalBox:{
                    netFinalBox:{
                        out_bank_num:82, //已出库
                        in_bank_num:7, //在库数量
                    },
                    ATMBox:{           
                        out_bank_num:108, //已出库
                        in_bank_num:0, //在库数量
                    },
                },
                //现金库
                cashBox:{        
                    flowRoll:28000000,      //流通卷
                    allRoll:4000000,       //全兑卷
                    coin:20000,           //硬币
                    foreignCoins:750000   //外币
                },
                goldRoll:54800,  //黄金库存
            }
        },
        mounted() {
            this.addBackClass()
            // this.progressCounter()
        },
        destroyed() {
            clearTimeout(window.cashAnimation_1)
            clearTimeout(window.cashAnimation_2)
            clearTimeout(window.cashAnimation_3)
            clearTimeout(window.cashAnimation_4)
            clearTimeout(window.cashAnimation_5)
            clearTimeout(window.cashAnimation_6)
            clearTimeout(window.cashAnimation_7)
            clearTimeout(window.cashAnimation_8)
            clearTimeout(window.cashAnimation_9)
            clearTimeout(window.cashAnimation_10)
            clearTimeout(window.cashAnimation_11)

             
        },
        methods:{
            progressCounter(){
                let that = this;
                this.counter = 0;
                window.cashAnimation_1 = setTimeout(() => {
                    for (let index = 0; index < that.max; index++) {
                        this.counter++   
                    }
                }, 10);
            },
            addBackClass(){
                let that = this;
                window.cashAnimation_2 =  setTimeout(function(){
                    that.cashToquota = false
                    that.quotaToFinal = true;
                    that.progressCounter()
                     window.cashAnimation_3 = setTimeout(function(){
                        that.counter = 0;
                        that.$refs.number.restart()	
                    },2000)
                },10000);
                 window.cashAnimation_4 = setTimeout(function(){
                    that.quotaToFinal = false;
                    that.finalToDoor = true;
                     window.cashAnimation_5 = setTimeout(() => {
                        //在尾箱库门口
                        that.finalBox.netFinalBox.in_bank_num += 4;
                        that.finalBox.netFinalBox.out_bank_num -= 4;
                        
                        that.finalBox.ATMBox.in_bank_num += 4;
                        that.finalBox.ATMBox.out_bank_num -= 4;
                        that.progressCounter()
                    }, 1000);
                },20000);
                 window.cashAnimation_6 = setTimeout(() => {
                    that.tabName = 'tab2';
                    that.finalToDoor = false;
                    that.doorTofinal = true;
                    that.counter = 0;
                   
                    that.$refs.number.restart()	

                    
                    // that.finalBox.netFinalBox.in_bank_num -= 6;
                    // that.finalBox.ATMBox.in_bank_num -= 8;

                    window.cashAnimation_7 = setTimeout(() => {
                        that.finalBox.netFinalBox.in_bank_num += 2;
                        that.finalBox.ATMBox.in_bank_num += 2;
                        that.progressCounter()
                    }, 4000);
                }, 30000);
                 window.cashAnimation_8 = setTimeout(() => {
                    that.doorTofinal = false;
                    that.finalToClear = true;

                    that.counter = 0;
                    that.finalBox.netFinalBox.out_bank_num += 2;
                    that.finalBox.ATMBox.out_bank_num += 2;
                    that.$refs.number.restart()	
                     window.cashAnimation_9 = setTimeout(() => {
                        that.progressCounter()
                        // that.finalBox.netFinalBox.in_bank_num -= 27;
                        // that.finalBox.ATMBox.in_bank_num -= 27;
                    }, 14000);
                }, 35000);
                 window.cashAnimation_10 = setTimeout(() => {
                    that.finalToClear = false;
                    that.clearToCash = true;
                     window.cashAnimation_11 = setTimeout(() => {
                        that.cashBox.flowRoll += 400000;
                        that.cashBox.allRoll += 650000;
                        that.cashBox.coin += 400000;
                        that.cashBox.foreignCoins += 500000;
                    },13000)
                    
                }, 50000);
                
                
            },
            theFormat(){
                
            }
        }
    }
</script>


<style scoped>
.cashToQuota .progress_text::after, .quotaToFinal .progress_text::after{
    content: "正在配款区...";
    display: inline-block;
    width: 200px;
    height: 50px;
    border: #4ba9ef;
}

.finalToDoor .progress_text::after{
    content: "正在入库...";
    display: inline-block;
    width: 200px;
    height: 50px;
    border: #4ba9ef;
}
.doorTofinal .progress_text::after{
    content: "正在入库...";
    display: inline-block;
    width: 200px;
    height: 50px;
    border: #4ba9ef;
}
.finalToClear .progress_text::after{
    content: "正在清分...";
    display: inline-block;
    width: 200px;
    height: 50px;
    border: #4ba9ef;
}
.numberFont{
    font-size: 45px;
}

.bootbox-item{
    display: inline-block;
    width: 49%;
    padding-left: 60px;
}
.numItem{
    display: inline-block;
    margin: 0 20px;
}
.bootbox-item .numItem{
    display: inline-block;
    /* margin: 0 20px; */
    width: auto;
}
.cashBoxTip .numItem{
    width: 24%;
   
    padding-left: 70px;
    margin-top: 30px;
    margin-left: 0;
    margin-right: 0;
}
.cashBoxTip .numItem .subItem-title{
    /* width: 20% */
    color: #ffaab4
}
.metalBox .numItem .subItem-title{
    /* width: 20%; */
    color: #ffff00;
}
.metalBox .numItem{
    width: 100%;
    /* text-align: center; */
    /* margin-left: 45px; */
    padding-left: 50px;
    margin-top: 30px;
}
.margin-left-100{
    margin-left: 100px;
}
.bootbox-item .item-title,.bootbox-item .subItem-title{
    color:#9849c2;
}
.bootbox-item .numItem:nth-child(1){
    margin-left: 10px;
}
.item-title{
    /* color: white; */
    font-size: 30px;
    padding: 25px 0px 0px 0px;
}
.subItem-title{
    font-size: 20px;
    margin: 0;
    height: 42px;
}
.car:before{
    content: "";
    position: relative;
    display: none;
    width: 200px;
    height: 50px;
    background-color: #4ba9ef;
    top: -70px;
    left: -30px;
    border-radius: 10px;
    font-size: 20px;
    font-weight: bold;
    line-height: 50px;
    text-align: center;
}
.car:after {
    content: "";
    display: none;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top: 20px solid #4ba9ef;
    position: absolute;
    top: -25px;
    left: 45px;
}

.finalToClear .car::before{
    content: "尾箱库 - 清分区";
    display: inline-block;
    opacity: 0;
    animation-name: finalToClear_car_info;
    animation-delay: 3s;
    animation-duration: 13000ms;
    animation-fill-mode: forwards;
    animation-timing-function:linear;

}
.finalToClear .car::after{
    content: "";
    display: inline-block;
    opacity: 0;
    animation-name: finalToClear_car_info;
    animation-delay: 3s;
    animation-duration: 13000ms;
    animation-fill-mode: forwards;
    animation-timing-function:linear;
}
@keyframes finalToClear_car_info {
    0%{
        opacity: 0;
    }
    3%{
        opacity: 0.25;
    }
    6%{
        opacity: 0.5;
    }
    9%{
        opacity: 0.75;
    }
    12%{
        opacity: 1;
    }
    70%{
        opacity: 1;
    }
    73%{
        opacity: 0.75;
    }
    76%{
        opacity: 0.5;
    }
    79%{
        opacity: 0.25;
    }
    81%{
        opacity: 0;
    }
    100%{
        display: inline-block;
        opacity: 0;
    }
} 
.clearToCash  .car::before{
    content: "清分区 - 现金库";
    display: inline-block;
    opacity: 0;
    animation-name: showDiv;
    animation-delay: 3s;
    animation-duration: 1000ms;
    animation-fill-mode: forwards;
    animation-timing-function:linear;

}
.clearToCash .car::after{
    content: "";
    display: inline-block;
    opacity: 0;
    animation-name: showDiv;
    animation-delay: 8s;
    animation-duration: 1000ms;
    animation-fill-mode: forwards;
    animation-timing-function:linear;
}

/* 一楼路线 */
.clearToCash .route_1{     
    display: inline-block;
    background-image: none;
    width: 1350px;
    height: 600px;
    background-repeat: no-repeat;
    position: absolute;
    top: 1100px;
    left: 1560px;
     /* background-image: url("../../../static/image/router2-9.png"); */
    animation:clearToCash_router_1;        
    /* 这里没有提供的图片 缺少从 电梯口 到 现金库 的路线*/
    animation-delay:7s;
    animation-duration: 5500ms;
    animation-iteration-count: 1;
    animation-timing-function:linear;
    
}
@keyframes clearToCash_router_1 {
     0%{
        background-image: url("../../../static/image/router2-10.png");
        opacity: 0.25;
    }
    16.6%{
        background-image: url("../../../static/image/router2-10.png");
        opacity: 0.25;
    }
    33.2%{
        background-image: url("../../../static/image/router2-10.png");
        opacity: 0.5;
    }
    49.8%{
        background-image: url("../../../static/image/router2-10.png");
        opacity: 1;
    }
    66.4%{
        background-image: url("../../../static/image/router2-9.png");
        opacity: 1;
    }
    76.4%{
        background-image: url("../../../static/image/router2-9.png");
        opacity: 0.75;
    }
    83.4%{
        background-image: url("../../../static/image/router2-9.png");
        opacity: 0.5;
    }
    100%{
        background-image: url("../../../static/image/router2-9.png");
        opacity: 0.25;
    }
}
/* 二楼路线 */
.clearToCash .route_6{
    display: inline-block;
    background-image: none;
    width: 1350px;
    height: 600px;
    background-repeat: no-repeat;
    position: absolute;
    top: 360px;
    left: 1415px;
    /* background-image: url("../../../static/image/route2-7.png"); */
    animation:clearToCash_router_2;
    animation-delay:2s;
    animation-duration: 5500ms;
    animation-iteration-count: 1;
    animation-timing-function:linear;
}
@keyframes clearToCash_router_2{
    0%{
        background-image: url("../../../static/image/route2-7.png");
        opacity: 0.25;
    }
    16.6%{
        background-image: url("../../../static/image/route2-7.png");
        opacity: 0.25;
    }
    33.2%{
        background-image: url("../../../static/image/route2-7.png");
        opacity: 0.5;
    }
    49.8%{
        background-image: url("../../../static/image/route2-7.png");
        opacity: 1;
    }
    66.4%{
        background-image: url("../../../static/image/route2-8.png");
        opacity: 1;
    }
    76.4%{
        background-image: url("../../../static/image/route2-8.png");
        opacity: 0.75;
    }
    83.4%{
        background-image: url("../../../static/image/route2-8.png");
        opacity: 0.5;
    }
    100%{
        background-image: url("../../../static/image/route2-8.png");
        opacity: 0.25;
    }
} 
/* 一楼路线 */
.finalToClear .route_4{     
    display: inline-block;
    background-image: none;
    width: 1350px;
    height: 600px;
    background-repeat: no-repeat;
    position: absolute;
    top: 1140px;
    left: 1330px;
    animation:finalToClear_router_1;
    animation-delay:2s;
    /* animation-delay:0s; */
    /* -webkit-animation-delay:0s;  */
    animation-duration: 5500ms;
    animation-iteration-count: 1;
    animation-timing-function:linear;
}
/* 二楼路线 */
.finalToClear .route_6{
    display: inline-block;
    background-image: none;
    width: 1350px;
    height: 600px;
    background-repeat: no-repeat;
    position: absolute;
    top: 360px;
    left: 1415px;
     /* background-image: url("../../../static/image/router-5.png"); */
    animation:finalToClear_router_2;
    /* animation-delay:0s; */
    animation-delay:8s;
    /* -webkit-animation-delay:0s;  */
    animation-duration: 5500ms;
    animation-iteration-count: 1;
    animation-timing-function:linear;

}
@keyframes finalToClear_router_2 {
     0%{
        background-image: url("../../../static/image/router-5.png");
        opacity: 0.25;
    }
    16.6%{
        background-image: url("../../../static/image/router-5.png");
        opacity: 0.25;
    }
    33.2%{
        background-image: url("../../../static/image/router-5.png");
        opacity: 0.5;
    }
    49.8%{
        background-image: url("../../../static/image/router-5.png");
        opacity: 1;
    }
    66.4%{
        background-image: url("../../../static/image/router-6.png");
        opacity: 1;
    }
    83.4%{
        background-image: url("../../../static/image/router-6.png");
        opacity: 0.5;
    }
    100%{
        background-image: url("../../../static/image/router-6.png");
        opacity: 0.25;
    }
}
@keyframes finalToClear_router_1 {
    0%{
        background-image: url("../../../static/image/route2-3.png");
        opacity: 0.25;
    }
    16.6%{
        background-image: url("../../../static/image/route2-3.png");
        opacity: 0.25;
    }
    33.2%{
        background-image: url("../../../static/image/route2-3.png");
        opacity: 0.5;
    }
    49.8%{
        background-image: url("../../../static/image/route2-3.png");
        opacity: 1;
    }
    66.4%{
        background-image: url("../../../static/image/route2-4.png");
        opacity: 1;
    }
    83.4%{
        background-image: url("../../../static/image/route2-4.png");
        opacity: 0.5;
    }
    100%{
        background-image: url("../../../static/image/route2-4.png");
        opacity: 0.25;
    }
}
.cashToQuota .car::before{
    content: "现金库 - 配款区";
    display: inline-block;
    animation-name: hiddenDiv;
    animation-delay: 8s;
    animation-duration: 1000ms;
    animation-fill-mode: forwards;
    animation-timing-function:linear;

}
.cashToQuota .car::after{
    content: "";
    display: inline-block;
    animation-name: hiddenDiv;
    animation-delay: 8s;
    animation-duration: 1000ms;
    animation-fill-mode: forwards;
    animation-timing-function:linear;
}

.quotaToFinal .car::before{
    content: "配款区 - 尾箱库";
    display: inline-block;
    opacity: 0;
    animation-name: easy_show_div;
    animation-delay: 1.5s;
    animation-duration: 9500ms;
    animation-fill-mode: forwards;
    animation-timing-function:linear;
}
.quotaToFinal .car::after{
    content: "";
    display: inline-block;
    opacity: 0;
    animation-name: easy_show_div;
    animation-delay: 1.5s;
    animation-duration: 9500ms;
    animation-fill-mode: forwards;
    animation-timing-function:linear;
}

@keyframes  easy_show_div{
    0%{
        opacity: 0;
    }
    2.5%{
        opacity: 0.25;
    }
    5%{
        opacity: 0.5;
    }
    7.5%{
        opacity: 0.75;
    }
    10%{
        opacity: 1;
    }
    80%{
        opacity: 1;
    }
    82.5%{
         opacity: 0.75;
    }
    85%{
        opacity: 0.5;
    }
    87.5%{
          opacity: 0.25;
    }
    90%{
          opacity: 0;
    }
    100%{
        opacity: 0;
    }
}
.finalToDoor .car::before{
    content: "正在出库";
    display: inline-block;
    opacity: 0;
    animation-name: finalToDoorShowDiv;
    animation-delay: 3s;
    animation-duration: 5000ms;
    animation-fill-mode: forwards;
    animation-timing-function:linear;
}
@keyframes finalToDoorShowDiv{
    0%{
        opacity: 0;
    }
    10%{
        opacity: 0.25;
    }
    20%{
        opacity: 0.5;
    }
    30%{
        opacity: 0.75;
    }
    40%{
        opacity: 1;
    }
    50%{
        opacity: 1;
    }

    60%{
        opacity: 1;
    }
    70%{
        opacity: 1;
    }
    80%{
        opacity: 0.75;
    }
    85%{
        opacity: 0.5;
    }
    90%{
        opacity: 0.25;
    }
    95%{
        opacity: 0;
    }
    100%{
        opacity: 0;
    }
}
.finalToDoor .car::after{
    content: "";
    display: inline-block;
    opacity: 0;
    animation-name: finalToDoorShowDiv;
    animation-delay: 3s;
    animation-duration: 5000ms;
    animation-fill-mode: forwards;
    animation-timing-function:linear;
}

.doorTofinal .car::before{
    content: "大门 - 尾箱库";
    display: inline-block;
    opacity: 1;
    animation-name: hiddenDiv;
    animation-delay: 2s;
    animation-duration: 1000ms;
    animation-fill-mode: forwards;
    animation-timing-function:linear;
}
.doorTofinal .car::after{
    content: "";
    display: inline-block;
    opacity: 1;
    animation-name: hiddenDiv;
    animation-delay: 2s;
    animation-duration: 1000ms;
    animation-fill-mode: forwards;
    animation-timing-function:linear;
}
@keyframes showDiv{
    0%{
        opacity: 0;
    }
    25%{
        opacity: 0.25;
    }
    50%{
        opacity: 0.5;
    }
    75%{
        opacity: 0.75;
    }
    100%{
        display: inline-block;
        opacity: 1;
    }
}
@keyframes hiddenDiv {
    0%{
        opacity: 1;
    }
    25%{
        opacity: 0.75;
    }
    50%{
        opacity: 0.5;
    }
    75%{
        opacity: 0.25;
    }
    100%{
        opacity: 0;
    }
}
.triangle_border_down{
    width:0;
    height:0;
    border-width:30px 30px 0;
    border-style:solid;
    border-color:#3330 transparent transparent;/*灰 透明 透明 */
    /* margin:40px auto; */
    position: absolute;;
}
.triangle_border_down span{
    display: block;
    width: 0;
    height: 0;
    border-width: 20px 20px 0;
    border-style: solid;
    border-color: #4ba9ef transparent transparent;
    position: absolute;
    top: -60px;
    left: 20px;

}
.loading_components{
    position: absolute;
    display: inline-block;
    top: 250px;
    left: 1765px;
    width: 135px;
    height: 20px;;
    opacity: 0;
    
}
.cashToQuota .loading_components{
    animation-name: load_in_1;
    animation-duration: 2000ms;
    animation-fill-mode: forwards;
    animation-delay: 9000ms;
    animation-timing-function:linear;
}
.finalToDoor .loading_components{
    top: 1086px;
    left: 1373px;
    opacity: 0;
    animation-name: finalToDoor_loading;
    animation-duration: 5000ms;
    animation-fill-mode: forwards;
    animation-delay: 0;
    animation-timing-function:linear;
}

.doorTofinal .loading_components{
    top: 1086px;
    left: 1373px;
    opacity: 0;
    animation-name: doorTofinal_loading;
    animation-delay: 3s;
    animation-duration: 5000ms;
    animation-fill-mode: forwards;
    animation-timing-function:linear;
}
.finalToClear .loading_components{
    top: 300px;
    left: 1417px;
    opacity: 0;
    animation-name: finalToClear_loading;
    animation-delay: 13s;
    animation-duration: 5000ms;
    animation-fill-mode: forwards;
    animation-timing-function:linear;
}
@keyframes finalToClear_loading {
    0%{
        opacity: 0;
    }
    2.5%{
        opacity: 0.25;
    }
    5%{
        opacity: 0.5;
    }
    7.5%{
        opacity: 0.75;
    }
    10%{
        opacity: 1;
    }
    50%{
        opacity: 1;
    }
    52.5%{
        opacity: 0.75;
    }
    55%{
        opacity: 0.5;
    }
    57.5%{
        opacity: 0.25;
    }
    60%{
        opacity: 0;
    }
    100%{
        opacity: 0;
    }
}
@keyframes doorTofinal_loading {
    0%{
        opacity: 0;
    }
    2.5%{
        opacity: 0.25;
    }
    5%{
        opacity: 0.5;
    }
    7.5%{
        opacity: 0.75;
    }
    10%{
        opacity: 1;
    }
    50%{
        opacity: 1;
    }
    52.5%{
        opacity: 0.75;
    }
    55%{
        opacity: 0.5;
    }
    57.5%{
        opacity: 0.25;
    }
    60%{
        opacity: 0;
    }
    100%{
        opacity: 0;
    }
}

@keyframes finalToDoor_loading {
    0%{
        opacity: 0;
    }
    2.5%{
        opacity: 0.25;
    }
    5%{
        opacity: 0.5;
    }
    7.5%{
        opacity: 0.75;
    }
    10%{
        opacity: 1;
    }
    50%{
        opacity: 1;
    }
    52.5%{
        opacity: 0.75;
    }
    55%{
        opacity: 0.5;
    }
    57.5%{
        opacity: 0.25;
    }
    60%{
        opacity: 0;
    }
    100%{
        opacity: 0;
    }
}
@keyframes load_in_1 {
    0%{
        opacity: 0;
    }
    2.5%{
        opacity: 0.25;
    }
    5%{
        opacity: 0.5;
    }
    7.5%{
        opacity: 0.75;
    }
    10%{
        opacity: 1;
    }
    100%{
        opacity: 1;
    }
}
.quotaToFinal .loading_components{
    position: absolute;
    display: inline-block;
    top: 250px;
    left: 1765px;
    width: 135px;
    height: 20px;
    opacity: 1;
    animation-name: load_out_1;
    animation-fill-mode: forwards;
    animation-delay: 1000ms;
    animation-duration: 10000ms;
    animation-timing-function:linear;
}

@keyframes load_out_1 {
    0%{
        opacity: 1;
    }
    2.5%{
        opacity: 0.75;
    }
    5%{
        opacity: 0.5;
    }
    7.5%{
        opacity: 0.25;
    }
    10%{
        opacity: 0;
    }
    100%{
        opacity: 0;
    }
}

.metalBox{
    display: inline-block;
    width: 425px;
    height: 270px;
    background-image: url("../../../static/image/metalBox.png");
    background-repeat: no-repeat;
    top: 1127px;
    position: absolute;
    left: 2795px;
}

.metalBox::after{
    content:"贵金属库";
    display: inline-block;
    position: absolute;
    width: 200px;
    height: 70px;
    line-height: 70px;
    bottom: 45px;
    left: 45px;
    color: #ffff00;
    font-size: 33px;
    font-weight: bold;
    letter-spacing: 8px;

}
.bootbox{
    display: inline-block;
    width: 765px;
    height: 270px;
    /* background-image: url(/static/img/bootBox.ea78adb.png); */
     background-image: url("../../../static/image/bootBox.png");
    background-repeat: no-repeat;
    top: 1085px;
    position: absolute;
    left: 277px;
    z-index: 2;
}
.bootbox::after{
    content:"尾箱库";
    display: inline-block;
    position: absolute;
    width: 200px;
    height: 70px;
    line-height: 70px;
    bottom: 5px;
    color: #af5adc;
    font-size: 33px;
    font-weight: bold;
    text-indent: 62px;
    letter-spacing: 8px;
    left: 0;
}
.cashBoxTip{
    display: inline-block;
    width: 1420px;
    height: 225px;
    background-image: url("../../../static/image/cashBoxTip.png");
    background-repeat: no-repeat;
    top: 684px;
    position: absolute;
    left: 1210px;
}
.cashBoxTip::after{
    content:"现金库";
    display: inline-block;
    position: absolute;
    width: 200px;
    height: 70px;
    line-height: 70px;
    bottom: 0px;
    left: 220px;
    color: #ffa9b4;
    font-size: 33px;
    font-weight: bold;
    text-indent: 62px;
    letter-spacing: 8px;
}

.bootBox-dark{
    display: inline-block;
     width: 860px;
    height: 395px;
    background-image: url("../../../static/image/bootBox_dark.png");
    background-repeat: no-repeat;
    top: 972px;
    position: absolute;
    left: 520px;
}

.quotaToFinal .bootBox-light{
    display: inline-block;
    width: 860px;
    height: 395px;
    background-image: url("../../../static/image/bootBox_light.png");
    background-repeat: no-repeat;
    top: 935px;
    position: absolute;
    left: 520px;
    opacity: 0;
    animation-name:bootBox-light;
    animation-fill-mode: forwards;
    animation-delay: 5000ms;
    animation-duration: 3000ms;
    animation-timing-function:linear;
}
@keyframes bootBox-light {
    0%{
        opacity: 0;
    }
    25%{
        opacity: 0.25;
    }
    50%{
        opacity: 0.5;
    }
    75%{
        opacity: 0.75;
    }
    100%{
        opacity: 1;
    }
}
.car{
    display: inline-block;
    background-image: url("../../../static/image/AGV.png");
    width: 135px;
    height: 120px;
    background-repeat: no-repeat;
    position: absolute;
    top: 1070px;
    left: 1568px;
    animation:cashToQuota_car 2s;
    animation-duration: 10000ms;
    animation-iteration-count: 1;
    animation-timing-function:linear;
    animation-fill-mode: forwards;
    /* animation-direction:alternate; */
}



.cashBg-dark{
    display: inline-block;
    width: 1265px;
    height: 120px;
    background-image: url("../../../static/image/cashBox_dark.png");
    background-repeat: no-repeat;
    top: 972px;
    position: absolute;
    left: 1430px;
    /* animation-delay: 500ms */

}

.cashBg-light{
    display: inline-block;
    width: 1265px;
    height: 120px;
    background-image: url("../../../static/image/cashBox_light.png");
    background-repeat: no-repeat;
    top: 933px;
    position: absolute;
    left: 1430px;
    opacity: 1;
    animation-fill-mode: forwards;
    animation-name:cashBg-light-easy;
    animation-delay: 3000ms;
    animation-duration: 1000ms;
    animation-timing-function:linear;
}
@keyframes cashBg-light-easy {
    0%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
    
}
@keyframes cashToQuota_car {
    0%{
        transform: translateX(0) translateY(0)
    }
    15%{
        transform: translateX(0) translateY(300px)
    }
    20%{
        transform: translateX(135px) translateY(340px)
    }
    35%{
        transform: translateX(800px) translateY(340px)
    }
    37%{
        transform: translateX(800px) translateY(340px)
    }
    45%{
        transform: translateX(800px) translateY(-600px)
    }
    50%{
        transform: translateX(800px) translateY(-600px)
    }
    70%{
        transform: translateX(0px) translateY(-600px)
    }
    80%{
        transform: translateX(0px) translateY(-780px)
    }
    90%{
        transform: translateX(200px) translateY(-780px)
    }
    100%{
        transform: translateX(200px) translateY(-780px)
    }
}
.cashToQuota .route_1{
    display: inline-block;
    width: 1350px;
    height: 600px;
    background-repeat: no-repeat;
    position: absolute;
    top: 1115px;
    left: 1560px;
    animation:route-1-Change;
    animation-duration: 3500ms;
    animation-timing-function:linear;
    animation-iteration-count: 1;
}
.cashToQuota .route_2{
    display: inline-block;
    background-image: none;
    width: 768px;
    height: 270px;
    background-repeat: no-repeat;
    position: absolute;
    top: 330px;
    left: 1560px;
    
    animation:route-2-Change;
    animation-delay:5s;
    -webkit-animation-delay:4.5s; /* Safari 和 Chrome */
    animation-duration: 4500ms;
    animation-iteration-count: 1;
    animation-timing-function:linear;
}
.quotaToFinal .car{
    animation:quotaToFinal_car;
    animation-duration: 10000ms;
    animation-iteration-count: 1;
    animation-timing-function:linear;
    animation-fill-mode: forwards;
}
.doorTofinal .car{
    animation:doorTofinal_car;
    animation-duration: 9000ms;
    animation-iteration-count: 1;
    animation-timing-function:linear;
    animation-fill-mode: forwards;
}
.finalToClear .car{
    transform: translateX(-200px) translateY(50px);
    animation:finalToClear_car;
    animation-duration: 11000ms;
    animation-delay: 3s;
    animation-iteration-count: 1;
    animation-timing-function:linear;
    animation-fill-mode: forwards;
}
.clearToCash .car{
    transform: translateX(-150px) translateY(-720px);
    animation:clearToCash_car;
    animation-duration: 11000ms;
    animation-delay: 3s;
    animation-iteration-count: 1;
    animation-timing-function:linear;
    animation-fill-mode: forwards;
}
@keyframes clearToCash_car {
    0%{
         transform: translateX(-150px) translateY(-720px);
    }
    8%{
        transform: translateX(0px) translateY(-720px)
    }
    14%{
        transform: translateX(0px) translateY(-600px)
    }
    30%{
        transform: translateX(800px) translateY(-600px)
    }
    35%{
        transform: translateX(800px) translateY(-600px)
    }
    45%{
        transform: translateX(800px) translateY(340px)
    }
    50%{
        transform: translateX(800px) translateY(340px)
    }
    68%{
        transform: translateX(135px) translateY(340px)
    }
    75%{
        transform: translateX(0px) translateY(300px)
    }
    85%{
        transform: translateX(0px) translateY(0px)
    }
    100%{
        transform: translateX(0px) translateY(0px)
    }
}

@keyframes finalToClear_car {
    0%{
        transform: translateX(-200px) translateY(50px);
    }
    10%{
        transform: translateX(0px) translateY(50px)
    }
    20%{
        transform: translateX(0px) translateY(300px)
    }
    25%{
        transform: translateX(135px) translateY(340px)
    }
    40%{
        transform: translateX(800px) translateY(340px)
    }
    45%{
        transform: translateX(800px) translateY(340px)
    }
    55%{
        transform: translateX(800px) translateY(-600px)
    }
    60%{
        transform: translateX(800px) translateY(-600px)
    }
    75%{
        transform: translateX(0px) translateY(-600px)
    }
    85%{
        transform: translateX(0px) translateY(-720px)
    }
    95%{
        transform: translateX(-150px) translateY(-720px)
    }
    100%{
        transform: translateX(-150px) translateY(-720px)
    }
}
@keyframes doorTofinal_car {
    0%{
        transform: translateX(0px) translateY(420px);
    }
    20%{
        transform: translateX(0px) translateY(50px);
    }
    40%{
        transform: translateX(-200px) translateY(50px);
    }
    100%{
        transform: translateX(-200px) translateY(50px);
    }
}

@keyframes escort_tailbox_in_car {
    0%{
        transform: translateX(0px) translateY(420px)
    }
    6%{
        transform: translateX(0px) translateY(50px)
    }
    12%{
        transform: translateX(-50px) translateY(50px)
    }
    18%{
        transform: translateX(-50px) translateY(50px)
    }
    25%{
        transform: translateX(0px) translateY(50px)
    }
    30%{
        transform: translateX(0px) translateY(300px)
    }
    34%{
        transform: translateX(135px) translateY(340px)
    }
    40%{
        transform: translateX(800px) translateY(340px)
    }
    42%{
        transform: translateX(800px) translateY(340px)
    }
    47%{
        transform: translateX(800px) translateY(-600px)
    }
    49%{
        transform: translateX(800px) translateY(-600px)
    }
    55%{
        transform: translateX(0px) translateY(-600px)
    }
    57%{
        transform: translateX(0px) translateY(-720px)
    }
    61%{
        transform: translateX(-150px) translateY(-720px)
    }

    63%{
        transform: translateX(-150px) translateY(-720px)
    }

    67%{
        transform: translateX(0px) translateY(-720px)
    }
    69%{
        transform: translateX(0px) translateY(-600px)
    }
    73%{
        transform: translateX(800px) translateY(-600px)
    }
    75%{
        transform: translateX(800px) translateY(-600px)
    }
    81%{
         transform: translateX(800px) translateY(340px)
    }
    83%{
         transform: translateX(800px) translateY(340px)
    }
    91%{
         transform: translateX(0px) translateY(340px)
    }
    99%{
        transform: translateX(0px) translateY(0px)
    }
    100%{
        transform: translateX(0px) translateY(0px)
    }
}
.doorTofinal .route_4{
    display: inline-block;
    background-image: none;
    width: 1350px;
    height: 600px;
    background-repeat: no-repeat;
    position: absolute;
    top: 1140px;
    left: 1340px;
    
    animation:escort-route-5-Change;
    animation-duration: 4000ms;
    animation-iteration-count: 1;
    animation-timing-function:linear;
}
.doorTofinal .bootBox-light{
    display: inline-block;
    width: 860px;
    height: 395px;
    background-image: url("../../../static/image/bootBox_light.png");
    background-repeat: no-repeat;
    top: 935px;
    position: absolute;
    left: 520px;
    opacity: 0;
    animation-name:bootBox-light;
    animation-fill-mode: forwards;
    /* animation-delay: 5000ms; */
    animation-duration: 2000ms;
    animation-timing-function:linear;
   

}
@keyframes escort-route-5-Change {
    0%{
        background-image: url("../../../static/image/route-escort-2.png");
        opacity: 0.25;
    }
    16.6%{
        background-image: url("../../../static/image/route-escort-2.png");
        opacity: 0.25;
    }
    33.2%{
        background-image: url("../../../static/image/route-escort-2.png");
        opacity: 0.5;
    }
    49.8%{
        background-image: url("../../../static/image/route-escort-2.png");
        opacity: 1;
    }
    66.4%{
        background-image: url("../../../static/image/route-escort-1.png");
        opacity: 1;
    }
    83.4%{
        background-image: url("../../../static/image/route-escort-1.png");
        opacity: 0.5;
    }
    100%{
        background-image: url("../../../static/image/route-escort-1.png");
        opacity: 0.25;
    }
}

@keyframes quotaToFinal_car {
    100%{
        transform: translateX(-200px) translateY(50px)
    }
    90%{
        transform: translateX(50px) translateY(50px)
    }
    85%{
        transform: translateX(50px) translateY(300px)
    }
    80%{
        transform: translateX(135px) translateY(340px)
    }
    65%{
        transform: translateX(800px) translateY(340px)
    }
    63%{
        transform: translateX(800px) translateY(340px)
    }
    55%{
        transform: translateX(800px) translateY(-600px)
    }
    50%{
        transform: translateX(800px) translateY(-600px)
    }
    30%{
        transform: translateX(0px) translateY(-600px)
    }
    20%{
        transform: translateX(0px) translateY(-780px)
    }
    10%{
        transform: translateX(200px) translateY(-780px)
    }
   
    0%{
        transform: translateX(200px) translateY(-780px)
    }
}
.quotaToFinal .route_2{
    display: inline-block;
    background-image: none;
    width: 768px;
    height: 270px;
    background-repeat: no-repeat;
    position: absolute;
    top: 330px;
    left: 1560px;
    
    animation:back-route-2-Change;
    /* animation-delay:0s; */
    /* -webkit-animation-delay:0s;  */
    animation-duration: 5000ms;
    animation-iteration-count: 1;
    animation-timing-function:linear;
}
.quotaToFinal .route_3{
    display: inline-block;
    background-image: none;
    width: 768px;
    height: 270px;
    background-repeat: no-repeat;
    position: absolute;
    top: 330px;
    left: 1560px;
    
    animation:back-route-3-Change;
    /* animation-delay:0s; */
    /* -webkit-animation-delay:0s;  */
    animation-duration: 5000ms;
    animation-iteration-count: 1;
    animation-timing-function:linear;
}

.quotaToFinal .route_4{
    display: inline-block;
    background-image: none;
    width: 1350px;
    height: 600px;
    background-repeat: no-repeat;
    position: absolute;
    top: 1140px;
    left: 1370px;
    animation:back-route-4-Change;
    animation-delay:6s;
    /* animation-delay:0s; */
    /* -webkit-animation-delay:0s;  */
    animation-duration: 5000ms;
    animation-iteration-count: 1;
    animation-timing-function:linear;
}
.finalToDoor .car{
    transform: translateX(-200px) translateY(50px);
    animation:finalToDoor_car;
    animation-delay: 2s;
    animation-duration: 4000ms;
    animation-iteration-count: 1;
    animation-timing-function:linear;
    animation-fill-mode: forwards;
}
@keyframes finalToDoor_car {
    0%{
        transform: translateX(-200px) translateY(50px)
    }
    30%{
        transform: translateX(0px) translateY(50px)
    }
    100%{
        transform: translateX(0px) translateY(420px)
    }
}
.finalToDoor .route_5{
    display: inline-block;
    background-image: none;
    width: 1350px;
    height: 600px;
    background-repeat: no-repeat;
    position: absolute;
    top: 1140px;
    left: 1340px;
    
    animation:out-route-5-Change;
    animation-duration: 6000ms;
    animation-iteration-count: 1;
    animation-timing-function:linear;

}

@keyframes out-route-5-Change {
    0%{
        background-image: url("../../../static/image/route9.png");
        opacity: 0.25;
    }
    16.6%{
        background-image: url("../../../static/image/route9.png");
        opacity: 0.25;
    }
    33.2%{
        background-image: url("../../../static/image/route9.png");
        opacity: 0.5;
    }
    49.8%{
        background-image: url("../../../static/image/route9.png");
        opacity: 1;
    }
    66.4%{
        background-image: url("../../../static/image/route10.png");
        opacity: 1;
    }
    83.4%{
        background-image: url("../../../static/image/route10.png");
        opacity: 0.5;
    }
    100%{
        background-image: url("../../../static/image/route10.png");
        opacity: 0.25;
    }
}
@keyframes back-route-4-Change {
    0%{
        background-image: url("../../../static/image/route7.png");
        opacity: 0.25;
    }
    16.6%{
        background-image: url("../../../static/image/route7.png");
        opacity: 0.25;
    }
    33.2%{
        background-image: url("../../../static/image/route7.png");
        opacity: 0.5;
    }
    49.8%{
        background-image: url("../../../static/image/route7.png");
        opacity: 1;
    }
    66.4%{
        background-image: url("../../../static/image/route8.png");
        opacity: 1;
    }
    83.4%{
        background-image: url("../../../static/image/route8.png");
        opacity: 0.5;
    }
    100%{
        background-image: url("../../../static/image/route8.png");
        opacity: 0.25;
    }
}
@keyframes back-route-3-Change {
    0%{
        background-image: url("../../../static/image/route5.png");
        opacity: 0.25;
    }
    16.6%{
        background-image: url("../../../static/image/route5.png");
        opacity: 0.25;
    }
    33.2%{
        background-image: url("../../../static/image/route5.png");
        opacity: 0.5;
    }
    49.8%{
        background-image: url("../../../static/image/route5.png");
        opacity: 1;
    }
    66.4%{
        background-image: url("../../../static/image/route6.png");
        opacity: 1;
    }
    83.4%{
        background-image: url("../../../static/image/route6.png");
        opacity: 0.5;
    }
    100%{
        background-image: url("../../../static/image/route6.png");
        opacity: 0.25;
    }
}
@keyframes back-route-2-Change {
    0%{
        background-image: url("../../../static/image/route5.png");
        opacity: 0.25;
    }
    16.6%{
        background-image: url("../../../static/image/route5.png");
        opacity: 0.25;
    }
    33.2%{
        background-image: url("../../../static/image/route5.png");
        opacity: 0.5;
    }
    49.8%{
        background-image: url("../../../static/image/route5.png");
        opacity: 1;
    }
    66.4%{
        background-image: url("../../../static/image/route6.png");
        opacity: 1;
    }
    83.4%{
        background-image: url("../../../static/image/route6.png");
        opacity: 0.5;
    }
    100%{
        background-image: url("../../../static/image/route6.png");
        opacity: 0.25;
    }
}  

@keyframes route-1-Change {
    0%{
        background-image: url("../../../static/image/route1.png");
       
        opacity: 0.25;
    }
    16.6%{
        background-image: url("../../../static/image/route1.png");
        
        opacity: 0.25;
    }
    33.2%{
        background-image: url("../../../static/image/route1.png");
       
        opacity: 0.5;
    }
    49.8%{
        background-image: url("../../../static/image/route1.png");
        opacity: 1;
    }
    66.4%{
        background-image: url("../../../static/image/route2.png");
        opacity: 1;
    }
    83.4%{
        background-image: url("../../../static/image/route2.png");
        opacity: 0.5;
    }
    100%{
        background-image: url("../../../static/image/route2.png");
        opacity: 0.25;
    }
}  
@keyframes route-2-Change {
    0%{
        background-image: url("../../../static/image/route3.png");
        opacity: 0.25;
    }
    16.6%{
        background-image: url("../../../static/image/route3.png");
        opacity: 0.25;
    }
    33.2%{
        background-image: url("../../../static/image/route3.png");
        opacity: 0.5;
    }
    49.8%{
        background-image: url("../../../static/image/route3.png");
        opacity: 1;
    }
    66.4%{
        background-image: url("../../../static/image/route4.png");
        opacity: 1;
    }
    83.4%{
        background-image: url("../../../static/image/route4.png");
        opacity: 0.5;
    }
    100%{
        background-image: url("../../../static/image/route4.png");
        opacity: 0.25;
    }
}  
.centerBg{
    height: 100%;
    width: 100%;
}
.control_tab{
    color: #44a6f1;
    position: absolute;
    width: 100%;
    text-align: center;
}
.control_tab span.tab:nth-child(1),.control_tab span.tab:nth-child(2){
    height: 110px;
    display: inline-block;
    line-height: 110px;
    width: 460px;
    font-size: 40px;
    margin: 40px 50px;
    background-image: url("../../../static/image/third/tab2.png");
    background-repeat:no-repeat;
    text-align: center;
}
.control_tab span.tab.selected:nth-child(1),.control_tab span.selected.tab:nth-child(2){
     background-image: url("../../../static/image/third/tab1.png");
}
/* .control_tab span.tab:nth-child(2){
    height: 110px;
    display: inline-block;
    line-height: 110px;
    width: 450px;
    font-size: 40px;
    margin: 40px 50px;
    background-image: url("../../../static/image/third/tab2.png");
    background-repeat:no-repeat;
    text-align: center;
} */
.control_content{
    height: 100%;
    background-image: url("../../../static/image/page4_level1.png" );
    background-repeat:no-repeat;
    background-position: 245px 190px;

}
</style>
