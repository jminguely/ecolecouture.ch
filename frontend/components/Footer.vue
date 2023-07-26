<template>
  <footer class="mt-auto p-8 bg-green">
    <nuxt-link :to="header.homeUrl || '/'">
      <img
        class="w-48 brightness-0 invert"
        src="../assets/img/logo-ecolecouture.png"
        alt="École de Couture - Lehratelier, Fribourg"
      />
    </nuxt-link>
  </footer>
</template>

<script setup>
const { locales, locale } = useI18n()

const header = reactive({
  homeUrl: locales.value.find((i) => i.code === locale.value).homeUrl,
})

watch(locale, async () => {
  header.homeUrl = locales.value.find((i) => i.code === locale.value).homeUrl
})
</script>
