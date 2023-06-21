<template>
  <nav>
    <NuxtLink v-for="lang in navLocales" :key="lang.code" :to="lang.url">
      {{ lang.code }}
    </NuxtLink>
  </nav>
</template>

<script setup>
const props = defineProps({
  availableTranslations: {
    type: Array,
    default: () => [],
  },
})

const { locales } = useI18n()

const switchLocalePath = useSwitchLocalePath()

const navLocales = computed(() => {
  console.log('info', locales.value, props.availableTranslations)

  return locales.value.filter((i) => {
    i.url = switchLocalePath(i.code)
    if (props.availableTranslations.length > 0) {
      props.availableTranslations.filter((j) => {
        console.log(i.locale, j.language.locale)
        if (i.locale === j.language.locale) {
          i.url = j.uri
        }
        return j
      })
    }
    return i
  })
})
</script>
