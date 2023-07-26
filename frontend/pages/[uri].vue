<template>
  <div>
    <div v-if="data?.page">
      <!-- <LazyImg
        v-if="data?.page?.featuredImage?.node"
        :img-node="data.page.featuredImage.node"
        class="w-full"
        :alt="data.page.featuredImage.node.altText"
        :src="data.page.featuredImage.node.sourceUrl"
      /> -->

      <Section
        v-for="(section, i) in data.page.pageFields.sections"
        :key="i"
        :content="section"
      />
    </div>
  </div>
</template>

<script setup>
import LazyImg from '../components/LazyImg.vue'

import fetchPage from '~/graphql/fetchPage.gql'

const emit = defineEmits(['updateTranslations'])

const route = useRoute()

const variables = { uri: route.params.uri }

const { data } = await useAsyncQuery(fetchPage, variables)

useHead({
  title: data.value.page.title,
})

if (data?.value?.page?.translations?.length > 0) {
  emit('updateTranslations', data.value.page.translations)
}
</script>
