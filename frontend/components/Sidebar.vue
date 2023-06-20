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
    <p>StringWelcome: {{ $t('welcome') }}</p>
    <div class="sidebar">
      <div
        class="nav-container md:block"
        :class="[menuOpen ? 'block' : 'hidden']"
      >
        <Navigation />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  menuOpen: Boolean,
  availableTranslations: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['toggleMenu'])

const { locales } = useI18n()

const switchLocalePath = useSwitchLocalePath()

const navLocales = computed(() => {
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
