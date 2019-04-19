import * as d3 from 'd3'
import prov from '../../assets/shape/prov.json'

const state = {
  countryCommon: null,
  countryDynamic: null,
  provinceCommon: null,
  provinceDynamic: null,
  countryShape: null,
  provinceShape: null,
  amplurShape: null
  // colorMap: d3.scaleLinear().domain(d3.range(0, 10)).range(d3.schemeRdYlBu[11])
  // colorMap: 'color'
}

const getters = {
  getCountryCommon: state => state.countryCommon,
  getCountryDynamic: state => state.countryDynamic,
  getProvinceCommon: state => state.provinceCommon,
  getProvinceDynamic: state => state.provinceDynamic,
  getCountryShape: state => state.countryShape
}

const actions = {
  loadCountryCommon: ({ commit, state }) => {
    const mockName = 'https://www.tpmap.in.th/public/data/61/61_country_common.csv'
    d3.csv(mockName).then(function (rows) {
      // console.log(rows[0])
      commit('SET_COUNTRY_COMMON', rows[0])
    })
  },
  loadCountryDynamic: ({ commit, state }) => {
    const mockName = 'https://www.tpmap.in.th/public/data/61/61_country_11111.csv'
    d3.csv(mockName).then(function (rows) {
      // console.log(rows[0])
      commit('SET_COUNTRY_DYNAMIC', rows[0])
    })
  },
  loadProvinceCommon: ({ commit, state }) => {
    const mockName = 'https://www.tpmap.in.th/public/data/61/61_province_common.csv'
    d3.csv(mockName).then(function (rows) {
      // console.log(rows)
      commit('SET_PROVINCE_COMMON', rows)
    })
  },
  loadProvinceDynamic: ({ commit, state }) => {
    const mockName = 'https://www.tpmap.in.th/public/data/61/61_province_11111.csv'
    d3.csv(mockName).then(function (rows) {
      // console.log(rows)
      commit('SET_PROVINCE_DYNAMIC', rows)
    })
  },
  loadCountryShape: ({ commit, state }) => {
    /*
    const Pool = require('pg').Pool
    const pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'geothdb',
      password: 'postgres',
      port: 5432
    })
    const sql = `SELECT prov_code AS id,
                  prov_namt AS name,
                  geom
                 FROM prov;`
    pool.query(sql).then((data) => {
      commit('SET_COUNTRY_SHAPE', data)
    })
    */
    commit('SET_COUNTRY_SHAPE', prov.json)
  }
}

const mutations = {
  SET_COUNTRY_COMMON (state, data) {
    console.log(data)
    state.countryCommon = data
  },
  SET_COUNTRY_DYNAMIC (state, data) {
    console.log(data)
    state.countryDynamic = data
  },
  SET_PROVINCE_COMMON (state, data) {
    console.log(data)
    state.provinceCommon = data
  },
  SET_PROVINCE_DYNAMIC (state, data) {
    console.log(data)
    state.prvinceDynamic = data
  },
  SET_COUNTRY_SHAPE (state, data) {
    console.log(data)
    state.countryShape = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
