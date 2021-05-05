<template>
  <q-page class="column justify-center items-center bg-purple-1">
    <div class="absolute-start absolute-top" style="width:100%">
        <q-btn flat round class="q-ma-xs" icon="keyboard_backspace" color="black" @click="$router.push('/inicio')" />
    </div>

    <div class="row justify-around q-pa-md">
        <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 q-mb-md">
            <animation-transition
                :animation-in-type="AnimationType.BOUNCEINLEFT"
                :animation-out-type="AnimationType.ROLLOUT"
            >
                <div class="animated-body" v-show="show" >
                    <q-card clickable v-ripple class="q-ma-md shadow-10" style="border-radius: 25px"
                    @click="$router.push('/niveles/numeros')">
                        <img src="Logo de numeros.png" style="width:100%; border-radius: 25px">
                    </q-card>
                </div>
            </animation-transition>
        </div>

        <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 q-mb-md">
            <animation-transition
                :animation-in-type="AnimationType.BOUNCEINDOWN"
                :animation-out-type="AnimationType.ROLLOUT"
            >
                <div class="animated-body" v-show="show" >
                    <q-card clickable v-ripple class="q-ma-md shadow-10" style="border-radius: 25px"
                    @click="$router.push('/niveles/letras')">
                        <img src="Logo de Letras.png" style="width:100%; border-radius: 25px">
                    </q-card>
                </div>
            </animation-transition>
        </div>

        <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 q-mb-md">
            <animation-transition
                :animation-in-type="AnimationType.BOUNCEINRIGHT"
                :animation-out-type="AnimationType.ROLLOUT"
            >
                <div class="animated-body" v-show="show" >
                    <q-card clickable v-ripple class="q-ma-md shadow-10" style="border-radius: 25px"
                    @click="$router.push('/niveles/cuerpo')">
                        <img src="Logo de partes del cuerpo.jpg" style="width:100%; border-radius: 25px">
                    </q-card>
                </div>
            </animation-transition>
        </div>
    </div>
  </q-page>
</template>

<script>
import { AnimationVueTransition, AnimationVueTransitionType } from 'vue-animation'
export default {
  components: {
    [AnimationVueTransition.name]: AnimationVueTransition
  },
  name: 'PageIndex',
  data () {
    return {
      show: false,
      AnimationType: AnimationVueTransitionType
    }
  },
  mounted () {
    this.show = true
  },
  methods: {
  }
}
</script>
<style scoped lang="scss">
</style>