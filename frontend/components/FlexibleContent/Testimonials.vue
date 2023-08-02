<template>
  <swiper
    ref="swiperContainer"
    class="relative"
    slides-per-view="1"
    pagination
    :style="{
      '--swiper-pagination-bullet-size': '10px',
      '--swiper-pagination-bullet-inactive-opacity': '1',
      '--swiper-pagination-bullet-inactive-color': 'transparent',
      '--swiper-pagination-color': 'currentColor',
      '--swiper-pagination-bottom': '20px',
    }"
  >
    <slider-prev-arrow class="left-0" />
    <slider-next-arrow class="right-0" />
    <swiper-slide
      v-for="(testimonial, i) in testimonials"
      :key="i"
      class="mb-3"
    >
      <div class="grid grid-cols-3 px-14 gap-10 items-center">
        <div>
          <LazyImg
            v-if="testimonial.image.mediaDetails.sizes[0]"
            class="w-full thumb-shape-1"
            :alt="testimonial.image.altText"
            :src="`${testimonial.image.mediaDetails.sizes[0].sourceUrl}`"
          />
        </div>
        <div class="col-span-2">
          <h3>{{ testimonial.title }}</h3>
          <div v-html="testimonial.text"></div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import LazyImg from '@/components/LazyImg.vue'
import { useSwiper, Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import SliderNextArrow from './SliderNextArrow.vue'
import SliderPrevArrow from './SliderPrevArrow.vue'

export default {
  components: {
    LazyImg,
    Swiper,
    SwiperSlide,
    SliderNextArrow,
    SliderPrevArrow,
  },
  props: {
    testimonials: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const swiper = useSwiper()

    return {
      swiper,
      modules: [Navigation, Pagination],
    }
  },
}
</script>

<style>
.swiper-pagination-bullet {
  border: 1px solid currentColor;
}
</style>
