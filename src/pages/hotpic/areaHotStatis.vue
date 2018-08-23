<template>
    <div>
        <div id="polarPie"></div>
        <div id="lotMonitPie"></div>
    </div>
</template>
<script>
    export default {
        components:{
            // 'other-component':otherComponent
        },
        data(){
            return{
                color_1:"#fde746",         //非现金业务区
                color_2:"#ff8e01",          //智能营销区
                color_3:"#b3f438",         //休息等候区
                color_4:"#f468fc",        //线上线下融合区
                color_5:"#588cfc",         //现金业务区
                color_6:"#ffff00",          //咨询引导区
                color_7:"#fc7b8d",        //24hour服务区
                color_8:"#fbc848",         //智能服务区
                color_9:"#00b6ff",          //贵宾服务区
            }
        },
        mounted() {
            this.drawPolarPie()
            this.drawRadiusPie()
        },
        methods:{
            drawPolarPie(){
                let percent = 75
                let that = this;
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('polarPie'))
                myChart.setOption({
                    polar: {},
                    angleAxis: {
                        type :"value",
                        startAngle: 90,
                        axisLine:{
                            show:false,
                            lineStyle:{
                                type :"dotted",
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#588cfc' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: 'blue' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                }
                            }
                        }
                    },
                    radiusAxis: {
                        min: 0,
                        max: 100,
                        // splitNumber :0,
                        axisLine:{
                            show:false
                        },
                        axisLabel:{
                            show:false
                        },
                        axisTick:{
                            show:false
                        },
                        splitLine:{
                            lineStyle:{
                                type:"dashed",
                                color:"#588cfc"
                            }
                        }
                        
                        // interval: 25
                    },
                   
                    series: []
                })
            },
            drawRadiusPie(){
                let percent = 75
                let that = this;
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('lotMonitPie'))
                myChart.setOption({
                   series: [
                    {
                        type:'pie',
                        radius : ["30%", "80%"],
                        avoidLabelOverlap: false,
                        legendHoverLink:false,
                        hoverAnimation:false,
                        roseType : 'radius',
                        label: {
                            normal: {
                                textStyle: {
                                    color: '#588cfc',
                                    fontSize:14
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                lineStyle: {
                                    color: '#588cfc'
                                },
                                smooth: 0.2,
                                length: 10,
                                length2: 20
                            }
                        },
                        data:[{
                                value:8, 
                                name:'现金业务区' ,
                                itemStyle:{
                                    normal : {
                                        color :that.color_5,
                                    }
                                }
                            }, {
                                value:4, 
                                name:'咨询引导区' ,
                                itemStyle:{
                                    normal : {
                                        color :that.color_6,
                                    }
                                }
                            },{
                                value:7, 
                                name:'24Hour服务区' ,
                                itemStyle:{
                                    normal : {
                                        color :that.color_4,
                                    }
                                }
                            }, {
                                value:13, 
                                name:'智能服务区' ,
                                itemStyle:{
                                    normal : {
                                        color :that.color_8,
                                    }
                                }
                            }, {
                                value:2, 
                                name:'贵宾服务区' ,
                                itemStyle:{
                                    normal : {
                                        color :that.color_3,
                                    }
                                }
                            },{   
                                value:10, 
                                name:'非现金业务区',
                                itemStyle:{
                                    normal : {
                                        color :that.color_2,
                                    }
                                }
                            },{
                                value:20, 
                                name:'智能营销区',
                                itemStyle:{
                                    normal : {
                                        color :that.color_7,
                                    }
                                }
                            },{
                                value:24, 
                                name:'休息等候区' ,
                                itemStyle:{
                                    normal : {
                                        color :that.color_9,
                                    }
                                }
                            }, {
                                value:12, 
                                name:'线上线下融合区' ,
                                itemStyle:{
                                    normal : {
                                        color :that.color_1,
                                    }
                                }
                            },
                           
                          
                        ]
                    }
                ]
                
                })
            }
        }
    }
</script>
<style scoped>

#polarPie{
    width: 850px;
    height: 500px;
    position: absolute;
}
#polarPie::after{
    content: "";
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #e7e8ed;
    position: absolute;
    top: 40%;
    left: 44%;
}
#lotMonitPie{
    width: 850px;
    height: 500px;
    position: absolute;
}
.contentDiv{
    display: inline-block;
}
</style>
