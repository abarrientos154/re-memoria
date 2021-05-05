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
              <q-btn color="grey-8" glossy label="Instrucciones" style="border-radius: 25px; width: 300px" />
            </div>
        </animation-transition>
      </q-page>
    </q-page-container>
  </q-layout>
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
<style lang="sass" scoped>
</style>