<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
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
      localStorage.setItem('rememoria', JSON.stringify(obj))
    }
  }
}
</script>
