<template>
    <el-col :span="8" id="map-plain" class='map-plain'></el-col>
</template>

<script>
import * as d3 from 'd3'
import {geoPath} from 'd3-geo'
import {geoAitoff} from 'd3-geo-projection'
import {mapState} from 'vuex'

export default {
  name: 'Map-component',
  data: function () {
    return {
      // countryCommon: null,
      // countryDynamic: null,
      // provinceCommon: null,
      // provinceDynamic: null
      // countryShape: null
    }
  },
  computed: {
    ...mapState({
      countryCommon: state => state.main.countryCommon,
      countryDynamic: state => state.main.countryDynamic,
      provinceCommon: state => state.main.provinceCommon,
      provinceDynamic: state => state.main.provinceDynamic,
      countryShape: state => state.main.countryShape
    })
  },
  /* created () {
    this.loadCountryCommon()
    this.loadCountryDynamic()
    this.loadProvinceCommon()
    this.loadProvinceDynamic()
    this.loadCountryShape()
  }, */
  methods: {
    /* ...mapActions([
      'loadCountryCommon',
      'loadCountryDynamic',
      'loadProvinceCommon',
      'loadProvinceDynamic',
      'loadCountryShape'
    ]), */
    renderMap: function () {
      const tempColorMap = d3.scaleLinear().domain(d3.range(0, 10)).range(d3.schemeRdYlBu[11])
      console.log(tempColorMap)

      const tempSvgMap = d3.select('.map-plain')
        .append('svg')
        .attr('class', 'svg-map')
        .style('width', '38rem')
        .style('height', '41.5rem')

      const tempProjection = geoAitoff()
        .scale(2400)
        .rotate([-100.6331, -13.2])

      const tempPath = geoPath()
        .projection(tempProjection)
      console.log(tempPath)

      const tempMapLayer = tempSvgMap.append('g')
        .attr('id', 'map-layer')
        .classed('map-layer', true)
      console.log(tempMapLayer)

      // this.countryCommon = this.$store.state.main.countryCommon
      // this.countryDynamic = this.$store.state.main.countryDynamic
      // this.provinceCommon = this.$store.state.main.provinceCommon
      // this.provinceDynamic = this.$store.state.main.provinceDynamic
      // this.countryShape = this.$store.state.main.countryShape

      // console.log(this.countryCommon)
      // console.log(this.countryDynamic)
      // console.log(this.provinceCommon)
      // console.log(this.provinceDynamic)
      console.log(this.countryShape)
    }
  },
  async mounted () {
    await this.$store.dispatch('loadCountryCommon')
    await this.$store.dispatch('loadCountryDynamic')
    await this.$store.dispatch('loadProvinceCommon')
    await this.$store.dispatch('loadProvinceDynamic')
    await this.$store.dispatch('loadCountryShape')
    await this.renderMap()
  }
}
</script>

<style>
.map-plain {
  margin-top: 1rem;
}
.svg-map {
  position: absolute;
  left: 0;
}
</style>
