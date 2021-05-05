<template>
  <q-page class="column bg-deep-purple-4">
    <div>
        <q-btn flat round class="q-ma-xs" icon="keyboard_backspace" color="black" @click="$router.push('/niveles/' + categoria)" />
    </div>

    <animation-transition
      :animation-in-type="AnimationType.ZOOMIN"
      :animation-out-type="AnimationType.ROLLOUT"
    >
      <div class="animated-body" v-show="show" >
        <tablero :nivel="nivel" :cat="categoria"></tablero>
      </div>
    </animation-transition>
  </q-page>
</template>

<script>
import { AnimationVueTransition, AnimationVueTransitionType } from 'vue-animation'
import Tablero from '../components/Tablero.vue'
export default {
  components: { Tablero, [AnimationVueTransition.name]: AnimationVueTransition },
  name: 'PageIndex',
  data () {
    return {
      show: false,
      AnimationType: AnimationVueTransitionType,
      nivel: this.$route.params.nivel,
      categoria: this.$route.params.cat
    }
  },
  mounted () {
    this.show = true
  },
  methods: {
  }
}
</script>
<style lang="sass" scoped>
</style>