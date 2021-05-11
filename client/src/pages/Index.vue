<template>
  <q-layout>
    <q-page-container class="bg-purple-1">
      <q-page class="column justify-center items-center">
        <animation-transition
            :animation-in-type="AnimationType.BOUNCEINDOWN"
            :animation-out-type="AnimationType.ROLLOUT"
          >
            <div class="animated-body" v-show="show" >
              <q-img
                src="Picture3.png"
                alt="Logo Rememoria"
                style="width: 250px"
              ></q-img>
            </div>
        </animation-transition>

        <animation-transition
            :animation-in-type="AnimationType.BOUNCEINLEFT"
            :animation-out-type="AnimationType.ROLLOUT"
          >
            <div class="animated-body" v-show="show" >
              <q-btn class="q-mb-md" color="pink" glossy label="Jugar" style="border-radius: 25px; width: 300px" to="/categorias" />
            </div>
        </animation-transition>

        <animation-transition
            :animation-in-type="AnimationType.BOUNCEINRIGHT"
            :animation-out-type="AnimationType.ROLLOUT"
          >
            <div class="animated-body" v-show="show" >
              <q-btn class="q-mb-md" color="grey-8" glossy @click="paused()" label="Instrucciones" style="border-radius: 25px; width: 300px" />
            </div>
        </animation-transition>
         <animation-transition
            :animation-in-type="AnimationType.BOUNCEINRIGHT"
            :animation-out-type="AnimationType.ROLLOUT"
          >
            <div class="animated-body" v-show="show" >
              <q-btn color="negative" glossy @click="exit()" label="Salir" style="border-radius: 25px; width: 300px" />
            </div>
        </animation-transition>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { AnimationVueTransition, AnimationVueTransitionType } from 'vue-animation'
export default {
  components: {
    [AnimationVueTransition.name]: AnimationVueTransition
  },
  name: 'PageIndex',
  data () {
    return {
      show: false,
      audio: null,
      AnimationType: AnimationVueTransitionType
    }
  },
  computed: {
    ...mapState('generals', ['audioOne'])
  },
  mounted () {
    if (this.audioOne) {
      this.audioOne.pause()
    }
      console.log('Will it play here?? lol');
      console.log('Play outside of');
      var a = new Audio(require('../../public/kazoom.mp3'))
      a.loop = true
      console.log(a,'pre')
      this.saveAudioOne(a)
      this.audioOne.play()
    this.show = true
  },
  methods: {
    verify() {
      var a = new Audio(require('../../public/kazoom.mp3'))
      a.loop = true
      console.log(a,'pre')
      this.saveAudioOne(a)
      this.audioOne.play()
    },
    ...mapMutations('generals', ['saveAudioOne']),
    paused () {
      this.audioOne.pause()
    },
    exit() {
      this.audioOne.pause()
      navigator.app.exitApp()
    }
  }
}
</script>
<style lang="sass" scoped>
</style>