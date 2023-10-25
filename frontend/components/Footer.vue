<template>
  <footer class="footer mt-auto p-8 bg-green text-white text-sm">
    <div class="max-w-xl mx-auto">
      <nuxt-link :to="header.homeUrl || '/'">
        <img
          class="w-32 sm:w-48 brightness-0 invert mb-10"
          src="../assets/img/logo-ecolecouture.png"
          alt="École de Couture - Lehratelier, Fribourg"
        />
      </nuxt-link>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <p class="mb-5">
            Derrière-Les-Rempars 5<br />
            1700 Fribourg<br />
            <a class="underline" href="mailto:info@ecolecouture.ch">
              info@ecolecouture.ch
            </a>
          </p>
          <Navigation location="MENU_SOCIAL" />
        </div>

        <div>
          <Navigation location="MENU_FOOTER" />
        </div>
        <div class="sm:col-span-2 lg:col-span-2">
          <table class="gap-x-2">
            <tr>
              <td class="pr-2 opacity-50">Design et concept</td>
              <td>eikonlab | Adèle Brodard, Samuel Bouverat</td>
            </tr>
            <tr>
              <td class="pr-2 opacity-50">Encadrement:</td>
              <td>Martial Mingam, Ann Griffin, Julien Minguely</td>
            </tr>
            <tr>
              <td class="pr-2 opacity-50">Développement:</td>
              <td>Julien Minguely</td>
            </tr>
            <tr>
              <td class="pr-2 opacity-50">Photographies:</td>
              <td></td>
            </tr>
            <tr>
              <td class="pr-2 opacity-50">Redaction textes:</td>
              <td></td>
            </tr>
            <tr>
              <td class="pr-2 opacity-50">Traduction allemande:</td>
              <td></td>
            </tr>
          </table>
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
