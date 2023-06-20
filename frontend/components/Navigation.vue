<template>
  <nav>
    <nuxt-link
      v-for="menuItem in menu.menuItems?.nodes"
      :key="menuItem.id"
      :to="menuItem.uri"
    >
      {{ menuItem.label }}
    </nuxt-link>
  </nav>
</template>

<script setup>
import fetchMenu from '~/graphql/fetchMenu.gql'

const { locale } = useI18n()

const variables = { lang: locale.value }

const { data } = await useAsyncQuery(fetchMenu, variables)

const menu = reactive({
  menuItems: data.value.menuItems,
})

watch(locale, async () => {
  const variables = { lang: locale.value }
  const { data } = await useAsyncQuery(fetchMenu, variables)
  menu.menuItems = data.value.menuItems
})
</script>
