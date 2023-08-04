<template>
  <div>
    <header class="p-8">
      <h1>
        <nuxt-link :to="header.homeUrl || '/'">
          <img
            class="w-48"
            :class="[menuOpen && 'brightness-0 invert']"
            src="../assets/img/logo-ecolecouture.png"
            alt="École de Couture - Lehratelier, Fribourg"
          />
        </nuxt-link>
      </h1>
      <div class="fixed top-0 right-0 m-5 flex flex-row z-50 items-center">
        <LangSwitcher :available-translations="availableTranslations" />
        <button
          id="menuToggle"
          class="button button-shape-4 bg-blue text-white hover:bg-blue-darker active:bg-blue-lighter transition-colors"
          @click="emit('updateMenuOpen', !menuOpen)"
        >
          <span v-if="menuOpen">{{ $t('navigation.close') }}</span>
          <span v-else>{{ $t('navigation.open') }}</span>
        </button>
      </div>
    </header>
    <div class="nav-container bg-red" :class="[menuOpen && 'nav-open']">
      <nuxt-link :to="header.homeUrl || '/'">
        <img
          class="brightness-0 invert w-48 m-8"
          src="../assets/img/logo-ecolecouture.png"
          alt="École de Couture - Lehratelier, Fribourg"
        />
      </nuxt-link>
      <div class="p-8 max-w-6xl mx-auto">
        <Navigation class="text-5xl" sub-nav-class="ml-12" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { locales, locale } = useI18n()

const header = reactive({
  homeUrl: locales.value.find((i) => i.code === locale.value).homeUrl,
})

watch(locale, async () => {
  header.homeUrl = locales.value.find((i) => i.code === locale.value).homeUrl
})

const props = defineProps({
  menuOpen: Boolean,
  availableTranslations: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['updateMenuOpen'])

const route = useRoute()

watch(
  route,
  (value) => {
    emit('updateMenuOpen', false)
  },
  { deep: true, immediate: true }
)
</script>

<style lang="postcss" scoped>
.nav-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  pointer-events: none;
  opacity: 0;
  color: #fff;
  z-index: 20;
  transition: opacity 0.3s 0.3s ease;

  &.nav-open {
    pointer-events: auto;
    opacity: 1;
    transition: opacity 0.3s ease;
  }
}
</style>
