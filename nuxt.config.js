export default {
  // target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Happy Cloud Store',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'Shop your next fanny pack on our shop' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/smoke.ico' }
    ],
    script: [
      { src: 'https://kit.fontawesome.com/279a924261.js', crossorigin: 'anonymous' }
    ]

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/tailwind.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/splide.js', mode: 'client' }
  ],

  // tailwindcss: {
  //   cssPath: '~/assets/css/tailwind.css'
  // },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8'
    // 'vue-ssr-carousel/nuxt'
    // '@nuxtjs/snipcart'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],
  // devServerHandlers: [],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://strapi-gypsy-store.herokuapp.com/api/'
    // baseURL: `https://${process.env.HEROKU_APP_NAME}.herokuapp.com:${process.env.PORT}/api/`
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  env: {
    // storeUrl: `https://${process.env.HEROKU_APP_NAME}.herokuapp.com:${process.env.PORT}/`,
    // API_URL: `https://${process.env.HEROKU_APP_NAME}.herokuapp.com:${process.env.PORT}/`
    storeUrl: 'https://strapi-gypsy-store.herokuapp.com/',
    API_URL: 'https://strapi-gypsy-store.herokuapp.com/'
    // snipcart_key: 'YWEyZjgwYzItOTYxNC00Mzc4LTgzODMtZGJmOTY5ODM1NzRhNjM3ODk2OTEwOTU0MDYxNzk4'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },

  generate: {
    fallback: true
  }
}
