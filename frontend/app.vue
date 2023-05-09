<template>
  <div class="site-wrapper" :class="{ menuOpen }">
    <Sidebar :menu-open="menuOpen" @toggle-menu="toggleMenu" />
    <main class="site-main">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
  console.log(menuOpen.value)
}

useHead({
  titleTemplate: (title) => `ecolecouture.ch - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  bodyAttrs: {
    class: { 'overflow-hidden': menuOpen },
  },
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Description of the page',
    },
  ],
})
</script>

<style lang="postcss">
html {
  background: #ccc;
}
</style>
