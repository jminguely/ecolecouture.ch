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
      <button
        id="menuToggle"
        class="button button-shape-4 fixed top-0 right-0 m-5 bg-blue text-white hover:bg-blue-darker active:bg-blue-lighter z-50 transition-colors"
        @click="emit('updateMenuOpen', !menuOpen)"
      >
        <span v-if="menuOpen">Close</span>
        <span v-else>Menu</span>
      </button>
    </header>
    <!-- <p>StringWelcome: {{ $t('welcome') }}</p> -->
    <div class="nav-container" :class="[menuOpen && 'nav-open']">
      <div class="backdrop">
        <div class="backdrop-inner p-8">
          <nuxt-link :to="header.homeUrl || '/'">
            <img
              class="brightness-0 invert w-48"
              src="../assets/img/logo-ecolecouture.png"
              alt="École de Couture - Lehratelier, Fribourg"
            />
          </nuxt-link>
          <Navigation />
          <LangSwitcher :available-translations="availableTranslations" />
        </div>
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
  pointer-events: none;
  opacity: 0;
  background: #333333;
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
