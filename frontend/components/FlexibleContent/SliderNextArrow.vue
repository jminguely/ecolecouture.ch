<template>
  <button
    v-bind="$attrs"
    class="absolute bottom-5 md:bottom-1/2 z-10 transition-opacity transition-500"
    :class="[swiper.isEnd && ' opacity-0']"
    @click="swiper.slideNext()"
  >
    <svg class="icon w-7 h-7">
      <use href="~/assets/img/icons.svg#arrow"></use>
    </svg>
  </button>
</template>

<script>
import { useSwiper } from 'swiper/vue'

export default {
  setup() {
    const swiper = useSwiper()

    return {
      swiper,
    }
  },
}
</script>
