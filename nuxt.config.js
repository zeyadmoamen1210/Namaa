export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'namaa',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './assets/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '@/plugins/swiper.js', mode: "client" },
    {src: '@/plugins/element-ui.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      '@nuxtjs/i18n',
      {
        locales: [
          { code: 'ar', iso: 'ar', file: 'ar.json' },
          { code: 'en', iso: 'en', file: 'en.json' },
        ],
        strategy: 'no_prefix',
        defaultLocale: 'en',
        detectBrowserLanguage: false,
        vueI18n: {
          fallbackLocale: 'ar',
          messages: {
            ar: require('./locales/ar.json'),
            en: require('./locales/en.json'),
          },
        },
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://namaa-site.onrender.com',
    // headers: {
    //   'Access-Control-Allow-Origin': '*'
    // }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  router: {
    scrollBehavior: (to, from, savedPosition) => {
      // Check if there is a saved position
      if (savedPosition) {
        // Return the saved position
        return savedPosition;
      } else if (to.hash) {
        // Scroll to the element with the anchor ID
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ selector: to.hash });
          }, 100); // Adjust the delay if needed
        });
      } else {
        // Scroll to the top of the page
        return { x: 0, y: 0 };
      }
    },
    beforeEach: ((to, from, next) => {
      // Check if the current route has a hash
      if (from.hash) {
        // Remove the hash from the URL
        next({ path: to.path, query: to.query });
      } else {
        next();
      }
    })
  },
}
