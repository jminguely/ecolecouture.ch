<template>
  <nuxt-link
    class="button"
    :class="[
      `bg-${button.color} hover:bg-${button.color}-darker active:bg-${button.color}-lighter`,
      `button-shape-${$getRandomInt(5)}`,
    ]"
    :href="buttonLinkProcessed"
    :target="button.link.target"
  >
    {{ button.link.title }}
  </nuxt-link>
</template>

<script setup>
const props = defineProps({
  button: {
    type: Object,
    required: true,
  },
})

// Parse all URLs and replace the WP domain with the app domain
const buttonLinkProcessed = computed(() => {
  return useNuxtApp().$processCustomURL(props.button.link.url)
})
</script>

<style lang="postcss" scoped>
.button.bg-pink,
.button.bg-electricblue,
.button.bg-blue {
  @apply text-white;
}
</style>
