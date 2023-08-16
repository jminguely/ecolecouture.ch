<template>
  <div class="video-responsive" v-html="iframe"></div>
</template>

<script setup>
const props = defineProps({
  iframe: {
    type: String,
    required: true,
  },
})
</script>

<style lang="postcss">
.video-responsive {
  @apply aspect-video relative;

  iframe {
    @apply absolute inset-0 w-full h-full;
  }
}
</style>
