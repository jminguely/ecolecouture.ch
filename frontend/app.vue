<template>
  <div class="site-wrapper" :class="{ menuOpen }">
    <Header
      :menu-open="menuOpen"
      :available-translations="availableTranslations"
      @update-menu-open="updateMenuOpen"
    />
    <main class="site-main">
      <NuxtPage @update-translations="updateAvailableTranslations" />
    </main>
  </div>
</template>

<script setup>
const menuOpen = ref(false)
const availableTranslations = ref([])

function updateMenuOpen(val) {
  menuOpen.value = val
}

function updateAvailableTranslations(translations) {
  availableTranslations.value = translations
}

useHead({
  titleTemplate: (title) => `${title} - ecolecouture.ch`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  bodyAttrs: {
    class: { 'overflow-hidden': menuOpen },
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

<style lang="postcss">
html {
  background: #ccc;
}
</style>
