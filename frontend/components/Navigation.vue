<template>
  <nav class="main-navigation text-4xl">
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

const variables = { lang: locale.value, location: 'MENU_PRIMARY' }

const { data } = await useAsyncQuery(fetchMenu, variables)

const menu = reactive({
  menuItems: data.value.menuItems,
})

watch(locale, async () => {
  setTimeout(async () => {
    const variables = { lang: locale.value, location: 'MENU_PRIMARY' }
    const { data } = await useAsyncQuery(fetchMenu, variables)
    menu.menuItems = data.value.menuItems
  }, 1000)
})
</script>
