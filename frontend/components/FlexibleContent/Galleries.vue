<template>
  <div>
    <div v-for="gallery in galleries" :key="gallery.id" class="mb-16 mt-16">
      <div class="flex justify-between items-baseline mb-8">
        <h2 class="mb-0">{{ gallery.title }}</h2>
        <nuxt-link
          :to="gallery.uri"
          class="button bg-blue text-white inline-block"
          :class="[`button-shape-${$getRandomInt(5)}`]"
        >
          {{ $t('more') }}
        </nuxt-link>
      </div>
      <Gallery :images="gallery.galleryFields.gallery" />
      <Richtext
        v-if="gallery.content"
        class="mt-8 lg:px-20"
        :richtext="gallery.content"
      />
    </div>
  </div>
</template>

<script setup>
import Gallery from '@/components/FlexibleContent/Gallery.vue'
import Richtext from '@/components/FlexibleContent/Richtext.vue'

const props = defineProps({
  galleries: {
    type: Array,
    required: true,
  },
})
</script>
