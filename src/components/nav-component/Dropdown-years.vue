<template>
    <div class="nav-left nav-item2">
        <el-submenu index="2">
            <div class="label text needsclick">ข้อมูลประจำปี</div>
            <template slot="title">Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-submenu index="2-4">
            <template slot="title">item four</template>
            <el-menu-item index="2-4-1">item one</el-menu-item>
            <el-menu-item index="2-4-2">item two</el-menu-item>
            <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-submenu>
        </el-submenu>
    </div>
</template>

<script>
export default {
  name: 'Dropdown-years'
}
</script>

<style>

</style>
