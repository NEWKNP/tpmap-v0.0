<template>
    <div
      v-if="!isHidden"
      class="nav-left nav-dd nav-village">
        <el-submenu index="6">
          <template slot="title">
              <div class="label text needsclick">หมู่บ้าน</div>
              <span class="stext">{{vlName}}</span>
          </template>
          <div class="cb vlh">
            <el-row>
              <el-col class="nav-left nav-colume">
                <el-row>
                  <el-menu-item
                    @click="changeVillage(0)"
                    class="sector pointer">
                      {{tbName}}
                  </el-menu-item>
                </el-row>
              </el-col>
              <el-col class="nav-left nav-colume">
                <el-menu-item
                  @click="changeVillage(0)"
                  class="each-cb">
                  หมู่บ้าน ก
                </el-menu-item>
              </el-col>
            </el-row>
          </div>
        </el-submenu>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Dropdown-village',
  computed: {
    ...mapState({
      isHidden: state => state.nav.vl_display,
      tbName: state => state.nav.tb_name,
      vlName: state => state.nav.vl_name
    })
  },
  methods: {
    changeVillage: function (event) {
      if (event === 0) {
        console.log(event)
      } else {
        console.log(event)
        // this.tbName = event[1]
      }
      // this.setAMID(event[0])
      // this.setPVName(event[1])
    }
  }
}
</script>

<style>
.vlh {
  height: 31.5rem;
}
</style>
