<template>
  <div>
    <!-- {{ languagesList }} -->
    <button
      id="menuToggle"
      class="menuToggle md:hidden"
      @click="emit('toggleMenu')"
    >
      ≡
    </button>
    <p>Counter: {{ store.count }}</p>
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
import { useCounterStore } from '@/stores/counter'

const emit = defineEmits(['toggleMenu'])

const store = useCounterStore()
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
