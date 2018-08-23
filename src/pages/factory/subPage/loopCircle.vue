<template>
    <div>
        <div class="percentNum">
            <new-num-free-style  :height="50" :from="0" :to="percent"></new-num-free-style>
            <span>%</span>
        </div>
        <div ref="alarmChart" id="alarmChart"></div>
    </div>
</template>
<script>
import newNumFreeStyle from '@/components/newNumFreeStyle'
    export default {
        components:{
            newNumFreeStyle
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
                percent:90
            }
        },
        mounted() {
            this.drawLoopPie()
        },
        methods:{
             drawLoopPie(){
                // let percent = 75
                let that = this;
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(this.$refs.alarmChart)
                 myChart.setOption({
                    graphic:{
                        type:'text',
                        left:'center',
                        top:'center',
                        style:{
                            text:'\n\n\n排队堵塞率',
                            textAlign:'center',
                            fill:that.pieColorBlue,
                            width:30,
                            height:30,
                            font:'1.1em "STHeiti", sans-serif'
                        }
                    },
                    series: [{
                        
                        type:'pie',
                        selectedMode: 'single',
                        radius: ['58%', '61%'],
                        avoidLabelOverlap: false,
                        legendHoverLink:false,
                        hoverAnimation:false,
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        legend:{
                            show:false
                        },
                        data:[{
                            value:335,
                            itemStyle:{ 
                                normal : {
                                    color :that.lineColorBlue,
                                }
                            },
                            animationDelay: function (idx) {
                                return idx * 100 ;
                            }},
                        ]
                    },{
                        type:'pie',
                        radius: ['65%', '75%'],
                        avoidLabelOverlap: false,
                        legendHoverLink:false,
                        hoverAnimation:false,
                        startAngle:180,
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        legend:{
                            show:false
                        },
                        data:[
                            {
                                value:that.percent,
                                itemStyle:{
                                    normal : {
                                        color :that.pieColorYellow,
                                    }
                                },
                                animationDelay: function (idx) {
                                    return idx * 100 ;
                                }
                            },
                            {
                                value:100-that.percent, 
                                itemStyle:{
                                    normal:{
                                        opacity:0
                                    }
                                },
                                animationDelay: function (idx) {
                                    return idx * 100 ;
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
.percentNum{
    color: #fff;
    left: 95px;
    top: 34%;
    position: absolute;

}
.percentNum span{
    font-size: 30px;
    line-height: 90px;
    left: 70px;
    float: right;
    position: absolute;
}
#alarmChart{
    width:270px;
    height:270px;
}
.contentDiv{
    display: inline-block;
}
</style>
