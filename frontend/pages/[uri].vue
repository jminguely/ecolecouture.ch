<template>
  <div>
    <div v-if="data?.page">
      <h1>{{ data.page.title }}</h1>
      <h2>{{ $t('test') }}</h2>
      <nuxt-img
        v-if="data?.page?.featuredImage?.node"
        class="w-full"
        :class="{ loaded }"
        :alt="data.page.featuredImage.node.altText"
        :src="data.page.featuredImage.node.sourceUrl"
        loading="lazy"
        placeholder
        @load="loaded = true"
      />
      <div v-html="data.page.content" />
      <div v-for="translation in data.page.translations" :key="translation.id">
        <nuxt-link :to="translation.uri">
          {{ translation.language.code }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loaded: false,
    }
  },
}
</script>

<script setup>
import { useLangStore } from '@/stores/lang'
import fetchPage from '~/graphql/fetchPage.gql'

const emit = defineEmits(['updateTranslations'])

const store = useLangStore()

const route = useRoute()

const variables = { uri: route.params.uri }

const { data } = await useAsyncQuery(fetchPage, variables)

const { setAvailableTranslations } = store

if (data?.value?.page?.translations?.length > 0) {
  console.log('uriemit')
  emit('updateTranslations', data.value.page.translations)
}

useHead({
  title: 'home',
})
</script>

<style scoped lang="postcss">
img {
  transform: scale(0.99) rotate(0deg);
  transition: transform 2s, opacity 2s, filter 2s;
  opacity: 0;
  filter: grayscale(1);

  &.loaded {
    opacity: 1;
    filter: grayscale(0);
    transform: scale(1) rotate(0deg);
  }
}
</style>
