<template>
  <footer class="mt-auto p-8 bg-green">
    <nuxt-link :to="header.homeUrl || '/'">
      <img
        class="w-48 brightness-0 invert"
        src="../assets/img/logo-ecolecouture.png"
        alt="École de Couture - Lehratelier, Fribourg"
      />
    </nuxt-link>
    <div class="grid grid-cols-5">
      <div>
        <address>
          Derrière-Les-Rempars 5<br />
          1700 Fribourg<br />
          info@ecolecouture.ch
        </address>
      </div>
      <div>
        <Navigation />
      </div>
      <div class="col-span-3">
        Design et concept | eikonlab: Adèle Brodard, Samuel Bouverat<br />
        Suivi de projet et encadrement: Martial Mingam, Ann Griffin, Julien
        Minguely<br />
        Développement: Julien Minguely<br />
        Photographies: xxx<br />
        Redaction textes: xxx<br />
        Traduction allemande: xxx
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
