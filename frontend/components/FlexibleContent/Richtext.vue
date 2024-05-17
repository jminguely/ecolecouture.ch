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
    @apply mb-6 ml-7;

    li {
      @apply mb-2;
      position: relative;
      &::before {
        content: '—';
        font-size: 0.8rem;
        position: absolute;
        left: -1.75rem;
        top: 0.45rem;
      }
    }
  }

  ol {
    @apply mb-5 ml-7;
    counter-reset: ol-counter;

    li {
      @apply mb-2;
      position: relative;
      counter-increment: ol-counter;

      &::before {
        @apply tabular-nums;
        content: counter(ol-counter) '.';
        font-size: 0.8em;
        position: absolute;
        left: -1.75rem;
        top: 0.2em;
      }
    }
  }

  a {
    @apply underline;
  }
}
</style>
