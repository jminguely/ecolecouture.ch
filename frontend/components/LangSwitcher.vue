<template>
  <nav class="pr-3 sm:pr-5 pt-2 sm:pt-0 text-sm">
    <ul class="flex flex-row gap-2">
      <li v-for="lang in navLocales" :key="lang.code">
        <NuxtLink
          v-if="lang.url"
          class="opacity-50 underline pointer-events-auto"
          :to="lang.url"
        >
          {{ lang.code }}
        </NuxtLink>
        <span v-else>{{ lang.code }}</span>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps({
  availableTranslations: {
    type: Array,
    default: () => [],
  },
})

const { locales, locale } = useI18n()

const navLocales = computed(() => {
  return locales.value.map((i) => {
    const item = { ...i, url: i.homeUrl }
    if (props.availableTranslations.length > 0) {
      props.availableTranslations.forEach((j) => {
        if (item.locale === j.language.locale) {
          item.url = j.uri
        }
      })
    }
    if (item.code === locale.value) {
      item.url = false
    }
    return item
  })
})
</script>
