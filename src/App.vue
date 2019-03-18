<template>
  <div id="app">
    <!--
    <img src="./assets/logo.png">
    <router-view/>
    -->
    <el-container>
      <Header/>
      <Main/>
    </el-container>
  </div>
</template>

<script>
import Header from './components/nav-component/Header.vue'
import Main from './components/main-component/Main.vue'
export default {
  name: 'App',
  components: {
    Header,
    Main
  }
}
</script>

<style>
#app {
  color: #616161;
  font-family: "Noto Sans", "Noto Sans Thai", "Helvetica Neue", "Helvetica", "Thonburi", "Tahoma", sans-serif !important;
  line-height: 1.5;
  font-size: 1.4rem;
  font-weight: normal;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body {
  margin: 0;
  padding: 0;
}
img, embed, object, audio, video {
    height: auto;
    max-width: 100%;
}
</style>
