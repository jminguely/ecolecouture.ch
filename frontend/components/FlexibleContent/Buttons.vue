<template>
  <div class="gap-3 flex items-start">
    <a
      v-for="(button, i) in buttons"
      :key="i"
      class="button button-shape-1 bg-blue"
      :class="`bg-${button.color}`"
      :href="button.link.url"
      :target="button.link.target"
    >
      {{ button.link.title }}
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  buttons: {
    type: Array,
    required: true,
  },
})
</script>

<style lang="postcss" scoped>
.button.bg-blue {
  @apply text-white;
}
</style>
