import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
  ssr: false,

  runtimeConfig: {
    public: {
      wp: process.env.WP_URL || 'https://api.ecolecouture.ch/',
    },
  },

  modules: [
    '@nuxtjs/apollo',
    '@nuxt/image-edge',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
  ],

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

  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.API_URL,
      },
    },
  },

  css: ['~/assets/css/main.css', '~/assets/css/typography.css'],

  image: {},

  vite: {
    plugins: [eslintPlugin()],
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
