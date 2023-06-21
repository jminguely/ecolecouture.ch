<template>
  <div>
    <header>
      <h1 class="logo" :class="[menuOpen && ' logo-monochrome']">
        <nuxt-link :to="header.homeUrl || '/'">
          <img
            class="w-48"
            src="../assets/img/logo-ecolecouture.png"
            alt="École de Couture - Lehratelier, Fribourg"
          />
        </nuxt-link>
      </h1>
      <button
        id="menuToggle"
        class="menuToggle"
        @click="emit('updateMenuOpen', !menuOpen)"
      >
        Menu
      </button>
    </header>
    <!-- <p>StringWelcome: {{ $t('welcome') }}</p> -->
    <div class="nav-container" :class="[menuOpen && 'nav-open']">
      <div class="backdrop">
        <div class="backdrop-inner">
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
.logo {
  @apply m-6;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
  display: inline-block;
  transition: filter 0.3s ease;
}
.logo-monochrome {
  filter: brightness(0) invert(1);
}
.menuToggle {
  @apply m-6;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  display: inline-block;
  padding: 10px 20px;
  background: black;
  color: white;
}

.nav-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 100;
  opacity: 0;
  background: #333333;
  color: #fff;
  z-index: 999;
  transition: opacity 0.3s ease;

  &.nav-open {
    pointer-events: auto;
    opacity: 1;
  }
}
</style>
