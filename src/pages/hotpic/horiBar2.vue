<template>
    <div>
        <div style="padding-left:50px;">
            <div ref="horiChart" id="horiChart"></div>
        </div>
        
    </div>
</template>
<script>
    import dataJson from './dataJson';
    export default {
        components:{
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
                myChart:"",
                myChartOption:{
                    title: {
                        top:20,
                        text: '等候区人员属性统计',
                        textStyle:{
                            color:'#6499c3',
                            fontSize:24,
                            fontWeight:'normal'
                        }
                    },                  
                    xAxis: {
                        show:false,
                    },
                    grid:{
                        top:60,
                        left:120,

                        x:200
                    },
                    yAxis: {
                        type: 'category',
                        data: ['青年人群','中年人群','老年人群','男性人群','女性人群'],
                        axisTick: {show: false},
                        barGap :"45%",
                        axisLabel:{
                            margin :30,
                            fontSize:16
                        },
                        axisLine:{
                            show:false,
                            lineStyle:{
                                color:"#2d8de1"
                            },
                        }

                    },
                    series: [
                        {
                            type: 'bar',
                            data: [1,2,3,4,5],
                            barWidth: '30%',
                            
                            label: {
                                normal: {
                                    show: true,
                                    position: 'right',
                                    color:"#2d8de1"
                                }
                            },
                            itemStyle:{
                                normal : {
                                    color:""
                                }
                            }
                        }
                    
                    ]
                },

                waitNum:0,       //等候区人数
            }
        },
        destroyed() {
            clearInterval(window.waitNum)
        },
        mounted() {
            this.myChartOption.series[0].itemStyle.normal.color = new this.$echarts.graphic.LinearGradient(
                0, 0, 1, 0,
                [
                    {offset: 0, color: "#50b5f7"},
                    {offset: 0.5, color: "#66d3f9"},
                    {offset: 1, color: "#95fbfd"}
                ]
            )
            this.countNum();
            this.drawHoriLine();
        },

        methods:{
            countNum(){
                let count = 0;
                let that = this;
                this.waitNum=dataJson.queueNum[count%6];
                that.$emit('waitNum', that.waitNum);
                that.myChartOption.series[0].data = [ 
                        Math.round(that.waitNum*0.2),   //青年
                        Math.round(that.waitNum*0.5),   //中年
                        Math.round(that.waitNum*0.3),   //老年
                        Math.round(that.waitNum*0.6),   //男性
                        Math.round(that.waitNum*0.4)    //女性
                    ]
                window.waitNum = setInterval(()=>{
                    console.log("waitNum");
                    
                    that.waitNum = dataJson.queueNum[count%6];    
                    that.myChartOption.series[0].data = [ 
                        Math.round(that.waitNum*0.2),   //青年
                        Math.round(that.waitNum*0.5),   //中年
                        Math.round(that.waitNum*0.3),   //老年
                        Math.round(that.waitNum*0.6),   //男性
                        Math.round(that.waitNum*0.4)    //女性
                    ]
                    that.$emit('waitNum', that.waitNum);
                    that.myChart.setOption(that.myChartOption);
                    count++;
                },5000);
            },
            drawHoriLine(){
                let that = this;
                // 基于准备好的dom，初始化echarts实例
                this.myChart = this.$echarts.init(this.$refs.horiChart)
                // 绘制图表
                this.myChart.setOption(this.myChartOption);
            }
        }
    }
</script>
<style scoped>
#horiChart{
    /* margin: 0 auto; */
    width:850px;
    height: 350px;
}
</style>
