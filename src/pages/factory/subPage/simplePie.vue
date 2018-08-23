<template>
    <div>
        <div class="simplePie-row" v-for="(item, key, index) in dataInfo">
            <div class="simplePie-title">{{key}}</div>
            <div class="totalNum">
                <new-num-free-style  :height="36" :from="0" :to="item[0].number+item[1].number+item[2].number+100"></new-num-free-style>
            </div>
            <!-- <div class="totalNum">{{item[0].number+item[1].number+item[2].number}}</div> -->
            <div  class="simplePie" v-for="(item2, index2) in item">
                
                <div class="simplePie-title" v-if="index2 == 0">信用恶化企业</div>
                <div class="simplePie-title" v-if="index2 == 1">财务恶化企业</div>
                <div class="simplePie-title" v-if="index2 == 2">逾期企业</div>
                <!-- <div id="pieSimple"></div> -->
                <div ref='pieSimple' class="pieSimple"></div>
                <div class="numCol">数量  : {{item2.number}}</div>
                <div class="perCol">占比 : {{item2.percent}}%</div>
            </div>
        </div>
    
        
    </div>
</template>
<script>
    import datajson from './dataJson'
    import newNumFreeStyle from '@/components/newNumFreeStyle'
    export default {
        components:{
            newNumFreeStyle
        },
        mounted(){
            this.drawPieSimple()
        },
        data(){
            return{
                total:0,
                dataInfo:{
                    "上游企业":[
                        {
                            number:7,
                            percent:6.2
                        },{
                            number:2,
                            percent:1.7
                        },{
                            number:6,
                            percent:5.2
                        }
                    ],
                    "下游企业":[
                        {
                            number:8,
                            percent:6.
                        },{
                            number:9,
                            percent:7.3
                        },{
                            number:6,
                            percent:4.8
                        }
                    ],
                    "同类企业":[
                        {
                            number:6,
                            percent:5.0
                        },{
                            number:4,
                            percent:3.3
                        },{
                            number:9,
                            percent:7.5
                        }
                    ]                    
                }
            }
        },
        methods:{
             drawPieSimple(){
                let dataArray = [
                    9,7,6,
                    6,5,7,
                    6,8,5];
                let percent = 60
                let that = this;
                // 基于准备好的dom，初始化echarts实例
                let allSimplePie = this.$refs.pieSimple
                for (const index in allSimplePie) {
                    let keyIndex = index%3;
                    let dataKey,
                        circle;
                    if(keyIndex == '0'){
                        dataKey = "上游企业";
                        circle = "#fef957";
                    }else if(keyIndex == '1'){
                        dataKey = "下游企业";
                        circle = "#fe728c";
                    }else if(keyIndex == '2'){
                        dataKey = "同类企业";
                        circle = "#01f8ff";
                    }

                    let myChart = this.$echarts.init(allSimplePie[index]);
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
                                        value:100-dataArray[index],
                                        itemStyle:{
                                            normal:{
                                                color :'#00000000'
                                            }
                                        }
                                    },
                                    {
                                        value:dataArray[index],
                                        itemStyle:{
                                            normal : {
                                                color :circle,
                                            }
                                        }
                                    }
                                
                                ]
                            }
                        ]
                    })
                }             
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
</style>
