<template>
    <div>
        <div class="alarmMgrContent">
            <div class="ulHead">
                <span class="alarmDateCol">时间</span>
                <span class="alarmStateCol">报警点</span>
                <span class="alarmTypeCol">报警类型</span>
                <span class="alarmLevelCol">报警等级</span>
            </div>
            <vue-seamless-scroll :data="alarmMgr" :class-option="optionSingleHeightTime" class="seamless-warp">
                <ul class="ulContent">
                    <li class="rowItem" v-for="alarmRow in alarmMgr">
                        <span class="alarmDateCol">{{alarmRow.date}}</span>
                        <span class="alarmStateCol">{{alarmRow.state}}</span>
                        <span class="alarmTypeCol">
                            <span v-if="alarmRow.type == '1'">人数异常</span>
                            <span v-if="alarmRow.type == '2'">库存异常</span>
                            <span v-if="alarmRow.type == '3'">押品异常</span>
                            <!-- {{alarmRow.type}} -->
                        </span>
                        <span class="alarmLevelCol">
                            <span v-if="alarmRow.level == '1'">1级报警(高)</span>
                            <span v-if="alarmRow.level == '2'">2级报警(中)</span>
                            <span v-if="alarmRow.level == '3'">3级报警(低)</span>
                        </span>
                    </li>
                </ul>
            </vue-seamless-scroll>
        </div>
       
    </div>
</template>
<script>
import dataJson from './dataJson.json'
    export default {
        components:{
            
        },
        data(){
            return{
                alarmMgr:dataJson.alarmMgr,
                colorBlue:"#3b9fed",
                optionSingleHeightTime:{
                    direction: 0,
                    step:0.5,
                    singleHeight: 35,
                    waitTime: 2500
                    
                }
            }
        }
    }
</script>
<style scoped>

.seamless-warp {
        height: 320px;
        overflow: hidden;
    }
.alarmTable{
    color: #3b9fed;
    text-align: center;
    font-size: 18px;
    border-collapse: collapse;
}
.alarmDateCol,.alarmStateCol,.alarmTypeCol,.alarmLevelCol{
    display: inline-block;
    text-align: center;
    color: #3b9fed;
}
.alarmDateCol{
    text-overflow: hidden;
    /* width: 185px; */
        width: 23%;

}

.alarmStateCol{
    /* width: 335px; */
    width: 41%;
}
.alarmTypeCol{
    /* width: 100px; */
        width: 12.5%;

}
.alarmLevelCol{
    /* width: 115px; */
    width: 14.3%;
    
}
.alarmDateCol,.alarmStateCol,.alarmTypeCol,.alarmLevelCol{
    display: inline-block;
    text-align: center;
    color: #3b9fed;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.ulHead{
    height: 42px;
    line-height: 42px;
    color: #6499c3;
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
    height: 35px;
    line-height: 35px;
    color: #6499c3;
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
    background-image: url("../../../static/image/alarmMgBg.png");
    background-repeat: no-repeat;
  /* background: #6b626229; */
    margin-left: 245px;
    /* padding: 5px 5px 15px 27px; */
    margin-right: 28px;
}
</style>
