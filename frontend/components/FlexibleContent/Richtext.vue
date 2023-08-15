<template>
  <div class="richtext" v-bind="$attrs" v-html="richtext"></div>
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
  p {
    @apply mb-6;
  }

  ul {
    @apply mb-3;

    li::before {
      content: '—';
      @apply mr-1;
    }
  }
}
</style>
