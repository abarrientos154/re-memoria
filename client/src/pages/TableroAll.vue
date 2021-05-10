<template>
  <q-page class="column bg-deep-purple-4">
    <div>
        <q-btn flat round class="q-ma-xs" icon="keyboard_backspace" color="black" @click="back()" />
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
import { mapMutations, mapState } from 'vuex'
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
    console.log('Will it play here?? lol');
    console.log('Play outside of');
    var a = new Audio(require('../../public/turtle.mp3'))
    a.loop = true
    console.log(a,'pre')
    this.saveAudioTwo(a)
    this.audioTwo.play()
    this.show = true
  },
  computed: {
    ...mapState('generals', ['audioTwo']),
  },
  methods: {
    back () {
      this.audioTwo.pause()
      this.$router.push('/niveles/' + this.categoria + '/true')
    },
    ...mapMutations('generals', ['saveAudioTwo']),
  }
}
</script>
<style lang="sass" scoped>
</style>