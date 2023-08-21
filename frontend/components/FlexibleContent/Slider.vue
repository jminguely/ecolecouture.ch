<template>
  <swiper
    :modules="modules"
    class="relative"
    slides-per-view="1"
    :pagination="{ clickable: true }"
    auto-height
    :style="{
      '--swiper-pagination-bullet-size': '10px',
      '--swiper-pagination-bullet-inactive-opacity': '1',
      '--swiper-pagination-bullet-inactive-color': 'transparent',
      '--swiper-pagination-color': 'currentColor',
      '--swiper-pagination-bottom': '20px',
    }"
    :breakpoints="{
      640: { slidesPerView: 2 },
      960: { slidesPerView: 3 },
      1280: { slidesPerView: 4 },
    }"
    @swiper="onSwiper"
  >
    <slider-prev-arrow class="left-5" />
    <slider-next-arrow class="right-5" />
    <swiper-slide v-for="(image, i) in images" :key="i" class="mb-3">
      <LazyImg
        v-if="image.mediaDetails.sizes[0]"
        class="w-full"
        :alt="image.altText"
        :src="`${image.mediaDetails.sizes[0].sourceUrl}`"
      />
    </swiper-slide>
  </swiper>
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
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    return {
      onSwiper,
      modules: [Pagination],
    }
  },
}
</script>

<style>
.swiper-pagination-bullet {
  border: 1px solid currentColor;
}
</style>
