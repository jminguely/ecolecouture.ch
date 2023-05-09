import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
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
    locale: 'fr',
    defaultLocale: 'fr',
    locales: [
      { code: 'fr', iso: 'fr-CH' },
      { code: 'de', iso: 'de-CH' },
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
        httpEndpoint: 'http://api.ecolecouture.test/wp/graphql',
      },
    },
  },

  css: ['~/assets/css/main.css'],

  image: {},

  vite: {
    plugins: [eslintPlugin()],
    compilerOptions: {
      isCustomElement: true,
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
})
