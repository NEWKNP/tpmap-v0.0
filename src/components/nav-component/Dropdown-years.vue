<template>
    <div class="nav-left nav-dd nav-year">
        <el-submenu index="2">
          <template slot="title">
              <div class="label text needsclick">ข้อมูลประจำปี</div>
              <span class="stext">{{getYear}}</span>
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
import {mapState, mapGetters, mapActions} from 'vuex'
const setYears = ['2559', '2560', '2561']
export default {
  name: 'Dropdown-years',
  data: function () {
    return {
      years: setYears
    }
  },
  computed: {
    ...mapState({
      year: state => state.year
    }),
    ...mapGetters([
      'getYear'
    ])
  },
  methods: {
    ...mapActions([
      'setYear'
    ]),
    changeYear: function (event) {
      this.setYear(event)
    },
    getYear () {
      return this.$store.getters.getYear
    }
  }
}
</script>

<style>
.nav-year .stext {
    text-align: left;
}
</style>
