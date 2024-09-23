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
  <div v-else>
    <div class="max-w-lg mx-auto px-8 py-60">
      <h2 class="h1 lg:w-2/3">Erreur 404</h2>
      <p>La page que vous cherchez d'atteindre n'existe plus.</p>
      <nuxt-link
        class="mt-5 button button-shape-1 bg-electricblue text-white hover:bg-electricblue-darker active:bg-electricblue-lighter"
        :to="header.homeUrl || '/accueil'"
      >
        Retourner à l'accueil
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import fetchPage from '~/graphql/fetchPage.gql'

const emit = defineEmits(['updateTranslations'])
const { locales, locale } = useI18n()

const header = reactive({
  homeUrl: locales.value.find((i) => i.code === locale.value).homeUrl,
})

watch(locale, async () => {
  header.homeUrl = locales.value.find((i) => i.code === locale.value).homeUrl
})

const route = useRoute()

const variables = { uri: route.params.uri }

const { data } = await useAsyncQuery(fetchPage, variables)

console.log(variables)

useHead({
  title: data?.value?.page?.title ? data?.value?.page?.title : 'Erreur 404',
  bodyAttrs: {
    class: [
      data?.value?.page?.pageSidebarFields.theme &&
        `section theme-${data.value.page.pageSidebarFields.theme} bg-${data.value.page.pageSidebarFields.theme}`,
    ],
  },
})

if (data?.value?.page?.translations?.length > 0) {
  emit('updateTranslations', data.value.page.translations)
}
</script>
