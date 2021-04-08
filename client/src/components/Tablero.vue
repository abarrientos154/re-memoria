<template>
  <div class="row" >
  <q-card class="my-card" v-for="itera, key in all" :key="itera._id">
      <img :src="itera.mostrar" @click="voltear(key)">

      <q-card-actions align="right">
        <q-btn flat round color="red" icon="favorite" />
        <q-btn flat round color="teal" icon="bookmark" />
        <q-btn flat round color="primary" icon="share" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  props: {
    //all: { required: true, default: []},
    nivel: { required : true, default: '' },
    cat: { required: true, default: '' }
  },
  data () {
    return {
      form: {},
      actual: {},
      all: []
    }
  },
  mounted () {
    this.construir()
  },
  methods: {
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
        console.log(this.all)
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
          } else {
            vm.girar(param)
            vm.girar(vm.actual.cord)
          }

        }, 1500);
        return
      }else if (this.all.filter(v=> v.vuelta == true).length == 2){
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
.my-card
  width: 100%
  max-width: 300px
</style>
