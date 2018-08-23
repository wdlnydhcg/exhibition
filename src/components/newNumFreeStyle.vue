/*
 * @Author: dingbaishun
 * @ 数字滚动插件
 * @Date: 2018-08-01 14:23:55
 * @Last Modified by: dingbaishun
 * @Last Modified time: 2018-08-06 18:41:37
 */

<template>
    <div>
        <div class="fontClass" :style="{fontSize:height+'px'}" >
            <number ref="number1" class="numberFont" :from="from" :to="to" :format="theFormat" :duration="2"  :delay="0" easing="Power1.easeOut">
            </number>
            <p style="position:absolute;width:100%;height:100%; top:0;overflow:visible" >
                <span v-for="(result,index) in resultArr" :key="index" style="position:absolute;" :style="{right:height*2.3*(index+1)+'px'}">,</span>
            </p>
            <!-- <number animationPaused ref="number2" :to="10000" :duration="5" easing="Back.easeIn" @complete="completed" @click="playAnimation"/> -->
        </div>
        
    </div>
</template>
<script>
export default {
    props:{
        
        height:{
            type: Number,
            default:30 
        },
        from: {
            type: Number,
            default: 10000
        },
        to: {
            type: Number,
            default: 123450
        }
    },
    data(){
        return {
            fontSize:60,
            resultArr:[]
        }
    },
    mounted(){
        
    },
    // Sets the format of the number
    methods: {
        theFormat(number) {
            let formatter = this.formatterNumber(number.toFixed(0)+"");
            return  formatter;
        },
        completed() {
            console.log('Animation ends!');
        },
        playAnimation() {
            this.$refs.number2.play()
        },
        //切割字符串
        formatterNumber(str){
            let i =0;
            let length = (str+"").length
            let resultArr =[];
            do{
                let len = length-i-3<=0?0:length-i-3;
                let sliceStr = str.substring(len,length-i);
                resultArr.unshift(sliceStr);
                i+=3;
            }while(i<length)
            if(this.resultArr.length+1 != resultArr.length){
                let result = JSON.parse(JSON.stringify(resultArr));
                result.pop();
                this.resultArr = result;
            }
            return  resultArr.join(",");
            }
        }
}
</script>
<style lang="less">
.fontClass{
    position:absolute;
    color: white;    
    font-size: 30px;
}
.numberFont{
    font-family: NUMBERLED;
}


</style>
