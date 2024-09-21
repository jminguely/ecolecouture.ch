<template>
  <div v-if="data?.page">
    <div class="max-w-lg mx-auto px-8 pt-36">
      <h2 class="h1 lg:w-2/3">{{ data.page.title }}</h2>
    </div>
    <Section
      v-for="(section, i) in data.page.pageFields.sections"
      :key="i"
      :content="section"
      :class="[i > 0 && !section.fullwidth && 'pt-12']"
    />
  </div>
</template>

<script setup>
import fetchPage from '~/graphql/fetchPage.gql'

const emit = defineEmits(['updateTranslations'])

const route = useRoute()

const variables = { uri: route.params.uri }

const { data } = await useAsyncQuery(fetchPage, variables)

useHead({
  title: data.value.page.title,
  bodyAttrs: {
    class: [
      data.value.page.pageSidebarFields.theme &&
        `section theme-${data.value.page.pageSidebarFields.theme} bg-${data.value.page.pageSidebarFields.theme}`,
    ],
  },
})

if (data?.value?.page?.translations?.length > 0) {
  emit('updateTranslations', data.value.page.translations)
}
</script>
