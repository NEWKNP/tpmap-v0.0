// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueD3 from 'vue2-d3'
import VueMaterialIcon from 'vue-material-icon'
import ElementUI from 'element-ui'
import store from './store'
import * as d3 from 'd3'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueD3)
Vue.use(ElementUI)
Vue.component(VueMaterialIcon.name, VueMaterialIcon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
  d3
})
