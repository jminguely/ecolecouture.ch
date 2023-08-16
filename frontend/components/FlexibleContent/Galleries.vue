<template>
  <div>
    <div v-for="gallery in galleries" :key="gallery.id" class="mb-16">
      <Gallery :images="gallery.galleryFields.gallery" />
      <div class="flex justify-end mt-8">
        <a
          :href="gallery.uri"
          class="button bg-blue text-white"
          :class="[`button-shape-${$getRandomInt(5)}`]"
        >
          {{ $t('more') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import Gallery from '@/components/FlexibleContent/Gallery.vue'

const props = defineProps({
  galleries: {
    type: Array,
    required: true,
  },
})
</script>
