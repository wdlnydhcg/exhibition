<template>
    <div class="inline-block">
        <div  class="simplePie">
            <div class="simplePie-title">{{title}}</div>
            <div ref='pieSimple' class="pieSimple"></div>
            <div class="numCol">数量  : {{itemNum}}</div>
            <div class="perCol">占比 : {{((itemNum/totalNum)*100).toFixed(1)}}%</div>
        </div>
    </div>
</template>
<script>
    
    export default {
        components:{
            // newNumFreeStyle
        },
        props:{
            title:{
                type:String,
            },
            pieColor:{
                type:String,
                default:'#fef957'
            },
            totalNum:{
                type:Number,
                default:0
            },
            itemNum:{
                type:Number,
                default:0
            }
        },
        mounted(){
            this.drawPieSimple()
        },
        data(){
            return{
               
                
            }
        },
        methods:{
             drawPieSimple(){
                let that = this;
                // 基于准备好的dom，初始化echarts实例
                let allSimplePie = this.$refs.pieSimple
                let percent = (that.itemNum/that.totalNum).toFixed(3)*100
                console.log("allSimplePie  ",allSimplePie);
                
                let myChart = this.$echarts.init(allSimplePie);
                    myChart.setOption({
                        series: [{
                            type:'pie',
                            radius: ['50%', '75%'],
                            avoidLabelOverlap: false,
                            legendHoverLink:false,
                            hoverAnimation:false,
                            startAngle:180,
                            clockwise:false,
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
                                    value:100-percent,
                                    itemStyle:{
                                        normal:{
                                            color :'#00000000'
                                        }
                                    }
                                },
                                {
                                    value:percent,
                                    itemStyle:{
                                        normal : {
                                            color :that.pieColor,
                                        }
                                    }
                                }
                            ]
                        }]
                    })       
                }
            }
        }
</script>
<style scoped>
    .simplePie .simplePie-title{
        position: relative;
        margin-left: 0;
        margin-top: 12px;
    }
    #pieSimple,.pieSimple{
        width:80px;
        height: 80px;
    }
    .simplePie {
        display: inline-block;
        width: 235px;
        position: relative;
    }
    .simplePie-row{
        padding-left: 200px;
        position: relative;
    }
    .simplePie-title{
        color: #6499c3;
        display: inline-block;
        height: 100%;
        position: absolute;
        margin-left: -130px;
        margin-top: 13px;
        font-size: 20px;
        min-width: 100px;
        text-align: center;
    }
    .simplePie h2{
        color:#6499c3;
        margin-bottom: 0px;
    }
    .numCol,.perCol{
        position: absolute;
        width: 110px;
        text-align: left;
        right: 35px;
        color: #6499c3;
        font-size: 18px;
    }
    .numCol{
        top: 50px;
    }
    .perCol{
        top: 82px;
    }
    .totalNum{
        color: rgb(255, 255, 255);
        position: absolute;
        margin-left: -110px;
        margin-top: 60px;
        font-size: 50px;
        min-width: 100px;
        text-align: center;
    }
    .inline-block{
        display: inline-block;
    }
</style>
