<template>
  <button
    v-bind="$attrs"
    class="absolute top-1/2 z-10 transition-opacity transition-500"
    :class="[swiper.isBeginning && ' opacity-0']"
    @click="swiper.slidePrev()"
  >
    <svg class="icon rotate-180 w-7 h-7">
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
