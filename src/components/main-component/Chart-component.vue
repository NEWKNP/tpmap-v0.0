<template>
    <el-col :span="16" id="chart-plain" class='chart-plain'>
        <el-row class="headname">
            <el-col :span="6" class="pvname namealign nav-left">
                <span>ชื่อจังหวัด</span>
            </el-col>
            <el-col :span="6" class="amname namealign nav-left">
                <span>ชื่ออำเภอ</span>
            </el-col>
            <el-col :span="6" class="tbname namealign nav-left">
                <span>ชื่อตำบล</span>
            </el-col>
            <el-col :span="6" class="vlname namealign nav-left">
                <span>ชื่อหมู่บ้าน</span>
            </el-col>
        </el-row>
        <el-row class="valuename">
            <el-col :span="6" class="pvname namealign nav-left">
                <span>ชื่อจังหวัด</span>
            </el-col>
            <el-col :span="6" class="amname namealign nav-left">
                <span>ชื่ออำเภอ</span>
            </el-col>
            <el-col :span="6" class="tbname namealign nav-left">
                <span>ชื่อตำบล</span>
            </el-col>
            <el-col :span="6" class="vlname namealign nav-left">
                <span>ชื่อหมู่บ้าน</span>
            </el-col>
        </el-row>
        <el-row>
            <Radar></Radar>
            <el-col id="display-plain" class='display-plain'>
                <el-row class="headtext">
                    <el-col class="textalign nav-left">
                        <span>สัดส่วนคนจน(%)</span>
                    </el-col>
                    <el-col class="textalign nav-left">
                        <span>จำนวนคนจน</span>
                    </el-col>
                </el-row>
                <el-row class="valuetext">
                    <el-col class="textalign nav-left">
                        <span>0.00</span>
                    </el-col>
                    <el-col class="textalign nav-left">
                        <span>10,000</span>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </el-col>
</template>

<script>
import Radar from './Radar.vue'
export default {
  name: 'Chart-component',
  components: {
    Radar
  }
}
</script>

<style>
.chart-plain {
    float: left;
    margin-left: 38rem;
    padding: .9rem 1rem;
    box-shadow: 0 0 4px rgba(33, 33, 33, 0.2);
}
.display-plain {
    float: left;
    width: 25.5rem;
    height: 36rem;
    padding: 0 1rem;
}
.headname {
    font-size: 1rem;
    color: darkblue;
}
.valuename {
    font-size: 1rem;
}
.namealign {
    width: 13.5rem;
    text-align: start;
}
.textalign {
    width: 12rem;
    text-align: start;
}
.pvname {
    display: block;
}
.amname {
    display: block;
}
.tbname {
    display: block;
}
.vlname {
    display: block;
}
.headtext {
    margin-top: 1rem;
    font-size: 1.4rem;
}
.valuetext {
    font-size: 2rem;
}
</style>
