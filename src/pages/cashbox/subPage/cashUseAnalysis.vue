<template>
    <div>
         <div id="cashUseAnalysis"></div>
    </div>
</template>
<script>
import dataJson from './dataJson.json'
    export default {
        components:{
            // 'other-component':otherComponent
        },
        mounted() {
            this.drawCashUseAnalysis();
        },
        data(){
            return{
                labelColor:'#6499c3',
                barLineColor:"#2d8de1",
                bar_color_blue :"#00dafe",
                bar_color_yellow :"#ffbc01",
                bar_color_red :"#ff6f7c"
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
                        left:90,
                        textStyle:{
                            color:that.labelColor,
                            fontSize:24,
                            fontWeight:"normal"
                        }
                    },
                    grid:{
                         y:100,
                        x:130
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
    #cashUseAnalysis{
        width: 950px;
        height: 400px;
        margin-left: 0px;
    }
</style>
