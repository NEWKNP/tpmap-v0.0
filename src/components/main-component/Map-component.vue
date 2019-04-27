<template>
    <el-col :span="8" id="map-plain" class='map-plain'></el-col>
</template>

<script>
// import * as d3 from 'd3'
// import {geoPath} from 'd3-geo'
// import {geoAitoff} from 'd3-geo-projection'
// import {mapState} from 'vuex'

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
    /* ...mapState({
      countryCommon: state => state.main.countryCommon,
      countryDynamic: state => state.main.countryDynamic,
      provinceCommon: state => state.main.provinceCommon,
      provinceDynamic: state => state.main.provinceDynamic,
      countryShape: state => state.main.countryShape
    }) */
  },
  created () {
    /* this.loadCountryCommon()
    this.loadCountryDynamic()
    this.loadProvinceCommon()
    this.loadProvinceDynamic()
    this.loadCountryShape() */
  },
  methods: {
    /* ...mapActions([
      'loadCountryCommon',
      'loadCountryDynamic',
      'loadProvinceCommon',
      'loadProvinceDynamic',
      'loadCountryShape'
    ]), */
    /* renderMap: function () {
      const tempSvgMap = d3.select('.map-plain')
        .append('svg')
        .attr('class', 'svg-map')
        .style('width', '38rem')
        .style('height', '41.5rem')

      const tempProjection = geoAitoff()
        .scale(190)
        .rotate([-100.6331, -13.2])
        .translate([300, 320])

      const tempPath = geoPath()
        .projection(tempProjection)

      const tempMapLayer = tempSvgMap.append('g')
        .attr('id', 'map-layer')
        .classed('map-layer', true)
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
      tempMapLayer.append('g')
        .attr('class', 'cont hidden')
        .selectAll('map-layer')
        .data(this.countryShape)
        .enter()
        .append('path')
        .attr('d', tempPath)
        .style('fill', this.fillP())
        .style('stroke', '#eeeeee')
        .on('mouseover', this.mouseoverP())
        .on('mouseout', this.mouseoutP())
    },
    */
    /*
    fillP: function (d) {
      const tempColorMap = d3.scaleLinear().domain(d3.range(0, 2)).range(['#F8D5CE', '#B81246'])
      console.log(d)
      return tempColorMap(1)
    },
    mouseoverP: function (d) {
      d3.select(this).style('fill', d3.rgb(this.fillP(d)).darker())
    },
    mouseoutP: function (d) {
      d3.select(this).style('fill', this.fillP(d))
    }
    */
  },
  /* async mounted () {
    await this.$store.dispatch('loadCountryCommon')
    await this.$store.dispatch('loadCountryDynamic')
    await this.$store.dispatch('loadProvinceCommon')
    await this.$store.dispatch('loadProvinceDynamic')
    await this.$store.dispatch('loadCountryShape')
    await this.renderMap()
  } */
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
