<template>
  <nav class="pr-3 sm:pr-5 pt-2 sm:pt-0">
    <ul class="flex flex-row gap-5">
      <li v-for="lang in navLocales" :key="lang.code">
        <NuxtLink
          v-if="lang.url"
          class="opacity-50 underline pointer-events-auto"
          :to="lang.url"
        >
          {{ lang.code }}
        </NuxtLink>
        <span v-else class="h3">{{ lang.code }}</span>
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
  return locales.value.filter((i) => {
    i.url = i.homeUrl
    if (props.availableTranslations.length > 0) {
      props.availableTranslations.filter((j) => {
        if (i.locale === j.language.locale) {
          i.url = j.uri
        }
        return j
      })
    }
    if (i.code === locale.value) {
      i.url = false
    }
    return i
  })
})
</script>
