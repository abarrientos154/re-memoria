<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
    <q-btn color="amber" glossy label="Amber" @click="" />
    <tablero :nivel="'nivel_5'" :cat="'cuerpo'"></tablero>
   
  </q-page>
</template>

<script>
import Tablero from '../components/Tablero.vue'
export default {
  components: { Tablero },
  name: 'PageIndex',
  data () {
    return {
      all: {},
      actual: {}
    }
  },
  methods: {
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>