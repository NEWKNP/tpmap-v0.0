<template>
    <div class="nav-left nav-dd">
        <el-submenu index="2">
          <template slot="title">
              <div class="label text needsclick">ข้อมูลประจำปี</div>
              <span class="stext">2561</span>
          </template>
          <el-menu-item v-for="y in years" v-on:click="changeYear" :label="y" :key="y">{{y}}</el-menu-item>
        </el-submenu>
    </div>
</template>

<script>
const setYears = ['ปี 2559', 'ปี 2560', 'ปี 2561']
export default {
  name: 'Dropdown-years',
  data: function () {
    return {
      years: setYears
    }
  },
  methods: {
    changeYear: function (event) {
      console.log(event)
    }
  }
}
</script>

<style>

</style>
