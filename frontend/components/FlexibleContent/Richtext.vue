<template>
  <div
    class="richtext"
    v-bind="$attrs"
    :class="[twoColumns && 'two-columns']"
    v-html="richtextprocessed"
  ></div>
</template>

<script setup>
const config = useRuntimeConfig()

const props = defineProps({
  richtext: {
    type: String,
    required: true,
  },
  twoColumns: {
    type: Boolean,
  },
})

// Parse all URLs and replace the WP domain with the app domain
const richtextprocessed = computed(() => {
  const baseUrl = config.public.wp
  const regex = new RegExp(`(${baseUrl})(?!\app\\/uploads)(\\/.*$)?`, 'g')

  return props.richtext.replace(regex, `/$2`)
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

  &.two-columns {
    @screen md {
      columns: 2;

      p,
      ul,
      ol {
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
