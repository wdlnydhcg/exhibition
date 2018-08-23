<template>
    <div>
         <div id="barChangeAnalysis"></div>
    </div>
</template>
<script>
import dataJson from './dataJson.json'
    export default {
        components:{
            // 'other-component':otherComponent
        },
        mounted() {
            this.drawBarChangeAnalysis();
        },
        data(){
            return{
                labelColor:'#6499c3',
                barLineColor:"#2d8de1",
                // barChangeAnalysisColor:"#00ffff",
                bar_color_blue :"#00dafe",
                bar_color_yellow :"#ffbc01",
                bar_color_red :"#ff6f7c",

            }
        },
        methods:{
             drawBarChangeAnalysis(){
                let that = this;
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('barChangeAnalysis'))
                // 绘制图表
                myChart.setOption({
                    title: { 
                        text: '库存变化趋势分析',
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
                        itemWidth:17,
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
                            // rotate: 30,
                            // interval:3,
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
                            padding  :[0,60,0,20],
                            color:that.labelColor
                        },
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
                            fontSize:16,
                            textStyle: {
                                
                                color: that.labelColor
                            }
                        }
                    
                    },
                    series: [{
                        name: '上门收款',
                        type: 'bar',
                        stack: '总量',
                         barWidth:20,
                        // symbol:"circle",
                        // symbolSize: 8,
                        // symbol:"none",
                        itemStyle:{
                            normal:{
                                color:that.bar_color_red
                            }
                        },
                        data:[25,15,32,14,31,32,32] ,
                       
                    },
                    {
                        name: 'ATM回收',
                        type: 'bar',
                        stack: '总量',
                         barWidth:20,
                        // symbol:"circle",
                        // symbolSize: 8,
                        // symbol:"none",
                        itemStyle:{
                            normal:{
                                color:that.bar_color_yellow
                            }
                        },
                        data:[25,15,32,13,23,32,4] ,
                       
                    },{
                        name: '网点上缴',
                        type: 'bar',
                        stack: '总量',
                        barWidth:20,
                        // symbol:"circle",
                        // symbolSize: 8,
                        // symbol:"none",
                        itemStyle:{
                            normal:{
                                color:that.bar_color_blue
                            }
                        },
                        data:[17,17,32,17,23,13,34] 
                       
                    }]
                });
            }
        }
    }
</script>
<style scoped>
    #barChangeAnalysis{
           width: 950px;
    height: 400px;
    margin-left: 0px;
    }
</style>
