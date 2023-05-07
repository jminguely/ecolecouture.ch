export default defineNuxtConfig({
  modules: ["@nuxtjs/apollo", "@nuxt/image-edge"],

  buildModules: ["@nuxtjs/google-fonts"],

  googleFonts: {
    families: {
      "Space+Mono": true,
      Rubik: {
        wght: [100 + ".." + 900],
        ital: [100 + ".." + 900],
      },
    },
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint: "http://api.ecolecouture.test/wp/graphql",
      },
    },
  },

  css: ["~/assets/css/main.css"],

  image: {},

  vite: {
    compilerOptions: {
      isCustomElement: true,
    },
  },

  postcss: {
    plugins: {
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: true,
});
