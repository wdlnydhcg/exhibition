<template>
    <div>
          <div ref="lineBias" id="lineBias"></div>
    </div>
</template>
<script>
    import dataJson from './dataJson'
    export default {
        components:{
            // 'other-component':otherComponent
        },
        mounted() {
            this.drawLineBias();
        },
        methods:{
            drawLineBias(){
                console.log("this is line bias");
                
                let that = this;
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(this.$refs.lineBias)
                // 绘制图表
                myChart.setOption({
                    title: { 
                        text: '人车流量变动统计',
                        left:50,
                        textStyle:{
                            color:that.labelColor,
                            fontSize:24,
                            fontWeight:"normal"
                            
                        }
                    },
                    grid:{
                        top:100
                    },
                    
                    legend: {
                        itemGap:30,
                        itemWidth:50,
                        data:['人员流量','车流量'],
                        right:90,
                        textStyle:{
                            color:that.labelColor,
                            fontSize:16
                        }
                      
                    },
                    xAxis: {
                        data:dataJson.peopleFlowOverview.xAxis,
                        axisTick: {show: false},
                        axisLine:{
                            lineStyle:{
                                color:that.barLineColor
                            },
                        },
                        splitLine:{
                            interval:100,
                        },
                         
                        axisLabel: {
                            interval: 0,
                            rotate: 30,
                            fontSize:16,
                            textStyle: {
                                color: that.labelColor
                            }
                        }
                    },
                    yAxis: [{
                        //  splitNumber:3,
                        boundaryGap :true,
                        axisTick: {show: false},
                        type:"value",
                        name:"(人次)",
                        
                        nameTextStyle:{
                            fontSize :16,
                            padding  :[0,60,10,0],
                            color:that.labelColor
                        },
                        splitLine:{
                            interval : 100,
                            lineStyle:{
                                type:"dotted",
                                color:that.barLineColor
                            }
                        },
                        axisLine:{
                            lineStyle:{
                                // color:that.barLineColor
                                color:that.barBiasColor
                            },
                        },
                        axisLabel: {
                            borderColor:that.barLineColor,
                            fontSize:16,
                            textStyle: {
                                color: that.labelColor
                            }
                        }
                    },{
                        boundaryGap :true,
                        axisTick: {show: false},
                        type:"value",
                        name:"(车次)",
                        min: 0,
                        max: 100,
                        interval: 20,
                        yAxisIndex: 1,
                        nameTextStyle:{
                            fontSize :16,
                            padding  :[0,0,10,60],
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
                                color:that.lineColorYellow
                            },
                        },
                        axisLabel: {
                            borderColor:that.barLineColor,
                            fontSize:16,
                            textStyle: {
                                color: that.labelColor
                            }
                        }
                       
                    }],
                    series: [{
                        name: '人员流量',
                        type: 'line',
                        symbol:"circle",
                        symbolSize: 6,
                        itemStyle:{
                            normal:{
                                color:that.barBiasColor
                            }
                        },
                        data:dataJson.peopleFlowOverview.yAxis[0]
                       
                    },{
                        name: '车流量',
                        type: 'line',
                        symbol:"circle",
                        symbolSize: 6,
                        
                        itemStyle:{
                            normal:{
                                
                                color:that.lineColorYellow
                            }
                        },
                        data:dataJson.peopleFlowOverview.yAxis[1],
                       
                    }]
                });
            }
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
        }
    }
</script>
<style scoped>

#lineBias{
    width:1000px;
    height: 400px;
}
#lineBias::after{
    content: "当前状态:";
    display: inline-block;
    color: #6097cd;
    bottom: 393px;
    position: relative;
    left: 450px;
}
#lineBias::before{
    content: "正常";
    display: inline-block;
    color: #6097cd;
    top: 29px;
    position: relative;
    margin-left: 520px;
    font-weight: bold;
}
</style>
