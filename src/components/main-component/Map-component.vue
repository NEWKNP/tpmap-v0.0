<template>
    <el-col :span="8" id="map-plain" class='map-plain'></el-col>
</template>

<script>
import * as d3 from 'd3'
import {geoPath} from 'd3-geo'
import {geoAitoff} from 'd3-geo-projection'
import {mapState, mapActions} from 'vuex'

export default {
  name: 'Map-component',
  data: function () {},
  computed: {
    ...mapState({
      /* countryCommon: state => state.main.countryCommon,
      countryDynamic: state => state.main.countryDynamic,
      provinceCommon: state => state.main.provinceCommon,
      provinceDynamic: state => state.main.provinceDynamic,
      countryShape: state => state.main.countryShape,
      color: 'color' */
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
      const tempColorMap = this.color
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

      /* console.log(this.countryCommon)
      console.log(this.countryDynamic)
      console.log(this.provinceCommon)
      console.log(this.provinceDynamic)
      console.log(this.countryShape) */
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
.svg-map {
  position: absolute;
  left: 0;
}
</style>
