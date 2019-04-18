<template>
    <div
      v-if="!isHidden"
      class="nav-left nav-dd nav-tumbol">
        <el-submenu index="5">
          <template slot="title">
              <div class="label text needsclick">ตำบล</div>
              <span class="stext">{{tbName}}</span>
          </template>
          <div class="cb tbh">
            <el-row>
              <el-col class="nav-left nav-colume">
                <el-row>
                  <el-menu-item
                    @click="changeTumbol(0)"
                    class="sector pointer">
                      {{amName}}
                  </el-menu-item>
                </el-row>
              </el-col>
              <el-col class="nav-left nav-colume">
                <el-menu-item
                  @click="changeTumbol(1)"
                  class="each-cb">
                  ตำบล ก
                </el-menu-item>
              </el-col>
            </el-row>
          </div>
        </el-submenu>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'Dropdown-tumbol',
  computed: {
    ...mapState({
      isHidden: state => state.nav.tb_display,
      amName: state => state.nav.amp_name,
      tbName: state => state.nav.tb_name
    })
  },
  methods: {
    ...mapActions([
      'setTBID',
      'setTBName',
      'setVlIsHidden'
    ]),
    changeTumbol: function (event) {
      if (event === 0) {
        console.log(event)
        this.setVlIsHidden(true)
      } else {
        console.log(event)
        this.setVlIsHidden(false)
        // this.tbName = event[1]
      }
      // this.setAMID(event[0])
      // this.setPVName(event[1])
    }
  }
}
</script>

<style>
.tbh {
  height: 31.5rem;
}
</style>
