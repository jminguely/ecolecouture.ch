<template>
  <div class="section" :class="[`theme-${content.theme} bg-${content.theme}`]">
    <div :class="[!content.fullwidth && 'max-w-lg mx-auto px-8 pb-8']">
      <div
        v-for="(row, i) in content.flexiblecontent"
        :key="i"
        :class="[!content.fullwidth && 'my-8']"
      >
        <Buttons
          v-if="row.type == 'Page_Pagefields_sections_Flexiblecontent_Buttons'"
          :buttons="row.buttons"
        />
        <Richtext
          v-else-if="
            row.type == 'Page_Pagefields_sections_Flexiblecontent_Richtext'
          "
          :richtext="row.richtext"
        />
        <Accordions
          v-else-if="
            row.type == 'Page_Pagefields_sections_Flexiblecontent_Accordions'
          "
          :accordions="row.accordions"
        />
        <Slider
          v-else-if="
            row.type == 'Page_Pagefields_sections_Flexiblecontent_Slider'
          "
          :images="row.images"
        />
        <Testimonials
          v-else-if="
            row.type == 'Page_Pagefields_sections_Flexiblecontent_Testimonials'
          "
          :testimonials="row.testimonials"
        />
        <Galleries
          v-else-if="
            row.type == 'Page_Pagefields_sections_Flexiblecontent_Galerie'
          "
          :galleries="row.gallery"
        />
        <Video
          v-else-if="
            row.type == 'Page_Pagefields_sections_Flexiblecontent_Video'
          "
          :iframe="row.video"
        />
        <Agenda
          v-else-if="
            row.type == 'Page_Pagefields_sections_Flexiblecontent_Agenda'
          "
          :events="row.event"
        />
        <div v-else>
          <pre>{{ row }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Buttons from './FlexibleContent/Buttons.vue'
import Richtext from './FlexibleContent/Richtext.vue'
import Accordions from './FlexibleContent/Accordions.vue'
import Slider from './FlexibleContent/Slider.vue'
import Galleries from './FlexibleContent/Galleries.vue'
import Testimonials from './FlexibleContent/Testimonials.vue'
import Video from './FlexibleContent/Video.vue'
import Agenda from './FlexibleContent/Agenda.vue'

const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="postcss">
h1,
.h1 {
  .theme-yellow & {
    @apply text-red;
  }
  .theme-blue & {
    @apply text-pink;
  }
  .theme-white & {
    @apply text-red;
  }
  .theme-lightpink & {
    @apply text-red;
  }
  .theme-red & {
    @apply text-yellow;
  }
}

h2,
.h2 {
  .theme-yellow & {
    @apply text-blue;
  }
  .theme-blue & {
    @apply text-red;
  }
  .theme-white & {
    @apply text-red;
  }
  .theme-lightpink & {
    @apply text-red;
  }
  .theme-red & {
    @apply text-yellow;
  }
}

h3,
.h3 {
  .theme-yellow & {
    @apply text-red;
  }
}

.theme-red,
.theme-blue {
  @apply text-white;
}
</style>
