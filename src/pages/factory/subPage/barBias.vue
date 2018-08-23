<template>
    <div>
         <div ref="barBias" id="barBias"></div>
    </div>
</template>
<script>
import dataJson from './dataJson.json'
    export default {
        mounted() {
            this.drawBarBias();
        },
        data(){
            return{
                labelColor:'#6499c3',
                barLineColor:"#2d8de1",
                barBiasColor:"#00ffff",

                lineColorGreen:"#00ff00",
                lineColorBlue:"#94fbfd",

                lineColorYellow:"#fdc200",
                pieColorYellow:"#ffff00",
                pieColorBlue:"#3b9fed",
                pieColorOrange:"#ff8000",

                lineGradualBlue_1:"#50b5f7",
                lineGradualBlue_2:"#66d3f9",
                lineGradualBlue_3:"#95fbfd",
            }
        },
        methods:{
             drawBarBias(){
                let that = this;
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(this.$refs.barBias)
                // 绘制图表
                myChart.setOption({
                    title: { 
                        text: '近30天北京市异常报警总览',
                        textStyle:{
                            color:that.labelColor
                        }
                    },
                   
                    xAxis: {
                        data:dataJson.alarmOverview.xAxis,
                        axisTick: {show: false},
                        axisLine:{
                            lineStyle:{
                                color:that.barLineColor
                            },
                        },
                        axisLabel: {
                            interval: 0,
                            rotate: 30,
                            textStyle: {
                                color: that.labelColor
                            }
                        }
                    },
                    yAxis: {
                        axisTick: {show: false},
                        splitLine:{
                            lineStyle:{
                                type:"dotted",
                                color:that.barLineColor
                            }
                        },
                         axisLine:{
                            lineStyle:{
                                color:that.barLineColor
                            },
                        },
                        axisLabel: {
                            borderColor:that.barLineColor,
                            textStyle: {
                                
                                color: that.labelColor
                            }
                        }
                    },
                    series: [{
                        name: '销量',
                        type: 'bar',
                        barWidth:"40%",
                        label:{
                            normal:{
                                show:true,
                                position:"top"
                            }
                        },
                        itemStyle:{
                            normal:{
                                color:that.barBiasColor
                            }
                        },
                        data:dataJson.alarmOverview.yAxis ,
                       
                    }]
                });
            }
        }


    }
</script>
<style scoped>
#barBias{
    width:1000px;
    height: 600px;
    margin-left: 200px;
}

</style>
