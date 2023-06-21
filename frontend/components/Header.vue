<template>
  <div>
    <button id="menuToggle" class="menuToggle" @click="emit('toggleMenu')">
      Menu
    </button>
    <!-- <p>StringWelcome: {{ $t('welcome') }}</p> -->
    <div class="nav-container" :class="[menuOpen ? 'block' : 'hidden']">
      <Navigation />
      <LangSwitcher :available-translations="availableTranslations" />
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
</script>
