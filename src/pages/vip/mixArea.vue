<template>
    <div>
        <div class="totalCount" id="totalCount">
            <div class="offlineClick">
                <p class="title" v-text="offline.title"></p>
                <div class="count">
                    <new-num-free-style  :height="offline.height" :from="0" :to="offline.count"></new-num-free-style>
                </div>
                <p class="detail">
                    <span>转化量：{{offline.conversion}}</span>
                    <span>转化占比：{{offline.percent}}%</span>
                </p>
            </div>
            <div class="onlineClick">
                <p class="title" v-text="online.title"></p>
                <div class="count">
                    <new-num-free-style  :height="online.height" :from="0" :to="online.count"></new-num-free-style>
                </div>
                <p class="detail">
                    <span>转化量：{{online.conversion}}</span>
                    <span>转化占比：{{online.percent}}%</span>
                </p>
            </div>

        </div>
        <div class="simplePie-title-row">
            <p class="timeLineTitle"></p>
            <p class="title"><span>收视率</span></p>
            <p class="title">
                <span>青年</span>
                <span>（男性/女性）</span>
            </p>
            <p class="title">
                <span>中年</span>
                <span>（男性/女性）</span>
            </p>
            <p class="title">
                <span>老年</span>
                <span>（男性/女性）</span>
            </p>
        </div>
        <div class="seamless-warp">
            <ul class="ulContent" id="ulContent">
                <li class="timeLine"></li>
                <li class="simplePie-row" v-for="(item, key) in dataList" :key="key">
                    <div class="simplePie-title">{{item.label}}</div>
                    <div class="simplePieItem audienceRating">
                        <circlePie :height="100" :width="100" :id="'simple_'+key" :percentage='item.audienceRating'></circlePie>
                    </div>
                    <div class="simplePieItem youngAge">
                        <new-num-free-style  class="numItem" :height="36" :from="item.young.manFrom" :to="item.young.manTo"></new-num-free-style>
                        <span class="splitLine"></span>
                        <new-num-free-style  class="numItem" :height="36" :from="item.young.womenFrom" :to="item.young.womenTo"></new-num-free-style>
                    </div>
                    <div class="simplePieItem middleAge">
                        <new-num-free-style  class="numItem" :height="36" :from="item.middleAge.manFrom" :to="item.middleAge.manTo"></new-num-free-style>
                        <span class="splitLine"></span>
                        <new-num-free-style  class="numItem" :height="36" :from="item.middleAge.womenFrom" :to="item.middleAge.womenTo"></new-num-free-style>
                    </div>
                    <div class="simplePieItem oldAge">
                        <new-num-free-style  class="numItem" :height="36" :from="item.oldAge.manFrom" :to="item.oldAge.manTo"></new-num-free-style>
                        <span class="splitLine"></span>
                        <new-num-free-style  class="numItem" :height="36" :from="item.oldAge.womenFrom" :to="item.oldAge.womenTo"></new-num-free-style>
                    </div>
                </li>
            </ul>
        </div>
            
        
    </div>
</template>
<script>
    import datajson from './dataJson'
    import newNumFreeStyle from '@/components/newNumFreeStyle'
    import circlePie from './circlePieForMixArea'
    export default {
        components:{
            newNumFreeStyle,
            circlePie
        },
        mounted(){
            this.seamless();
        },
        data(){
            return{
                total:0,
                offline:{
                    title:"线下营销内容点击量",
                    count:178,
                    height:60,
                    conversion:33,
                    percent:56
                },
                online:{
                    title:"线上营销内容点击量",
                    count:100,
                    height:60,
                    conversion:30,
                    percent:17
                },
                optionSingleHeightTime:{
                    direction: 0,
                    step:1,
                    singleHeight: 115,
                    waitTime: 2500
                },
                startList:[],
                dataList:datajson.mixDataList
            }
        },
        methods:{
            seamless:function(){
                $("#ulContent").stop().delay(2000).animate({top:"-=115px"},2000,()=>{
                        let ulTop = $("#ulContent").position().top
                        if(ulTop <-400){
                            $("#ulContent").css("top",0)
                        }
                        setTimeout(this.seamless,2000);
                    }     
                ) 

            }
        }

    }
</script>
<style scoped>
.totalCount{
    height:250px;
    width:100%;
    padding-left:70px;
}
.totalCount .offlineClick,.totalCount .onlineClick{
    float:left;
    margin-left:70px;
}
.totalCount .title{
    color:#3bc5ff;
    font-size: 22px;
    padding-left:18px;
}
.totalCount .count{
    width:100%;
    padding-left:58px;
    height:80px;
}
.totalCount .detail{
    margin-top:10px;
    color:#FFF;
}
.timeLine{
    position:absolute;
    height:930px;
    width:2px;
    background-color:#2881db;
    top:-44px;
    left:242px;
}

.simplePie .simplePie-title{
    position: relative;
    margin-left: 0;
    margin-top: 12px;
}
    #pieSimple,.pieSimple{
        width:80px;
        height: 80px;
    }
    .simplePie {
        display: inline-block;
        width: 235px;
        position: relative;
    }
    .simplePie-row{
        position: relative;
        padding-left: 80px;
        padding-top:15px;
        overflow:hidden;
    }
    .simplePie-title-row{
        color:#3bc5ff;
    }
    .simplePie-title-row .timeLineTitle{
        padding:0 117px;
        display: inline-block;
    }
    .simplePie-title-row .title{
        padding-left:51px;
        display: inline-block;
    }
    .simplePie-title-row .title span{
        text-align: center;
        display:block;
    }
    .simplePieItem{
        float:left;
        min-width:130px;
        height:80px;
        overflow:hidden;
        margin:10px 0 10px 0 ;
    }
    .seamless-warp {
        height: 460px;
        position:relative;
        overflow: hidden;
    }
    .ulContent{
        position:absolute;
    }

    .simplePie-title{
        color: #6499c3;
        min-height: 40px;
        line-height:46px;
        font-size: 20px;
        width: 100px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        float:left;
        padding-right:50px;
        box-sizing:content-box;
        background:url('../../static/image/dots.png') 124% center  no-repeat; 
    }
    .audienceRating{
        width:100px;
        height:100px;
        margin-top:-14px;
    }
    .simplePie h2{
        color:#6499c3;
        margin-bottom: 0px;
    }
    .numCol,.perCol{
        position: absolute;
        width: 110px;
        text-align: left;
        right: 35px;
        color: #6499c3;
        font-size: 18px;
    }
    .numCol{
        top: 54px;
    }
    .perCol{
        top: 85px;
    }
    .totalNum{
        color: rgb(255, 255, 255);
        position: absolute;
        margin-left: -110px;
        margin-top: 60px;
        font-size: 50px;
        min-width: 100px;
        text-align: center;
    }
    .simplePieItem .numItem,.simplePieItem .splitLine{
        display:inline-block;
        float:left;
    }
    .simplePieItem .numItem{
        width:40px;
        height:36px;
    }
    .simplePieItem .splitLine{
        height:36px;
        width:2px;
        margin:4px 10px;
        background-color:#404d79;
    }

    .middleAge,.oldAge{
        margin-left:60px;
    }

</style>
