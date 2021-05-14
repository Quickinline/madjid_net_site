export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  server: {
    host: '0.0.0.0',
    port: 3000
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Madjid Net',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Vôtre solution pour le nettoyage, À votre service pour des entretiens périodiques et ponctuels de tout vos locaux' },

      // facebook
      { property: 'og:title', content: 'Madjid Net' },
      { property: 'og:description', content: 'Vôtre solution pour le nettoyage, À votre service pour des entretiens périodiques et ponctuels de tout vos locaux' },
      { property: 'og:image', content: 'http://madjid-algerie.com/madjid-net.png' },
      { property: 'og:image:secure_url', content: 'https://madjid-algerie.com/madjid-net.png' },
      { property: 'og:locale', content: 'fr' },
      { property: 'og:type', content: 'website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://madjid-algerie.com' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/globalVars.js'
    // '~/plugins/holder.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
