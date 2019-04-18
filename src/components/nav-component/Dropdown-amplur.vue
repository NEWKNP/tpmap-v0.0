<template>
    <div
      v-if="!isHidden"
      class="nav-left nav-dd nav-amplur">
        <el-submenu index="4">
          <template slot="title">
              <div class="label text needsclick">อำเภอ</div>
              <span class="stext">{{amName}}</span>
          </template>
          <div class="cb amh">
            <el-row>
              <el-col class="nav-left nav-colume">
                <el-row>
                  <el-menu-item
                    @click="changeAmplur(0)"
                    class="sector pointer">
                      {{pvName}}
                  </el-menu-item>
                </el-row>
              </el-col>
              <el-col class="nav-left nav-colume">
                <el-menu-item
                  @click="changeAmplur(1)"
                  class="each-cb">
                  อำเภอ ก
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
  name: 'Dropdown-amplur',
  data: function () {
    return {}
  },
  computed: {
    ...mapState({
      isHidden: state => state.nav.am_display,
      pvName: state => state.nav.prov_name,
      amName: state => state.nav.amp_name
    })
  },
  methods: {
    ...mapActions([
      'setAMID',
      'setAMName',
      'setTbIsHidden',
      'setVlIsHidden'
    ]),
    changeAmplur: function (event) {
      if (event === 0) {
        console.log(event)
        this.setTbIsHidden(true)
      } else {
        console.log(event)
        // this.amName = event[1]
        this.setTbIsHidden(false)
      }
      // this.setAMID(event[0])
      // this.setAMName(event[1])
      this.setVlIsHidden(true)
    }
  }
}
</script>

<style>
.amh {
  height: 31.5rem;
}
</style>
