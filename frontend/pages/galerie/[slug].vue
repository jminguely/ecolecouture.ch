<template>
  <div>
    <div v-if="data?.galerie" class="gallery pt-36 pb-16 max-w-lg mx-auto px-8">
      <h2 class="h1 text-red">
        {{ data.galerie.title }}
      </h2>
      <Richtext class="mb-12" :richtext="data.galerie.content" />

      <div
        v-for="image in data.galerie.galleryFields.gallery"
        :key="image.id"
        class="mb-5"
      >
        <LazyImg
          v-if="image.mediaDetails.sizes[0]"
          class="w-full max-h-screen object-contain object-left"
          :alt="image.altText"
          :src="`${image.mediaDetails.sizes[0].sourceUrl}`"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import LazyImg from '@/components/LazyImg.vue'
import Richtext from '@/components/FlexibleContent/Richtext.vue'

import fetchGallery from '~/graphql/fetchGallery.gql'

const emit = defineEmits(['updateTranslations'])

const route = useRoute()

const variables = { slug: route.params.slug }

const { data } = await useAsyncQuery(fetchGallery, variables)

useHead({
  title: data.value.galerie.title,
})

if (data?.value?.galerie?.translations?.length > 0) {
  emit('updateTranslations', data.value.galerie.translations)
}
</script>
