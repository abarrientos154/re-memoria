<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      initial: {}
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      var obj = {
        niveles: {
          numeros: {
            nivel_1: {
              cartas: ['1.png', '2.png', '3.png'],
              status: 0,
              back: 'numeros/back.png'
            },
            nivel_2: {
              cartas: ['1.png', '2.png', '3.png', '4.png', '5.png'],
              status: 0,
              back: 'numeros/back.png'
            },
            nivel_3: {
              cartas: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png'],
              status: 0,
              back: 'numeros/back.png'
            },
            nivel_4: {
              cartas: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png'],
              status: 0,
              back: 'numeros/back.png'
            },
            nivel_5: {
              cartas: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png'],
              status: 0,
              back: 'numeros/back.png'
            }
          },
          letras: {
            nivel_1: {
              cartas: ['1.png', '2.png', '3.png'],
              status: 0,
              back: 'letras/back.png'
            },
            nivel_2: {
              cartas: ['1.png', '2.png', '3.png', '4.png', '5.png'],
              status: 0,
              back: 'letras/back.png'
            },
            nivel_3: {
              cartas: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png'],
              status: 0,
              back: 'letras/back.png'
            },
            nivel_4: {
              cartas: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png'],
              status: 0,
              back: 'letras/back.png'
            },
            nivel_5: {
              cartas: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png'],
              status: 0,
              back: 'letras/back.png'
            },
            nivel_6: {
              cartas: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png'],
              status: 0,
              back: 'letras/back.png'
            },
            nivel_7: {
              cartas: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.pg', '15.png', '16.png'],
              status: 0,
              back: 'letras/back.png'
            },
            nivel_8: {
              cartas: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.pg', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png'],
              status: 0,
              back: 'letras/back.png'
            },
            nivel_9: {
              cartas: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.pg', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png', '22.png', '23.png', '24.png'],
              status: 0,
              back: 'letras/back.png'
            },
            nivel_10: {
              cartas: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.pg', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png', '22.png', '23.png', '24.png', '25.png', '26.png', '27.png'],
              status: 0,
              back: 'letras/back.png'
            }
          },
          cuerpo: {
            nivel_1: {
              cartas: ['1.png', '2.png', '3.png'],
              status: 0,
              back: 'cuerpo/back.png'
            },
            nivel_2: {
              cartas: ['1.png', '2.png', '3.png', '4.png', '5.png'],
              status: 0,
              back: 'cuerpo/back.png'
            },
            nivel_3: {
              cartas: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'],
              status: 0,
              back: 'cuerpo/back.png'
            },
            nivel_4: {
              cartas: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png'],
              status: 0,
              back: 'cuerpo/back.png'
            },
            nivel_5: {
              cartas: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png'],
              status: 0,
              back: 'cuerpo/back.png'
            },
            nivel_6: {
              cartas: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png'],
              status: 0,
              back: 'cuerpo/back.png'
            },
            nivel_7: {
              cartas: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png'],
              status: 0,
              back: 'cuerpo/back.png'
            },
            nivel_8: {
              cartas: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png'],
              status: 0,
              back: 'cuerpo/back.png'
            },
            nivel_9: {
              cartas: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.pg'],
              status: 0,
              back: 'cuerpo/back.png'
            },
            nivel_10: {
              cartas: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.pg', '15.png', '16.png'],
              status: 0,
              back: 'cuerpo/back.png'
            }
          },
          addMazo: true,
          gestion: true,
          ordMazo: true,
          dialog: true
        }
      }
      const value = localStorage.getItem('rememoria')
      if (!value) {
        localStorage.setItem('rememoria', JSON.stringify(obj))
      }
    }
  }
}
</script>
