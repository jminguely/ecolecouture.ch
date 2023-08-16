<template>
  <div
    class="richtext"
    v-bind="$attrs"
    :class="[twoColumns && 'two-columns']"
    v-html="richtext"
  ></div>
</template>

<script setup>
const props = defineProps({
  richtext: {
    type: String,
    required: true,
  },
  twoColumns: {
    type: Boolean,
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

  &.two-columns {
    @screen md {
      columns: 2;

      p {
        break-inside: avoid;
      }

      h2,
      h3 {
        break-after: avoid;
      }
    }
  }
}
</style>
