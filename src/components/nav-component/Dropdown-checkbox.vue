<template>
    <div class="nav-left nav-item2 cb-1">
        <div class="label text needsclick">ค่าดัชนี ★</div>
        <el-submenu index="1" class="">
            <template slot="title">dimensionNum</template>
            <el-menu-item index="1-1">
                <el-checkbox-group v-model="checkList">
                    <el-checkbox
                    v-for="d in dimensions"
                    v-on:click="changeDimension"
                    :label="d"
                    :key="d">
                    {{d}}
                    </el-checkbox>
                </el-checkbox-group>
            </el-menu-item>
        </el-submenu>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
const dimensionOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen', 'Mongol']
export default {
  name: 'Dropdown-checkbox',
  computed: {
    ...mapState({
      dimensionNum: state => state.dimensionNum
    }),
    checkList: dimensionOptions,
    dimensions: dimensionOptions
  },
  methods: {
    ...mapActions({
      increaseDimension: 'navData/increaseDimension',
      decreaseDimension: 'navData/decreaseDimension'
    }),
    changeDimension: function (event) {
      console.log(event)
    }
  }
}
</script>

<style>
.nav-left {
    float: left;
}
.nav-item2 {
    font-size: inherit;
    height: inherit;
    padding: 0.5rem 0.75rem;
}
.cb-1 {
    background-color: #ffdc00;
}
.cb-1 .text {
    color: #757575;
}
.cb-1 .label {
    color: #9e9e9e;
    font-size: 1rem;
    font-weight: normal;
    text-align: left;
    margin: 0;
}
.label {
    color: #363636;
    display: block;
    font-size: 1.6rem;
    font-weight: bold;
}
</style>
