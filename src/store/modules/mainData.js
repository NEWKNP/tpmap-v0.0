// import * as d3 from 'd3'
import axios from 'axios'
// import ShapeProvider from '@/resources/user_provider'
// import DataProvider from '@/resources/data_provider'
// const shapeService = new ShapeProvider()
// const dataService = new DataProvider()
// import prov from '../../assets/shape/prov.json'

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
  async loadCountryCommon ({commit}) {
    await axios
      .get('https://www.tpmap.in.th/public/data/61/61_country_common.csv')
      .then(response => {
        console.log(response)
        // commit('SET_COUNTRY_SHAPE', countryCommon)
      })
  },
  async loadCountryDynamic ({commit}) {
    await axios
      .get('https://www.tpmap.in.th/public/data/61/61_country_11111.csv')
      .then(mock => {
        console.log(mock)
        // commit('SET_COUNTRY_SHAPE', countryCommon)
      })
  },
  async loadProvinceCommon ({commit}) {
    await axios
      .get('https://www.tpmap.in.th/public/data/61/61_province_common.csv')
      .then(mock => {
        console.log(mock)
        // commit('SET_COUNTRY_SHAPE', countryCommon)
      })
  },
  async loadProvinceDynamic ({commit}) {
    await axios
      .get('https://www.tpmap.in.th/public/data/61/61_province_11111.csv')
      .then(r => r.data)
      .then(mock => {
        console.log(mock)
        // commit('SET_COUNTRY_SHAPE', countryCommon)
      })
  },
  async loadCountryShape ({commit}) {
    await axios
      .get('http://localhost:3000/home/')
      .then(r => r.data)
      .then(shape => {
        console.log(shape.data)
        commit('SET_COUNTRY_SHAPE', shape.data)
      })
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
