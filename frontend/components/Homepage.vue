<template>
  <div v-if="data?.page">
    <div class="max-w-xl mx-auto px-8 pt-32 sm:pt-48 pb-8 relative">
      <LazyImg
        v-if="data.page.homepageFields.imageLanding?.mediaDetails?.sizes[0]"
        class="landing-img thumb-shape-4"
        :alt="data.page.homepageFields.imageLanding.altText"
        :src="`${data.page.homepageFields.imageLanding.mediaDetails.sizes[0].sourceUrl}`"
      />
      <div class="flex flex-col">
        <span
          class="font-huge text-electricblue mt-10 sm:mt-0 sm:self-end z-10"
        >
          École
        </span>
        <span class="font-huge text-electricblue z-10">de Couture</span>
      </div>
    </div>
    <section class="bg-red theme-red">
      <div class="max-w-lg mx-auto pt-16 p-8">
        <div
          class="flex flex-col md:flex-row gap-10 md:items-center justify-between"
        >
          <div class="md:order-1 md:w-1/3">
            <LazyImg
              v-if="
                data.page.homepageFields.imageFormations?.mediaDetails?.sizes[0]
              "
              class="thumb-shape-3 w-full"
              :alt="data.page.homepageFields.imageFormations.altText"
              :src="`${data.page.homepageFields.imageFormations.mediaDetails.sizes[0].sourceUrl}`"
            />
          </div>
          <div>
            <h2>{{ $t('homepage.formations') }}</h2>
            <div
              v-if="data.page.homepageFields.navigationFormations.length > 0"
              class="flex flex-col"
            >
              <nuxt-link
                v-for="(link, i) in data.page.homepageFields
                  .navigationFormations"
                :key="i"
                :to="link.uri"
                class="h1 mb-5"
              >
                <span class="text-white underline">
                  {{ link.title }}
                </span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-yellow theme-yellow">
      <div class="max-w-lg mx-auto py-16 px-8">
        <div
          class="flex flex-col md:flex-row gap-10 md:items-center justify-between"
        >
          <div class="md:w-1/3">
            <LazyImg
              v-if="
                data.page.homepageFields.imageCommandes?.mediaDetails?.sizes[0]
              "
              class="thumb-shape-3 w-full"
              :alt="data.page.homepageFields.imageCommandes.altText"
              :src="`${data.page.homepageFields.imageCommandes.mediaDetails.sizes[0].sourceUrl}`"
            />
          </div>
          <div class="">
            <div class="richtext">
              <h2>{{ $t('homepage.commandes') }}</h2>
              <p>
                L’école de couture réalise des commandes pour des clients
                privés. L’aventure vous tente?
              </p>
            </div>
            <nuxt-link
              class="button button-shape-1 text-white bg-blue hover:bg-blue-darker active:bg-blue-lighter"
              to="/commandes"
            >
              {{ $t('know') }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <Section
      v-for="(section, i) in data.page.pageFields.sections"
      :key="i"
      :content="section"
      :class="[i > 0 && !section.fullwidth && 'pt-12']"
    />
  </div>
</template>

<script setup>
import fetchPage from '~/graphql/fetchHomepage.gql'
import LazyImg from '@/components/LazyImg.vue'

const props = defineProps({
  slug: {
    type: String,
    default: 'accueil',
  },
})

const emit = defineEmits(['updateTranslations'])

const variables = { uri: props.slug }

const { data } = await useAsyncQuery(fetchPage, variables)

useHead({
  title: data.value.page.title,
  bodyAttrs: {
    class: [
      data.value.page.pageSidebarFields.theme &&
        `section bg-${data.value.page.pageSidebarFields.theme}`,
    ],
  },
})

if (data?.value?.page?.translations?.length > 0) {
  emit('updateTranslations', data.value.page.translations)
}
</script>

<style lang="postcss" scoped>
.font-huge {
  line-height: 1;

  font-size: 50px;

  @screen sm {
    font-size: clamp(6.5rem, -0.0625rem + 16.4063vw, 19.625rem);
  }
}

.landing-img {
  @screen sm {
    @apply w-96 sm:absolute;
    width: clamp(15rem, 0rem + 37.5vw, 45rem);
    top: 5%;
    left: 35%;
    z-index: 0;
    transform: translate(-50%, 0);
  }
}
</style>
