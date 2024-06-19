<template>
  <swiper
    :modules="modules"
    class="relative"
    slides-per-view="1"
    :pagination="{ clickable: true }"
    :style="{
      '--swiper-pagination-bullet-size': '10px',
      '--swiper-pagination-bullet-inactive-opacity': '1',
      '--swiper-pagination-bullet-inactive-color': 'transparent',
      '--swiper-pagination-color': 'currentColor',
      '--swiper-pagination-bottom': '20px',
    }"
    @swiper="onSwiper"
  >
    <slider-prev-arrow class="left-0" />
    <slider-next-arrow class="right-0" />
    <swiper-slide
      v-for="(testimonial, i) in testimonials"
      :key="i"
      class="mb-3"
    >
      <div
        class="grid md:grid-cols-3 gap-8 items-center"
        :class="[testimonials.length > 1 && 'px-14']"
      >
        <div>
          <a
            v-if="testimonial.link && testimonial.link.url"
            :href="testimonial.link.url"
            target="_blank"
          >
            <LazyImg
              v-if="testimonial.image.mediaDetails.sizes[0]"
              class="w-full"
              :class="[`thumb-shape-${$getRandomInt(3)}`]"
              :alt="testimonial.image.altText"
              :src="`${testimonial.image.mediaDetails.sizes[0].sourceUrl}`"
            />
          </a>
          <LazyImg
            v-else-if="testimonial.image.mediaDetails.sizes[0]"
            class="w-full"
            :class="[`thumb-shape-${$getRandomInt(3)}`]"
            :alt="testimonial.image.altText"
            :src="`${testimonial.image.mediaDetails.sizes[0].sourceUrl}`"
          />
        </div>
        <div class="md:col-span-2 py-10">
          <h3 class="h2">{{ testimonial.title }}</h3>
          <Richtext :richtext="testimonial.text" />
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import LazyImg from '@/components/LazyImg.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import Richtext from './Richtext.vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import SliderNextArrow from './SliderNextArrow.vue'
import SliderPrevArrow from './SliderPrevArrow.vue'

export default {
  components: {
    LazyImg,
    Richtext,
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
