<template>
    <el-main>
      <el-row>
        <el-col :span="8" id="map-plain" class='map-plain'></el-col>
        <el-col :span="16"></el-col>
      </el-row>
    </el-main>
</template>

<script>
import * as d3 from 'd3'
import {geoPath} from 'd3-geo'
import {geoAitoff} from 'd3-geo-projection'
import {mapState, mapActions} from 'vuex'

export default {
  name: 'Main',
  data: function () {},
  computed: {
    ...mapState({
      // countryCommon: state => state.main.countryCommon,
      // countryDynamic: state => state.main.countryDynamic,
      // provinceCommon: state => state.main.provinceCommon,
      // provinceDynamic: state => state.main.provinceDynamic,
      // countryShape: state => state.main.countryShape
    })
  },
  created: function () {
    this.loadCountryCommon()
    this.loadCountryDynamic()
    this.loadProvinceCommon()
    this.loadProvinceDynamic()
    this.loadCountryShape()
  },
  methods: {
    ...mapActions([
      'loadCountryCommon',
      'loadCountryDynamic',
      'loadProvinceCommon',
      'loadProvinceDynamic',
      'loadCountryShape'
    ]),
    renderMap: function () {
      const tempColorMap = d3.scaleLinear()
        .domain(d3.range(0, 10))
        .range(d3.schemeRdYlBu[11])
      console.log(tempColorMap)

      const tempSvgMap = d3.select('.map-plain')
        .append('svg')
        .attr('class', 'svg-map')
        .style('width', '30rem')
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
    }
  },
  mounted: function () {
    this.renderMap()
  }
}
</script>

<style>
.map-plain {
  margin-top: 1rem;
}
</style>
