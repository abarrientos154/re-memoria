<template>
  <q-page class="column justify-center items-center bg-purple-1">
    <div class="absolute-start absolute-top" style="width:100%">
        <q-btn flat round class="q-ma-xs" icon="keyboard_backspace" color="black" @click="$router.push('/categorias')" />
    </div>

    <div class="row justify-center q-px-lg items-center" style="width:100%">
      <animation-transition
        :animation-in-type="AnimationType.ZOOMIN"
        :animation-out-type="AnimationType.ROLLOUT"
      >
        <div class="animated-body" v-show="show" >
          <q-timeline :layout="layout" color="red">
            <q-timeline-entry heading>
              Niveles
            </q-timeline-entry>

            <q-timeline-entry
              clickable v-ripple
              v-for="(value, name, index) in niveles" :key="index"
              :title="'Nivel ' + (index + 1)"
              :side=" index % 2 == 0 ? 'left' : 'right'"
              :color="index + 1 !== 1 ? niveles['nivel_' + (index)].status === 1 ? 'orange' : 'grey' : 'orange'"
              :icon="index + 1 !== 1 ? niveles['nivel_' + (index)].status === 1 ? 'star' : 'lock' : 'star'"
              @click="name === 'nivel_1' ? $router.push('/tablero/'+ruta+'/'+name) : niveles['nivel_' + (index)].status === 1 ? $router.push('/tablero/'+ruta+'/'+name) : ejecutar(index)"
            >
            </q-timeline-entry>
          </q-timeline>
        </div>
      </animation-transition>
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
      AnimationType: AnimationVueTransitionType,
      ruta: this.$route.params.ruta,
      niveles: {}
    }
  },
  computed: {
    layout () {
      return this.$q.screen.lt.sm ? 'loose' : (this.$q.screen.lt.md ? 'loose' : 'loose')
    }
  },
  mounted () {
    this.show = true
    this.getNiveles()
  },
  methods: {
    getNiveles () {
      const value = localStorage.getItem('rememoria')
      if (value) {
        this.niveles = JSON.parse(value).niveles[this.ruta]
        console.log(this.niveles)
      }
    }
  }
}
</script>
<style scoped lang="scss">
</style>