<template>
  <div class="gap-3 flex items-start">
    <a
      v-for="(button, i) in buttons"
      :key="i"
      class="button button-shape-1"
      :class="`bg-${button.color} hover:bg-${button.color}-darker active:bg-${button.color}-lighter`"
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
.button.bg-pink,
.button.bg-blue {
  @apply text-white;
}
</style>
