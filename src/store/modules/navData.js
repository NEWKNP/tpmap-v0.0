const state = {
  dimensionNum: 5
}

const getters = { }

const actions = {
  increaseDimension: ({ commit, state }, payload) => {
    commit('INCREASE_DIMENSION_NUMBER')
  },
  decreaseDimension: ({ commit, state }, payload) => {
    commit('DECREASE_DIMENSION_NUMBER')
  }
}

const mutations = {
  INCREASE_DIMENSION_NUMBER (state, payload) {
    state.dimensionNum++
  },
  DECREASE_DIMENSION_NUMBER (state, payload) {
    state.dimensionNum--
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
