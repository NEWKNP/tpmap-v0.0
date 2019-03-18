import Vue from 'vue'
import Vuex from 'vuex'
import nav from './modules/navData'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    nav
  },
  strict: debug
})
