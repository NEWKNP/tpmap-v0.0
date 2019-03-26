<template>
    <el-main>
      <el-row>
        <Map></Map>
        <Chart></Chart>
      </el-row>
    </el-main>
</template>

<script>
import Map from './Map-component.vue'
import Chart from './Chart-component.vue'
export default {
  name: 'Main',
  components: {
    Map,
    Chart
  }
}
</script>

<style>
</style>
