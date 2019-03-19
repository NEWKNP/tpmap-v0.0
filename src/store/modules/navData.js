const state = {
  dimensionString: '11111',
  year: '2561',
  ID: '10'
}

const getters = {
  getDimensionString: state => state.dimensionString
}

const actions = {
  setDimension: ({ commit, state }, payload) => {
    commit('SET_DIMENSION_NUMBER', payload)
  },
  setYear: ({ commit, state }, payload) => {
    console.log(payload)
    commit('SET_YEAR_NUMBER', payload)
  },
  setID: ({ commit, state }, payload) => {
    console.log(payload)
    commit('SET_ID_NUMBER', payload)
  }
}

const mutations = {
  SET_DIMENSION_NUMBER (state, payload) {
    state.dimensionString = payload[0] + payload[1] + payload[2] + payload[3] + payload[4]
  },
  SET_YEAR_NUMBER (state, payload) {
    state.year = payload
  },
  SET_ID_NUMBER (state, payload) {
    state.ID = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
