<template>
    <div class="nav2">
        <div class="in-nav2">
            <el-menu
                class="el-menu-demo"
                mode="horizontal"
                menu-trigger="click"
                unique-opened="true">
                <Dropdown-checkbox/>
                <Dropdown-years/>
                <Dropdown-province/>
                <Dropdown-amplur/>
                <Dropdown-tumbol/>
                <Dropdown-village/>
                <Download/>
            </el-menu>
        </div>
    </div>
</template>

<script>
import DropdownCheckbox from './Dropdown-checkbox.vue'
import DropdownYears from './Dropdown-years.vue'
import DropdownProvince from './Dropdown-province.vue'
import DropdownAmplur from './Dropdown-amplur.vue'
import DropdownTumbol from './Dropdown-tumbol.vue'
import DropdownVillage from './Dropdown-village.vue'
import Download from './Download.vue'
export default {
  name: 'Nav2',
  components: {
    DropdownCheckbox,
    DropdownYears,
    DropdownProvince,
    DropdownAmplur,
    DropdownTumbol,
    DropdownVillage,
    Download
  }
}
</script>

<style>
.nav2 {
    background-color: #ffffff;
    height: 2.5rem;
    box-shadow: 4px 0 8px rgba(33, 33, 33, 0.2);
}
.in-nav2 {
    width: 90%;
    margin: 0 auto;
}
</style>
