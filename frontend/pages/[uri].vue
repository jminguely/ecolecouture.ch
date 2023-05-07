<template>
  <div>
    <div v-if="data?.page">
      <h1>{{ data.page.title }}</h1>
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
      <div v-html="data.page.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loaded: false,
    };
  },
};
</script>

<script setup>
import fetchPage from "~/graphql/fetchPage.gql";

const route = useRoute();

const variables = { uri: route.params.uri };

const { data } = await useAsyncQuery(fetchPage, variables);

useHead({
  title: "home",
});
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
