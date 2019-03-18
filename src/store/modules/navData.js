const state = {
  dimensionNum: ['1', '1', '1', '1', '1'],
  year: 2561
}

const getters = { }

const actions = {
  setDimension: ({ commit, state }, payload) => {
    commit('SET_DIMENSION_NUMBER', payload)
  },
  setYear: ({ commit, state }, payload) => {
    commit('SET_YEAR_NUMBER', payload)
  }
}

const mutations = {
  SET_DIMENSION_NUMBER (state, payload) {
    state.dimensionNum = payload
  },
  SET_YEAR_NUMBER (state, payload) {
    state.year = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
