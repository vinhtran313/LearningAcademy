export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Client',
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
      { rel: 'icon', type: 'image/x-icon', href: '/media/logoweb.png' }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://api.futureacademy.pw/v1'
    // baseURL: 'http://66.42.52.229/v1'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/'
    },
    strategies: {
      local: {
        token: {
          property: 'tokens.access.token',
          // global: true,
          // required: true,
          type: 'Bearer'
        },
        user: {
          property: false,
          autoFetch: true,
        },
        endpoints: {
          login: { url: '/auth/login', method: 'post' },
          logout: { url: '/auth/logout', method: 'post' },
          user: false,
        }
      }
    }
  },
  server: {
    port: 8000
  }
}
