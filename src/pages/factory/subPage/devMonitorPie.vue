<template>
    <div>
        <div ref="lotMonitPie" id="lotMonitPie"></div>
    </div>
</template>
<script>
    export default {
        components:{
            // 'other-component':otherComponent
        },
        data(){
            return{
                pieColorYellow:"#ffff00",
                pieColorBlue:"#3b9fed",
                pieColorOrange:"#ff8000",
            }
        },
        mounted() {
            this.drawRadiusPie()
        },
        methods:{
              drawRadiusPie(){
                let percent = 75
                let that = this;
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(this.$refs.lotMonitPie)
                myChart.setOption({
                    title : {
                        text: 'IOT监控统计',
                        textStyle:{
                            color:"#6499c3",
                            fontSize:24,
                            fontWeight:'normal'
                            
                        },
                        x:'left',
                        left:50
                    },
                    series: [{
                        type:'pie',
                        radius : [30, 100],
                        startAngle:150,
                        avoidLabelOverlap: false,
                        legendHoverLink:false,
                        hoverAnimation:false,
                        roseType : 'radius',
                        label: {
                            normal: {
                                formatter: '{b|{b}  }{c}',                                
                                rich: {
                                    b: {
                                        fontSize: 16,
                                        lineHeight: 33
                                    },
                                    c:{
                                        fontSize: 16,
                                        lineHeight: 33
                                    }
                                }
                            }
                        },
                        data:[
                             {
                                value:200, 
                                name:'普通设备',
                                itemStyle:{
                                    normal : {
                                        color :that.pieColorYellow,
                                    }
                                }
                            },
                            {   
                                value:100, 
                                name:'未配置',
                                itemStyle:{
                                    normal : {
                                        color :that.pieColorOrange,
                                    }
                                }
                            },
                            {
                                value:240, 
                                name:'智能设备' ,
                                itemStyle:{
                                    normal : {
                                        color :that.pieColorBlue,
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

#lotMonitPie{
    width: 500px;
    height: 300px;
}
.contentDiv{
    display: inline-block;
}
</style>
