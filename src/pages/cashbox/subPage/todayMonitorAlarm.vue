<template>
    <div>
       
        <div class="alarmMgrContent">
             <!-- <div class="lineGradient"></div> -->
            <div class="ulHead">
                <span class="alarmDateCol">时间</span>
                <span class="alarmStateCol">地点</span>
                <span class="alarmTypeCol">信息登记</span>
                <span class="alarmLevelCol">事项</span>
            </div>
            <vue-seamless-scroll :data="alarmMgr" :class-option="optionSingleHeightTime" class="seamless-warp">
               
                <ul class="ulContent">
                    <template  v-for="alarmRow in alarmMgr">
                        <li class="rowItem" :class="{'danger':alarmRow.type == '2' }">
                            <span class="alarmDateCol">{{alarmRow.date}}</span>
                            <span class="alarmStateCol">
                                <span v-if="alarmRow.state == '1'">现金库</span>
                                <span v-if="alarmRow.state == '2'">尾箱库</span>
                                <span v-if="alarmRow.state == '3'">贵金属库</span>
                                <span v-if="alarmRow.state == '4'">配款区</span>
                                <span v-if="alarmRow.state == '5'">清分区</span>
                            </span>
                            <span class="alarmTypeCol">
                                <span v-if="alarmRow.type == '1'">一般</span>
                                <span v-if="alarmRow.type == '2'">危险</span>
                                <!-- {{alarmRow.type}} -->
                            </span>
                            <span class="alarmLevelCol">
                                <span v-if="alarmRow.level == '1'">外部人员到访</span>
                                <span v-if="alarmRow.level == '2'">违规单人进入库区</span>
                                <!-- <span v-if="alarmRow.level == '3'">3级报警(低)</span> -->
                            </span>
                        </li>
                    </template>
                </ul>
            </vue-seamless-scroll>
        </div>
    </div>
</template>
<script>
import dataJson from './dataJson.json'
    export default {
        data(){
            return{
                alarmMgr:dataJson.alarmMgr,
                colorBlue:"#3b9fed",
                optionSingleHeightTime:{
                    direction: 0,
                    step:1,
                    singleHeight: 58,
                    waitTime: 2500
                }
            }
        }
    }
</script>
<style scoped>
    /* .lineGradient{
        position: absolute;
        display: inline-block;
        width: 100%;
        height: 50px;
        background: -webkit-gradient(linear, left bottom, left top, from(#00abeb17), to(#fff0));
        bottom: 60px;
    } */
    .seamless-warp {
        height: 705px;
        overflow: hidden;
        
        /* margin-top: 20px; */
        /* background: -webkit-gradient(linear, 0, 0, 0, bottom, from(#000000), to(transparent));
        background: -webkit-linear-gradient(#000000, transparent);
        background: -moz-linear-gradient(#000000, transparent);
        background: -ms-linear-gradient(#000000, transparent);
        background: -o-linear-gradient(#000000, transparent);
        background: linear-gradient(#000000, transparent);
        -pie-background: linear-gradient(#000000, transparent); */
    }
    .alarmMgrContent::after{
        content: "";
        width: 757px;
        height: 237px;
        display: inline-block;
        position: absolute;
        bottom: 75px;
        background: url(../../../static/image/third/tableMask.png);
    }
    .danger span{
        color:#d7d83e;
    }
    .alarmTable{
        color: #3b9fed;
        text-align: center;

        /* margin-left: 217px; */
        /* background: #2e335157; */
        font-size: 18px;
        border-collapse: collapse;
    }
    .alarmDateCol,.alarmStateCol,.alarmTypeCol,.alarmLevelCol{
        display: inline-block;
        text-align: center;
        color: #3b9fed;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap

    }
    .alarmDateCol{
        width: 270px;
    }

    .alarmStateCol{
        width: 140px;
    }
    .alarmTypeCol{
        width: 135px;
    }
    .alarmLevelCol{
        width: 217px;
    }
    .ulHead{
        height: 47px;
        line-height: 47px;
        color: #409be1;
        font-weight: bold;
        margin-bottom: 20px;
        /* border-bottom: 1px solid  #6499c3; */
    }
    .ulContent{
        padding: 0;
        margin: 0;
    }
    .ulContent .rowItem{
        margin: 0;
    
    }
    .ulContent .rowItem{
        height: 48px;
        line-height: 48px;
        color: #6499c3;
        margin: 0px 0px 10px 0;

    }
    li{
        list-style:none;
    }
    .backGrey{
        background: #6b626229;
        margin-left: 245px;
        padding: 5px 5px 15px 27px;
        margin-right: 28px;
    }
    .alarmMgrContent{
        /* background: #6b626229; */
        background-image: url("../../../static/image/biasTable.png");
        margin-left: 110px;
        padding: 0px 5px 15px 170px;
        margin-right: 28px;
        font-size:20px;
        background-repeat: no-repeat;
    }
    .ulHead .alarmDateCol{
        text-indent: 15px;
    }
</style>
