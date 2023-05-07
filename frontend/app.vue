<template>
  <div class="site-wrapper" :class="{ menuOpen }">
    <div>
      <button
        class="md:hidden"
        :class="{ 'text-red-600': menuOpen }"
        :onclick="toggleMenu"
      >
        Menu
      </button>
      <div class="md:block" :class="[menuOpen ? 'block' : 'hidden']">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/accueil">Accueil</nuxt-link>
        <nuxt-link to="/test">Test</nuxt-link>
      </div>
    </div>
    <main class="site-main">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
  console.log(menuOpen.value);
}

useHead({
  titleTemplate: (title) => `ecolecouture.ch - ${title}`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  bodyAttrs: {
    class: { "overflow-hidden": menuOpen },
  },
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Description of the page",
    },
  ],
});
</script>

<style lang="postcss">
html {
  background: #ccc;
}
</style>
