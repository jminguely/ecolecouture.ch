<template>
  <div class="richtext" v-html="richtext"></div>
</template>

<script setup>
const props = defineProps({
  richtext: {
    type: String,
    required: true,
  },
})
</script>

<style lang="postcss">
.richtext {
  h2 {
    @apply text-4xl font-heading font-bold;
  }
  h3 {
    @apply text-3xl font-heading font-bold;
  }
}
</style>
