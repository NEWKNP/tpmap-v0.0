<template>
    <div class="nav-left nav-dd nav-year">
        <el-submenu index="2">
          <template slot="title">
              <div class="label text needsclick">ข้อมูลประจำปี</div>
              <span class="stext">{{yrs}}</span>
          </template>
          <div class="cb">
            <el-menu-item
                v-for="y in years"
                @click="changeYear(y)"
                class="each-cb"
                :label="y"
                :key="y">
                ปี {{y}}
            </el-menu-item>
          </div>
        </el-submenu>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
const setYears = ['2559', '2560', '2561']
export default {
  name: 'Dropdown-years',
  data: function () {
    return {
      years: setYears,
      yrs: 2561
    }
  },
  computed: {
    ...mapState({
      year: state => state.year
    })
  },
  methods: {
    ...mapActions({
      setYear: 'navData/setYear'
    }),
    changeYear: function (event) {
      console.log(event)
      this.yrs = event
      this.setYear(event)
    }
  }
}
</script>

<style>
.nav-year .stext {
    text-align: left;
}
</style>
