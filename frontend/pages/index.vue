<template>
  <div v-if="data?.page">
    <h1>{{ data.page.title }}</h1>
    <div v-html="data.page.content"></div>
  </div>
</template>

<script setup>
import fetchPage from "~/graphql/fetchPage.gql";

const variables = { uri: "accueil" };

const { data } = await useAsyncQuery(fetchPage, variables);

useHead({
  title: "home",
});
</script>
