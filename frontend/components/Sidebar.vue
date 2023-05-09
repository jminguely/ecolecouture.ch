<template>
  <div>
    <button
      id="menuToggle"
      class="menuToggle md:hidden"
      @click="emit('toggleMenu')"
    >
      ≡
    </button>
    <div class="sidebar">
      <div class="md:block" :class="[menuOpen ? 'block' : 'hidden']">
        <nuxt-link to="/"> Home </nuxt-link>
        <nuxt-link to="/accueil"> Accueil </nuxt-link>
        <nuxt-link to="/test"> Test </nuxt-link>
      </div>
      <hr />
      <div>
        <nuxt-link
          v-for="locale in $i18n.locales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
        >
          {{ locale.code }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const switchLocalePath = useSwitchLocalePath()

const emit = defineEmits(['toggleMenu', 'toggleMenu'])
</script>

<script>
export default {
  props: {
    menuOpen: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="postcss">
.sidebar {
  background: #eee;
}
</style>
