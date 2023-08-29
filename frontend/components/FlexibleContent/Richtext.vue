<template>
  <div class="richtext" v-bind="$attrs" v-html="richtextprocessed"></div>
</template>

<script setup>
const props = defineProps({
  richtext: {
    type: String,
    required: true,
  },
})

// Parse all URLs and replace the WP domain with the app domain
const richtextprocessed = computed(() => {
  return useNuxtApp().$processCustomURL(props.richtext)
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

  a {
    @apply underline;
  }
}
</style>
