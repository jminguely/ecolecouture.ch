<template>
  <div>
    <div class="logo-container p-8">
      <h1 class="inline-block">
        <nuxt-link :to="header.homeUrl || '/'" class="pointer-events-auto">
          <img
            class="w-48 header-logo"
            src="../assets/img/logo-ecolecouture.png"
            alt="École de Couture - Lehratelier, Fribourg"
          />
        </nuxt-link>
      </h1>
    </div>
    <div class="menu-toggle-container">
      <LangSwitcher :available-translations="availableTranslations" />
      <button
        id="menuToggle"
        class="button button-shape-1 bg-blue text-white hover:bg-blue-darker active:bg-blue-lighter transition-colors"
        @click="emit('updateMenuOpen', !menuOpen)"
      >
        <span v-if="menuOpen">{{ $t('navigation.close') }}</span>
        <span v-else>{{ $t('navigation.open') }}</span>
      </button>
    </div>
    <div class="nav-container bg-red" :class="[menuOpen && 'nav-open']">
      <div class="logo-container">
        <nuxt-link :to="header.homeUrl || '/'">
          <img
            class="brightness-0 invert w-48 m-8"
            src="../assets/img/logo-ecolecouture.png"
            alt="École de Couture - Lehratelier, Fribourg"
          />
        </nuxt-link>
      </div>
      <div class="p-8 pt-36 max-w-lg mx-auto text-white">
        <Navigation class="h1" sub-nav-class="ml-12" />
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
    setTimeout(() => {
      emit('updateMenuOpen', false)
    }, 300)
  },
  { deep: true, immediate: true }
)
</script>

<style lang="postcss">
.header-logo {
  body.bg-blue &,
  body.bg-red &,
  body.bg-pink & {
    @apply brightness-0 invert;
  }
}
</style>

<style lang="postcss" scoped>
.logo-container {
  @apply max-w-xl mx-auto absolute w-full pointer-events-none z-30;

  left: 50%;
  transform: translateX(-50%);
}

.menu-toggle-container {
  @apply max-w-xl mx-auto fixed z-50 w-full p-8 flex justify-end items-center;
  left: 50%;
  transform: translateX(-50%);
}
.nav-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  pointer-events: none;
  opacity: 0;
  color: #fff;
  z-index: 40;
  transition: opacity 0.3s ease;

  &.nav-open {
    pointer-events: auto;
    opacity: 1;
  }
}
</style>
