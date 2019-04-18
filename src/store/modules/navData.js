const state = {
  dimensionString: '11111',
  year: '2561',
  pvID: '10',
  amID: '1000',
  tbID: '100000',
  vlID: '1000000000',
  prov_name: 'ทั้งประเทศ',
  amp_name: 'ทุกอำเภอ',
  tb_name: 'ทุกตำบล',
  vl_name: 'ทุกหมู่บ้าน',
  am_display: 'true',
  tb_display: 'true',
  vl_display: 'true'
}

const getters = {
  getDimensionString: state => state.dimensionString,
  getYear: state => state.year
}

const actions = {
  setDimension: ({ commit, state }, payload) => {
    commit('SET_DIMENSION_NUMBER', payload)
  },
  setYear: ({ commit, state }, payload) => {
    commit('SET_YEAR_NUMBER', payload)
  },
  setPVID: ({ commit, state }, payload) => {
    commit('SET_PV_ID_NUMBER', payload)
  },
  setAMID: ({ commit, state }, payload) => {
    commit('SET_AM_ID_NUMBER', payload)
  },
  setTBID: ({ commit, state }, payload) => {
    commit('SET_TB_ID_NUMBER', payload)
  },
  setVLID: ({ commit, state }, payload) => {
    commit('SET_VL_ID_NUMBER', payload)
  },
  setPVName: ({ commit, state }, payload) => {
    commit('SET_PV_NAME', payload)
  },
  setAMName: ({ commit, state }, payload) => {
    commit('SET_AM_NAME', payload)
  },
  setTBName: ({ commit, state }, payload) => {
    commit('SET_TB_NAME', payload)
  },
  setVLName: ({ commit, state }, payload) => {
    commit('SET_VL_NAME', payload)
  },
  setAmIsHidden: ({ commit, state }, payload) => {
    commit('SET_AMP_IS_HIDDEN', payload)
  },
  setTbIsHidden: ({ commit, state }, payload) => {
    commit('SET_TB_IS_HIDDEN', payload)
  },
  setVlIsHidden: ({ commit, state }, payload) => {
    commit('SET_VL_IS_HIDDEN', payload)
  }
}

const mutations = {
  SET_DIMENSION_NUMBER (state, payload) {
    console.log(payload)
    state.dimensionString = payload[0] + payload[1] + payload[2] + payload[3] + payload[4]
  },
  SET_YEAR_NUMBER (state, payload) {
    console.log(payload)
    state.year = payload
  },
  SET_PV_ID_NUMBER (state, payload) {
    console.log(payload)
    state.pvID = payload
  },
  SET_AM_ID_NUMBER (state, payload) {
    console.log(payload)
    state.amID = payload
  },
  SET_TB_ID_NUMBER (state, payload) {
    console.log(payload)
    state.tbID = payload
  },
  SET_VL_ID_NUMBER (state, payload) {
    console.log(payload)
    state.vlID = payload
  },
  SET_PV_NAME (state, payload) {
    console.log(payload)
    state.prov_name = payload
  },
  SET_AM_NAME (state, payload) {
    console.log(payload)
    state.amp_name = payload
  },
  SET_TB_NAME (state, payload) {
    console.log(payload)
    state.tb_name = payload
  },
  SET_VL_NAME (state, payload) {
    console.log(payload)
    state.vl_name = payload
  },
  SET_AMP_IS_HIDDEN (state, payload) {
    console.log(payload)
    state.am_display = payload
  },
  SET_TB_IS_HIDDEN (state, payload) {
    console.log(payload)
    state.tb_display = payload
  },
  SET_VL_IS_HIDDEN (state, payload) {
    console.log(payload)
    state.vl_display = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
