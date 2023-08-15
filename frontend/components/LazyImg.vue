<template>
  <nuxt-img
    v-bind="$attrs"
    :class="{ loaded }"
    loading="lazy"
    @load="loaded = true"
  />
</template>

<script>
export default {
  data() {
    return {
      loaded: false,
    }
  },
}
</script>

<style scoped lang="postcss">
img {
  opacity: 0;
  filter: grayscale(1);
  transition: opacity 1s 0.5s ease, filter 1s 0.5s ease;

  &.loaded {
    opacity: 1;
    filter: grayscale(0);
  }
}
</style>
