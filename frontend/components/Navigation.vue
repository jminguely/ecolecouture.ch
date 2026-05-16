<template>
  <nav v-bind="$attrs">
    <ul class="text-white">
      <li v-for="menuItem in menuItems" :key="menuItem.label + menuItem.uri">
        <nuxt-link
          v-if="menuItem.uri"
          :to="menuItem.uri"
          class="router-link"
          :class="menuItem.cssClasses.join(' ')"
        >
          {{ menuItem.label }}
        </nuxt-link>
        <span v-else>
          {{ menuItem.label }}
        </span>
        <ul v-if="menuItem.childItems?.nodes.length" class="sub-nav">
          <li
            v-for="subMenuItem in menuItem.childItems?.nodes"
            :key="subMenuItem.label + subMenuItem.uri"
          >
            <nuxt-link
              :to="subMenuItem.uri"
              class="router-link"
              :class="subMenuItem.cssClasses.join(' ')"
            >
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

const props = defineProps({
  location: {
    type: String,
    default: 'MENU_PRIMARY',
  },
})

const { locale } = useI18n()

const variables = reactive({
  lang: locale.value,
  location: props.location,
})

const { data, refresh } = await useTimedAsyncQuery(fetchMenu, variables, {
  timeoutMs: 6000,
  fallbackData: { menuItems: { nodes: [] } },
})

watch(locale, () => {
  variables.lang = locale.value
  refresh()
})

const menuItems = computed(() => data.value?.menuItems?.nodes || [])
</script>

<style lang="postcss" scoped>
.router-link {
  text-decoration: underline;
  text-decoration-thickness: 0.05em;
  text-underline-offset: 0.1em;

  &:hover {
    opacity: 0.6;
  }

  &.router-link-active {
    @apply no-underline cursor-default;

    &:hover {
      opacity: 1;
    }
  }
}

.h1 {
  .sub-nav {
    margin-left: 1.75em;
    margin-top: 0.25em;
    margin-bottom: 0.5em;

    li {
      margin-bottom: 0.5em;
    }
  }

  li {
    margin-bottom: 0.25em;
  }
}
</style>
