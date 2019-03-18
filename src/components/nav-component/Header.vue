<template>
    <el-header>
        <Nav1/>
        <Nav2/>
    </el-header>
</template>

<script>
import Nav1 from './Nav1.vue'
import Nav2 from './Nav2.vue'
export default {
  name: 'Header',
  components: {
    Nav1,
    Nav2
  }
}
</script>

<style>

</style>
