import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Frontend',
    title: 'Frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },,
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap'
      }
    ]
  },

  css: [
    '@/assets/scss/_global',
    '@/assets/scss/_variables'
  ],

  plugins: [
    {
      src: '@/plugins/composition-api'
    },
    {
      src: '@/plugins/vue-typer',
      ssr: false
    }
  ],

  components: true,

  buildModules: [
  ],

  modules: [
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  build: {
  }
}
