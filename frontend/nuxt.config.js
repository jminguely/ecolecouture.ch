import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
  compatibilityDate: '2026-10-07',
  ssr: false,

  runtimeConfig: {
    apiUrl: process.env.API_URL,
    public: {
      wp: process.env.WP_URL || 'https://api.ecolecouture.ch/',
    },
  },

  modules: [
    '@nuxtjs/apollo',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
  ],

  i18n: {
    vueI18n: '../i18n.config.js',
    detectBrowserLanguage: false,
    langDir: '',
    lazy: true,
    locale: 'FR',
    defaultLocale: 'FR',
    locales: [
      { code: 'FR', iso: 'fr-CH', locale: 'fr_CH', file: 'fr.json', homeUrl: '/accueil' },
      { code: 'DE', iso: 'de-CH', locale: 'de_CH', file: 'de.json', homeUrl: '/de/startseite' },
    ],
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.API_URL,
        browserHttpEndpoint: '/api/graphql',
        defaultOptions: {
          query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all',
          },
          watchQuery: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all',
          },
        },
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
    '/de': { redirect: '/de/startseite' },
  },
})
