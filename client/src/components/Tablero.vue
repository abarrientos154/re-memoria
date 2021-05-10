<template>
  <div class="row justify-around" >
    <div class="col-xs-4 col-sm-3 col-md-2 col-lg-2 col-xl-2" v-for="itera, key in all" :key="itera._id">
      <q-card clickable v-ripple class="q-ma-md shadow-10" style="border-radius: 15px">
        <img :src="itera.mostrar" @click="voltear(key)" style="border-radius: 15px">
      </q-card>
    </div>

    <q-dialog v-model="endGame" persistent>
      <q-card flat class="my-card bg-transparent column justify-center items-center q-pa-md" style="width:90%">
        <img src="endgame.png" style="width: 350px; border-radius: 15px">
        <div class="row justify-around q-gutter-md q-mt-md" style="width:100%">
          <q-btn color="pink" glossy label="Rejugar" style="border-radius: 25px; width: 200px"
          @click="construir(), endGame = false" />
          <q-btn color="orange" glossy label="Continuar" style="border-radius: 25px; width: 200px"
          @click="back()" />
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  props: {
    //all: { required: true, default: []},
    nivel: { required : true, default: '' },
    cat: { required: true, default: '' }
  },
  data () {
    return {
      endGame: false,
      status: 0,
      form: {},
      actual: {},
      all: []
    }
  },
  mounted () {
    this.construir()
  },
  computed: {
    ...mapState('generals', ['audioTwo']),
  },
  methods: {
    back () {
      this.audioTwo.pause()
      this.$router.push('/niveles/' + this.cat + '/true')
    },
    shuffle (a) {
      a.sort(() => Math.random() - 0.5);
      return a
    },
    construir () {
      const value = localStorage.getItem('rememoria')
      if (value) {
        var data = JSON.parse(value).niveles[this.cat][this.nivel].cartas
        data = data.map(v => {
           var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ2346789";
           var id = "";
          for (let i=0; i<20; i++) id +=caracteres.charAt(Math.floor(Math.random()*caracteres.length)); 
          console.log(id)
          return {
            _id: id,
            id: v.split('.')[0],
            front: this.cat + '/' + v,
            back: this.cat + '/back.png',
            mostrar: this.cat + '/back.png',
            vuelta: false
          }
        })
        var copy = []
        for (let x = 0; x < data.length; x++) {
          var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ2346789";
           var id = "";
          for (let i=0; i<20; i++) id +=caracteres.charAt(Math.floor(Math.random()*caracteres.length)); 
          var pre = JSON.parse(JSON.stringify(data[x]))
          pre._id = id
          copy.push(pre)
        }
        data = data.concat(copy)
        this.all = this.shuffle(data)
        console.log('todo', this.all)
      }
    },
    girar (param) {
      if (this.all[param].vuelta) {
        this.all[param].mostrar = this.all[param].back
      } else {
        this.all[param].mostrar = this.all[param].front
      }
      this.all[param].vuelta = !this.all[param].vuelta
    },
    voltear (param) {
      if (this.all.filter(v=> v.vuelta == true).length == 1){
        console.log(this.all[param], this.actual)
        if (this.all[param]._id == this.actual._id){
          this.girar(param)
          return
        }
        this.girar(param)
        var vm = this
        setTimeout(function(){
          console.log(vm.actual, param, vm.all)
          if (vm.all[param].id == vm.actual.id) {
            vm.all = vm.all.filter(v => v.id != vm.actual.id)
            if (vm.all.length === 0) {
              const value = localStorage.getItem('rememoria')
              var data = JSON.parse(value)
              data.niveles[vm.cat][vm.nivel].status =  1
              localStorage.setItem('rememoria', JSON.stringify(data))
              vm.endGame = true
            }
          } else {
            vm.girar(param)
            vm.girar(vm.actual.cord)
          }

        }, 1500);
        return
      }else if (this.all.filter(v=> v.vuelta == true).length == 2) {
        return
      } else {
        this.actual = this.all[param]
        this.actual.cord = param
      }
      console.log(param, this.all[param])
      this.girar(param)
    }
  }
}
</script>
<style lang="sass" scoped>
</style>
