<template>
  <div>
    <div class="max-w-lg mx-auto px-8 py-60">
      <h2 class="h1 lg:w-2/3">Erreur 404</h2>
      <p>La page que vous cherchez d'atteindre n'existe plus.</p>
      <nuxt-link
        class="mt-5 button button-shape-1 bg-electricblue text-white hover:bg-electricblue-darker active:bg-electricblue-lighter"
        :to="headerHomeUrl"
      >
        Retourner à l'accueil
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const { locales, locale } = useI18n()

const headerHomeUrl = computed(() => {
  return (
    locales.value.find((i) => i.code === locale.value)?.homeUrl || '/accueil'
  )
})

useHead({
  titleTemplate: 'Erreur 404 - ecolecouture.ch',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  htmlAttrs: {
    class: 'bg-white text-black',
  },
})
</script>
