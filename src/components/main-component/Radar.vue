<template>
    <el-col id="radar-plain" class='radar-plain'>
        <v-radar
            :stats="stats"
            :polycolor="polycolor"
            :radar="radar"
            :scale="scale">
        </v-radar>
    </el-col>
</template>

<script>
import Radar from 'vue-radar'
var health = 35
var living = 28
var education = 60
var income = 40
var accessability = 65
export default {
  name: 'Radar',
  data () {
    return {
      radar: {
        size: '500', // pixel unit
        viewbox: '800', // unit used inside the svg (here 400px = 1000 unités)
        radius: '300', // same unit than above (diamètre = 900), keep the radius < (viewbox / 2)
        structure: {
          external: { // external stroke of the structure's polygon
            strokeColor: 'rgba(0, 0, 0, 1)', // color (any css format is usable (hexa, rgb, rgba...))
            strokeWidth: '3' // pixel unit
          },
          internals: { // internals stroke of the structure's polygon (one every 10%)
            strokeColor: '#76B4FF', // color (any css format is usable (hexa, rgb, rgba...))
            strokeWidth: '1' // pixel unit
          },
          average: { // average polygon (placed at 50%)
            strokeColor: '#76B4FF', // stroke color (any css format is usable (hexa, rgb, rgba...))
            strokeWidth: '1', // pixel unit
            fillColor: 'rgba(0, 0, 0, 0)' // polygon color (any css format is usable (hexa, rgb, rgba...))
          }
        },
        lines: { // lines from center to summits
          strokeColor: 'rgba(0, 0, 0, .3)', // color (any css format is usable (hexa, rgb, rgba...))
          strokeWidth: '1' // pixel unit
        }
      },
      scale: { // scales of corresponding statistic
        intelligence: 100, // key must be equal to the corresponding statistic, lowercased and without accents
        charisma: 100,
        agilty: 100,
        dexterity: 100,
        stupidness: 100
      },
      stats: [
        {
          name: 'Intelligence', // string
          value: health, // int
          shortName: 'Hl' // The two first letters are used to be display next to their corresponding summits
        },
        {
          name: 'Charisma',
          value: living,
          shortName: 'Lv'
        },
        {
          name: 'Agilty',
          value: education,
          shortName: 'Ed'
        },
        {
          name: 'Dexterity',
          value: income,
          shortName: 'In'
        },
        {
          name: 'Stupidness',
          value: accessability,
          shortName: 'Ac'
        }
      ],
      polycolor: '#7307D3' // color (any css format is usable (hexa, rgb, rgba...))
    }
  },
  components: {
    'v-radar': Radar
  }
}
</script>

<style>
.radar-plain {
    float: left;
    width: 27rem;
    height: 36rem;
}
</style>
