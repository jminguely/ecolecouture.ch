<template>
  <footer class="mt-auto p-8 bg-green text-white text-sm">
    <nuxt-link :to="header.homeUrl || '/'">
      <img
        class="w-48 brightness-0 invert mb-10"
        src="../assets/img/logo-ecolecouture.png"
        alt="École de Couture - Lehratelier, Fribourg"
      />
    </nuxt-link>
    <div class="grid grid-cols-5 gap-10">
      <div>
        <p class="mb-5">
          Derrière-Les-Rempars 5<br />
          1700 Fribourg<br />
          info@ecolecouture.ch
        </p>
        <Navigation location="MENU_SOCIAL" />
      </div>
      <div class="col-span-2">
        <Navigation location="MENU_FOOTER" />
      </div>
      <div class="col-span-2">
        <div class="grid grid-cols-3">
          <span class="opacity-60">Conception:</span>
          <span class="col-span-2">eikonlab</span>
          <span class="opacity-60">Design:</span>
          <span class="col-span-2">Adèle Brodard, Samuel Bouverat</span>

          <span class="opacity-60">Encadrement:</span>
          <span class="col-span-2">
            Martial Mingam, Ann Griffin, Julien Minguely
          </span>
          <span class="opacity-60">Développement web:</span>
          <span class="col-span-2">Julien Minguely</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { locales, locale } = useI18n()

const header = reactive({
  homeUrl: locales.value.find((i) => i.code === locale.value).homeUrl,
})

watch(locale, async () => {
  header.homeUrl = locales.value.find((i) => i.code === locale.value).homeUrl
})
</script>
