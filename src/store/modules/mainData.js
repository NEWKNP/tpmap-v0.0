import * as d3 from 'd3'

const state = {
  countryCommon: null,
  countryDynamic: null,
  provinceCommon: null,
  provinceDynamic: null,
  countryShape: null,
  provinceShape: null,
  amplurShape: null
}

const getters = { }

const actions = {
  loadCountryCommon: ({ commit, state }) => {
    const mockName = 'https://www.tpmap.in.th/public/data/61/61_country_common.csv'
    d3.csv(mockName).then(function (rows) {
      console.log(mockName)
      console.log(rows)
      commit('SET_COUNTRY_COMMON', rows)
    })
  },
  loadCountryDynamic: ({ commit, state }) => {
    const mockName = 'https://www.tpmap.in.th/public/data/61/61_country_11111.csv'
    d3.csv(mockName).then(function (rows) {
      console.log(rows)
      commit('SET_COUNTRY_DYNAMIC', rows)
    })
  },
  loadProvinceCommon: ({ commit, state }) => {
    const mockName = 'https://www.tpmap.in.th/public/data/61/61_province_common.csv'
    d3.csv(mockName).then(function (rows) {
      console.log(rows)
      commit('SET_PROVINCE_COMMON', rows)
    })
  },
  loadProvinceDynamic: ({ commit, state }) => {
    const mockName = 'https://www.tpmap.in.th/public/data/61/61_province_11111.csv'
    d3.csv(mockName).then(function (rows) {
      console.log(rows)
      commit('SET_PROVINCE_DYNAMIC', rows)
    })
  },
  loadCountryShape: ({ commit, state }) => {
    const mockName = 'https://s3-ap-southeast-1.amazonaws.com/tpmap0.0/shape/prov.json'
    d3.json(mockName).then(function (rows) {
      console.log(rows)
      commit('SET_COUNTRY_SHAPE', rows)
    })
  }
}

const mutations = {
  SET_COUNTRY_COMMON (state, data) {
    state.countryCommon = data
  },
  SET_COUNTRY_DYNAMIC (state, data) {
    state.countryDynamic = data
  },
  SET_PROVINCE_COMMON (state, data) {
    state.provinceCommon = data
  },
  SET_PROVINCE_DYNAMIC (state, data) {
    state.prvinceDynamic = data
  },
  SET_COUNTRY_SHAPE (state, data) {
    state.countryShape = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
