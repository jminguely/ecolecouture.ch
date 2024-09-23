<template>
  <div class="site-wrapper flex flex-col min-h-screen" :class="{ menuOpen }">
    <ButtonClippath />
    <Header
      :menu-open="menuOpen"
      :available-translations="availableTranslations"
      @update-menu-open="updateMenuOpen"
    />
    <main class="site-main">
      <div class="max-w-lg mx-auto px-8 py-60">
        <h2 class="h1 lg:w-2/3">Erreur 404</h2>
        <p>La page que vous cherchez d'atteindre n'existe plus.</p>
        <nuxt-link
          class="mt-5 button button-shape-1 bg-electricblue text-white hover:bg-electricblue-darker active:bg-electricblue-lighter"
          :to="header.homeUrl || '/accueil'"
        >
          Retourner à l'accueil
        </nuxt-link>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import ButtonClippath from './components/ClipPathTemplates.vue'

const { locales, locale } = useI18n()

const menuOpen = ref(false)
const availableTranslations = ref([])

function updateMenuOpen(val) {
  menuOpen.value = val
}

const header = reactive({
  homeUrl: locales.value.find((i) => i.code === locale.value).homeUrl,
})

watch(locale, async () => {
  header.homeUrl = locales.value.find((i) => i.code === locale.value).homeUrl
})

useHead({
  titleTemplate: (title) => `${title} - ecolecouture.ch`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  htmlAttrs: {
    class: 'bg-white text-black',
  },

  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Description of the page',
    },
  ],
})
</script>
