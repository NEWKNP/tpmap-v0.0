<template>
    <el-col :span="16" id="chart-plain" class='chart-plain'>
        <el-row></el-row>
        <el-row>
            <el-col :span="12" id="radar-plain" class='radar-plain'></el-col>
            <el-col :span="12" id="display-plain" class='display-plain'></el-col>
        </el-row>
    </el-col>
</template>

<script>
export default {
  name: 'Chart-component'
}
</script>

<style>
.chart-plain {
    float: left;
}
</style>
