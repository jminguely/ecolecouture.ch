<template>
  <div>
    <button
      id="menuToggle"
      class="menuToggle md:hidden"
      @click="emit('toggleMenu')"
    >
      ≡
    </button>
    <NuxtLink v-for="lang in navLocales" :key="lang.code" :to="lang.url">
      {{ lang.code }}
    </NuxtLink>
    <p>Foo: {{ availableTranslations }}</p>
    <p>Welcome: {{ $t('welcome') }}</p>
    <div class="sidebar">
      <div class="md:block" :class="[menuOpen ? 'block' : 'hidden']">
        <nuxt-link to="/"> Home </nuxt-link>
        <nuxt-link to="/accueil"> Accueil </nuxt-link>
        <nuxt-link to="/test"> Test </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLangStore } from '@/stores/lang'

const props = defineProps({
  menuOpen: Boolean,
  availableTranslations: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['toggleMenu'])

const store = useLangStore()

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const navLocales = computed(() => {
  console.log('prop', props.availableTranslations)
  return locales.value.filter((i) => {
    i.url = switchLocalePath(i.code)
    if (props.availableTranslations.length > 0) {
      props.availableTranslations.filter((j) => {
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

<style lang="postcss">
.sidebar {
  background: #eee;
}
</style>
