<template>
  <div class="site-wrapper flex flex-col min-h-screen" :class="{ menuOpen }">
    <ButtonClippath />
    <Header
      :menu-open="menuOpen"
      :available-translations="availableTranslations"
      @update-menu-open="updateMenuOpen"
    />
    <main class="site-main">
      <NuxtPage @update-translations="updateAvailableTranslations" />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import ButtonClippath from './components/ClipPathTemplates.vue'

const menuOpen = ref(false)
const bodyOverflowHidden = ref(false)
const availableTranslations = ref([])

function updateMenuOpen(val) {
  menuOpen.value = val
  setTimeout(() => {
    bodyOverflowHidden.value = val
  }, 300)
}

function updateAvailableTranslations(translations) {
  availableTranslations.value = translations
}

useHead({
  titleTemplate: (title) => `${title} - ecolecouture.ch`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  htmlAttrs: {
    class: 'bg-white text-black',
  },
  bodyAttrs: {
    class: { 'overflow-hidden': bodyOverflowHidden },
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
