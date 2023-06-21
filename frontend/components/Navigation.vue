<template>
  <nav class="main-navigation">
    <ul>
      <li v-for="menuItem in menu.menuItems?.nodes" :key="menuItem.id">
        <nuxt-link v-if="menuItem.uri" class="underline" :to="menuItem.uri">
          {{ menuItem.label }}
        </nuxt-link>
        <span v-else>
          {{ menuItem.label }}
        </span>
        <ul v-if="menuItem.childItems?.nodes.length" class="ml-12">
          <li
            v-for="subMenuItem in menuItem.childItems?.nodes"
            :key="subMenuItem.id"
          >
            <nuxt-link class="underline" :to="subMenuItem.uri">
              {{ subMenuItem.label }}
            </nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
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

<style lang="postcss" scoped>
.main-navigation {
  font-size: 32px;
  margin-top: 100px;
}
</style>
