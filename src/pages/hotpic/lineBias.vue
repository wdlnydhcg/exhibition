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
                let that = this;
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(that.$refs.lineBias)
                // 绘制图表
                myChart.setOption({
                    title: { 
                        text: '某网点业务办理人数统计',
                        left:70,
                        textStyle:{
                            color:that.labelColor,
                            fontSize:24,
                            fontWeight:"normal"
                            
                        }
                    },
                    grid:{
                        top:100,
                        x:120
                    },
                    
                    legend: {
                        itemGap:20,
                        itemWidth:30,
                        data:['进入网点人数','取号人数','业务交易总数',"业务评价总数"],
                        right:0,
                        top:8,
                        textStyle:{
                            color:that.labelColor,
                            fontSize:14
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
                            show:false,
                            interval : 100,
                            lineStyle:{
                                type:"dotted",
                                color:that.barLineColor
                            }
                        },
                        axisLine:{
                            lineStyle:{
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
                        name:"(交易量)",
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
                        name: '进入网点人数',
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
                        name: '取号人数',
                        type: 'line',
                        symbol:"circle",
                        symbolSize: 6,
                        
                        itemStyle:{
                            normal:{
                                color:that.lineColorYellow
                            }
                        },
                        data:dataJson.peopleFlowOverview.yAxis[1],
                    },{
                        name: '业务交易总数',
                        type: 'line',
                        symbol:"circle",
                        symbolSize: 6,
                        itemStyle:{
                            normal:{
                                color:"#f9f06d"
                            }
                        },
                        data:dataJson.peopleFlowOverview.yAxis[2],
                       
                    },{
                        name: '业务评价总数',
                        type: 'line',
                        symbol:"circle",
                        symbolSize: 6,
                        
                        itemStyle:{
                            normal:{
                                color:"#ec7988"
                            }
                        },
                        data:dataJson.peopleFlowOverview.yAxis[3],
                       
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
    width:900px;
    height: 420px;
    margin-top: 50px;
}
/* #lineBias::after{
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
    top: 28px;
    position: relative;
    margin-left: 520px;
    font-weight: bold;
} */
</style>
