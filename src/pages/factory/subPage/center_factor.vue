<template>
    <div class="bg_content">
        <div class="map_1" :class="{'easyShow':easyShow == 'map_1'}"></div>
        <div class="map_2" :class="{'easyShow':easyShow == 'map_2'}"></div>
        <!-- 工厂3号车间 -->
        <draw-slot xAxis="800" yAxis="670" rowNum="3" colNum="2">
            <div class="tipInfo-title">工厂3号车间</div>
            <div class="tipInfo-row">
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-188">产线工作人员量(人)&nbsp;&nbsp;:&nbsp;</span>
                    <span class="tipInfoValue">354</span>
                </div>
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-150">当前数量(吨)&nbsp;&nbsp;:&nbsp;</span>
                    <span class="tipInfoValue">354</span>
                </div>
            </div>
            <div class="tipInfo-row">
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-188">货品流动进量(吨)&nbsp;&nbsp;:&nbsp;</span>
                    <span class="tipInfoValue">354</span>
                </div>
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-150">当前体积(m³)&nbsp;&nbsp;:&nbsp;</span>
                    <span class="tipInfoValue">354</span>
                </div>
            </div>
            <div class="tipInfo-row">
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-188">货品流动出量(吨)&nbsp;&nbsp;:&nbsp;</span>
                    <span class="tipInfoValue">354</span>
                </div>
                <div class="tipInfo-col">
            
                </div>
            </div>
        </draw-slot>

        <!-- 工厂1号车间 -->
        <draw-slot xAxis="1400" yAxis="1000" rowNum="3" colNum="2">
            <div class="tipInfo-title">工厂1号车间</div>
            <div class="tipInfo-row">
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-188">产线工作人员量(人)&nbsp;&nbsp;:&nbsp;</span>
                    <span class="tipInfoValue">354</span>
                </div>
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-150">当前数量(吨) : </span>
                    <span class="tipInfoValue">354</span>
                </div>
            </div>
            <div class="tipInfo-row">
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-188">货品流动进量(吨) : </span>
                    <span class="tipInfoValue">354</span>
                </div>
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-150">当前体积(m³) : </span>
                    <span class="tipInfoValue">354</span>
                </div>
            </div>
            <div class="tipInfo-row">
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-188">货品流动出量(吨) : </span>
                    <span class="tipInfoValue">354</span>
                </div>
                <div class="tipInfo-col">
            
                </div>
            </div>
        </draw-slot>
        
         <!-- 工厂大门 -->
        <draw-slot  xAxis="2200" yAxis="1500" lineHeight="100" direction="bottom"  rowNum="2" colNum="2">
            <div class="tipInfo-title">工厂大门人车流量统计</div>
            <div class="tipInfo-row">
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-150">人员进量(人次)&nbsp;&nbsp;:&nbsp;</span>
                    <span class="tipInfoValue">354</span>
                </div>
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-150">车辆进量(车次)&nbsp;&nbsp;:&nbsp;</span>
                    <span class="tipInfoValue">135</span>
                </div>
            </div>
            <div class="tipInfo-row">
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-150">人员出量(人次)&nbsp;&nbsp;:&nbsp;</span>
                    <span class="tipInfoValue">341</span>
                </div>
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-150">车辆出量(人次)&nbsp;&nbsp;:&nbsp;</span>
                    <span class="tipInfoValue">341</span>
                </div>
            </div>
        </draw-slot>
        
        <!-- 工厂4号车间 -->
        <draw-slot xAxis="200" yAxis="800" direction="bottom"  rowNum="3" colNum="2">
            <div class="tipInfo-title">工厂4号车间</div>
            <div class="tipInfo-row">
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-188">产线工作人员量(人) :</span>
                    <span class="tipInfoValue">135</span>
                </div>
                 <div class="tipInfo-col">
                    <span class="tipInfoLabel width-150">当前数量(吨) : </span>
                    <span class="tipInfoValue">780</span>
                </div>
            </div>
            <div class="tipInfo-row">
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-188">货品流动进量(吨) : </span>
                    <span class="tipInfoValue">54</span>
                </div>
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-150">当前体积(m³) : </span>
                    <span class="tipInfoValue">341</span>
                </div>
            </div>
             <div class="tipInfo-row">
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-188">货品流动出量(吨) : </span>
                    <span class="tipInfoValue">34</span>
                </div>
            </div>
        </draw-slot>

        <!-- 工厂2号车间 -->
        <draw-slot :delay="delay" xAxis="800" yAxis="1100" direction="bottom"  rowNum="3" colNum="2">
            <div class="tipInfo-title">工厂2号车间</div>
            <div class="tipInfo-row">
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-188">产线工作人员量(人)&nbsp;&nbsp;:&nbsp;</span>
                    <span class="tipInfoValue">354</span>
                </div>
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-150">当前数量(吨) : </span>
                    <span class="tipInfoValue">341</span>
                </div>
            </div>
            <div class="tipInfo-row">
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-188">货品流动进量(吨) : </span>
                    <span class="tipInfoValue">341</span>
                </div>
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-150">当前体积(m³) : </span>
                    <span class="tipInfoValue">312</span>
                </div>
            </div>
            <div class="tipInfo-row">
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-188">货品流动出量(吨) : </span>
                    <span class="tipInfoValue">34</span>
                </div>
            </div>
        </draw-slot>

        <!-- 仓库 -->
        <draw-slot :delay="delay" xAxis="2100" yAxis="550"  rowNum="4" colNum="2">
            <div class="tipInfo-title">仓库</div>
            <div class="tipInfo-row">
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-140">人员进量(人次):</span>
                    <span class="tipInfoValue">54</span>
                </div>
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-140">当前数量(吨) : </span>
                    <span class="tipInfoValue">354</span>
                </div>
            </div>
            <div class="tipInfo-row">
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-140">人员出量(人次) : </span>
                    <span class="tipInfoValue">26</span>
                </div>
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-140">当前体积(m³) : </span>
                    <span class="tipInfoValue">354</span>
                </div>
            </div>
            <div class="tipInfo-row">
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-140">车辆进量(车次) : </span>
                    <span class="tipInfoValue">81</span>
                </div>
                 <div class="tipInfo-col">
                    <span class="tipInfoLabel width-140">货物进量(吨) : </span>
                    <span class="tipInfoValue">81</span>
                </div>
            </div>
            <div class="tipInfo-row">
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-140">车辆出量(车次) : </span>
                    <span class="tipInfoValue">78</span>
                </div>
                 <div class="tipInfo-col">
                    <span class="tipInfoLabel width-140">货物出量(吨) : </span>
                    <span class="tipInfoValue">38</span>
                </div>
            </div>
        </draw-slot>

        <!-- 行政大楼 -->
        <draw-slot :delay="delay" xAxis="2800" yAxis="650"  rowNum="2" colNum="1">
            <div class="tipInfo-title">行政大楼</div>
            <div class="tipInfo-row">
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-150">人员进量(人次) :</span>
                    <span class="tipInfoValue">1104</span>
                </div>
            </div>
             <div class="tipInfo-row">
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-150">人员出量(人次) :</span>
                    <span class="tipInfoValue">354</span>
                </div>
                
            </div>
        </draw-slot>

         <!-- 综合大楼 -->
        <draw-slot :delay="delay" xAxis="1500" yAxis="1200" lineHeight="200"  rowNum="2" colNum="1">
            <div class="tipInfo-title">综合大楼</div>
            <div class="tipInfo-row">
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-150">人员进量(人次) : </span>
                    <span class="tipInfoValue">54</span>
                </div>
                
            </div>
            <div class="tipInfo-row">
                <div class="tipInfo-col">
                    <span class="tipInfoLabel width-150">人员出量(人次) : </span>
                    <span class="tipInfoValue">26</span>
                </div>
            </div>
            
        </draw-slot>

    </div>
</template>
<script>
    import drawSlot from '@/components/drawSlot'
    export default {
        components:{
            drawSlot
            // 'other-component':otherComponent
        },
        data(){
            return{
                delay:14,
                easyShow:"map_1"

            }
        },
        mounted() {
            this.monitorMap()
        },
        methods:{
            monitorMap(){
                let that = this;
                setTimeout(() => {
                    that.easyShow = "map_2"
                }, that.delay*1000);
            }
        }
    }
</script>

<style scoped>
    .bg_content{
        background-image: url("../../../static/image/second/map-bg.png");
        background-repeat: no-repeat;
        height: 100%;
        width: 100%;
    }
    .map_1,.map_2{
        opacity: 0;
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .easyShow.map_1{
        opacity: 0;
        animation-name: easyShow;
        animation-duration: 14s;
        /* animation-delay: 1s; */
        animation-fill-mode: forwards;
        animation-timing-function:linear;
    }
    .easyShow.map_2{
        opacity: 0;
        animation-name: delay-easyShow;
        animation-duration: 14s;
        /* animation-delay: 1s; */
        animation-fill-mode: forwards;
        animation-timing-function:linear;
    }
    @keyframes  delay-easyShow{
        0%{
            opacity: 0;
        }
        10%{
            opacity: 0;
        }
        20%{
            opacity: 1;
        }
        100%{
            opacity: 1;
        }
    }
    @keyframes easyShow{
        0%{
            opacity: 0;
        }
        10%{
            opacity: 0;
        }
        20%{
            opacity: 1;
        }
        80%{
            opacity: 1;
        }
        90%{
            opacity: 0;
        }
        100%{
            opacity: 0;
        }
    }
    .map_1{
        background-image: url("../../../static/image/second/map-bg-1.png");
        background-repeat: no-repeat;
        /* background-position: 32px 0; */
    }
    .map_2{
        background-image: url("../../../static/image/second/map-bg-2.png");
        background-repeat: no-repeat;
        /* background-position: 32px 0; */
    }
    .width-188{
        width:195px;
    }
</style>
