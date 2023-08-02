import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
  ssr: false,

  modules: [
    '@nuxtjs/apollo',
    '@nuxt/image-edge',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
  ],

  buildModules: ['@nuxtjs/google-fonts'],

  i18n: {
    vueI18n: './i18n.config.js',
    detectBrowserLanguage: false,
    locale: 'FR',
    defaultLocale: 'FR',
    locales: [
      { code: 'FR', iso: 'fr-CH', locale: 'fr_CH', homeUrl: '/accueil' },
      { code: 'DE', iso: 'de-CH', locale: 'de_CH', homeUrl: '/de/wilkommen' },
    ],
  },

  googleFonts: {
    families: {
      'Space+Mono': true,
      Rubik: {
        wght: [100 + '..' + 900],
        ital: [100 + '..' + 900],
      },
    },
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.API_URL,
      },
    },
  },

  css: ['~/assets/css/main.css'],

  image: {},

  vite: {
    plugins: [eslintPlugin()],
    compilerOptions: {
      isCustomElement: (tag) => ['swiper', 'swiper-slide'].includes(tag),
    },
  },

  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  components: true,

  routeRules: {
    '/': { redirect: '/accueil' },
    '/de': { redirect: '/de/wilkommen' },
  },
})
