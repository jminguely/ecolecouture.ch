<template>
  <div>
    <swiper
      :modules="modules"
      class="relative"
      slides-per-view="3"
      centered-slides
      initial-slide="1"
      :pagination="{ clickable: true }"
      :style="{
        '--swiper-pagination-bullet-size': '10px',
        '--swiper-pagination-bullet-inactive-opacity': '1',
        '--swiper-pagination-bullet-inactive-color': 'transparent',
        '--swiper-pagination-color': 'currentColor',
        '--swiper-pagination-bottom': '0',
      }"
      @swiper="onSwiper"
    >
      <slider-prev-arrow class="left-0" />
      <slider-next-arrow class="right-0" />
      <swiper-slide v-for="(image, i) in images" :key="i" class="mb-10">
        <LazyImg
          v-if="image.mediaDetails.sizes[0]"
          class="w-full"
          :alt="image.altText"
          :src="`${image.mediaDetails.sizes[0].sourceUrl}`"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import LazyImg from '@/components/LazyImg.vue'
import SliderNextArrow from './SliderNextArrow'
import SliderPrevArrow from './SliderPrevArrow'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

export default {
  components: {
    LazyImg,
    Swiper,
    SwiperSlide,
    SliderNextArrow,
    SliderPrevArrow,
  },
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {
      modules: [Pagination],
    }
  },
}
</script>

<style lang="postcss" scoped>
.swiper-slide {
  transform: scale(0.9);
  opacity: 0;
  transition: transform 0.3s ease-in-out, opacity 0.15s;
}

.swiper-slide-prev {
  transform: scale(0.9) translateX(20%);
  z-index: 1;
  opacity: 1;
}
.swiper-slide-next {
  transform: scale(0.9) translateX(-20%);
  z-index: 1;
  opacity: 1;
}

.swiper-slide-active {
  transform: scale(1);
  z-index: 2;
  opacity: 1;
}
</style>
