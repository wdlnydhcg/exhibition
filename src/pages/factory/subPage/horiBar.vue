<template>
    <div>
        <div style="padding-left:260px">
            <div ref="horiChart" id="horiChart"></div>
        </div>
        
    </div>
</template>
<script>
    export default {
        components:{
            // 'other-component':otherComponent
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
        mounted() {
            this.drawHoriLine()
        },
        methods:{
              drawHoriLine(){
                let that = this;
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(this.$refs.horiChart)
                // 绘制图表
                myChart.setOption({
                    title: {
                        text: '各区域监控点点位检测',
                        textStyle:{
                            color:that.labelColor,
                            fontSize:24,
                            fontWeight:'normal'
                        }
                    },                  
                    xAxis: {
                        show:false,
                    },
                    grid:{
                        top:60,

                        x:200
                    },
                    yAxis: {
                        type: 'category',
                        data: ['大兴支行','房山支行','丰台支行','朝阳支行','西城支行','东城支行','通州分行','中关村分行'],
                        axisTick: {show: false},
                        // interval :150,
                        // splitNumber :150,
                        barGap :"45%",
                        axisLabel:{
                            margin :30,
                            fontSize:16
                        },
                        axisLine:{
                            show:false,
                            lineStyle:{
                                color:that.barLineColor
                            },
                        }
                    },
                    series: [
                        {
                            name: '2011年',
                            type: 'bar',
                            data: [ 290, 100, 134, 300, 134, 60, 134, 320],
                            barWidth: '30%',
                            
                            label: {
                                normal: {
                                    show: true,
                                    position: 'right',
                                    color:that.barLineColor
                                }
                            },
                            itemStyle:{
                                normal : {
                                    // color :that.barLineColor,
                                    color: new that.$echarts.graphic.LinearGradient(
                                        0, 0, 1, 0,
                                        [
                                            {offset: 0, color: that.lineGradualBlue_1},
                                            {offset: 0.5, color: that.lineGradualBlue_2},
                                            {offset: 1, color: that.lineGradualBlue_3}
                                        ]
                                    )
                                }
                            }
                        }
                    
                    ]
                });
            }
        }
    }
</script>
<style scoped>
#horiChart{
    /* margin: 0 auto; */
    width:850px;
    height: 420px;
}
</style>
