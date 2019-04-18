<template>
    <div class="nav-left nav-dd cb-1">
        <el-submenu index="1">
          <template slot="title">
            <div class="label text needsclick">ค่าดัชนี ★</div>
            <span class="stext">{{checkList.length}} มิติ</span>
          </template>
          <el-menu-item index="1-1" class="cb" >
            <el-checkbox-group v-model="checkList">
              <el-checkbox
                v-for="d in dimensions"
                @change="changeDimension"
                :label="d"
                :key="d"
                class="each-cb">
                  {{d}}
                </el-checkbox>
            </el-checkbox-group>
          </el-menu-item>
        </el-submenu>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
const dimensionOptions = ['สุขภาพ', 'ความเป็นอยู่', 'การศึกษา', 'รายได้', 'การเข้าถึงบริการภาครัฐ']
export default {
  name: 'Dropdown-checkbox',
  data: function () {
    return {
      checkList: dimensionOptions,
      dimensions: dimensionOptions,
      temp_dimension: []
    }
  },
  computed: {
    ...mapState({
      dimenstionString: state => state.nav.dimensionString
    })
  },
  methods: {
    ...mapActions([
      'setDimension'
    ]),
    changeDimension: function () {
      for (var i = 0; i < this.dimensions.length; i++) {
        if (this.checkList.includes(this.dimensions[i])) {
          this.temp_dimension[i] = '1'
        } else {
          this.temp_dimension[i] = '0'
        }
      }
      this.setDimension(this.temp_dimension)
      console.log(this.dimenstionString)
    }
  }
}
</script>

<style>
.el-menu--horizontal {
  left: 117px;
  top: 75px;
}
.el-menu--horizontal ul{
  margin: 0;
  padding: 0;
}
.nav-left {
    float: left;
}
.nav-dd {
    font-size: inherit;
    height: inherit;
    padding: 0.2rem 1.5rem;
    line-height: 1;
    cursor: pointer;
}
.nav-dd .text {
    color: #757575;
}
.nav-dd .label {
    color: #9e9e9e;
    font-size: .7rem;
    font-weight: normal;
    text-align: left;
    margin: 0;
}
.nav-dd .stext {
    color: #757575;
    font-size: .9rem;
}
.nav-dd i {
  display: block;
}
.cb-1 {
    background-color: #ffdc00;
}
.label {
    color: #363636;
    display: block;
    font-size: 1.6rem;
    font-weight: bold;
}
.cb {
  display: block;
  background-color: #ffffff;
  box-shadow: 4px 0 8px rgba(33, 33, 33, 0.2);
}
.each-cb {
  padding: .5rem 2rem;
  display: block;
  cursor: pointer;
}
.each-cb:hover {
  opacity: .5;
}
</style>
