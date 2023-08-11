<template>
  <div
    class="section"
    :class="[!content.fullwidth && 'py-12', `bg-${content.theme}`]"
  >
    <div :class="[!content.fullwidth && 'max-w-7xl mx-auto px-8']">
      <div
        v-for="(row, i) in content.flexiblecontent"
        :key="i"
        :class="[!content.fullwidth && 'py-5']"
      >
        <Title
          v-if="row.type == 'Page_Pagefields_sections_Flexiblecontent_Title'"
          :title="row.title"
        />
        <Buttons
          v-else-if="
            row.type == 'Page_Pagefields_sections_Flexiblecontent_Buttons'
          "
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
        <div v-else>{{ row }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from './FlexibleContent/Title.vue'
import Buttons from './FlexibleContent/Buttons.vue'
import Richtext from './FlexibleContent/Richtext.vue'
import Accordions from './FlexibleContent/Accordions.vue'
import Slider from './FlexibleContent/Slider.vue'
import Testimonials from './FlexibleContent/Testimonials.vue'

const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="postcss" scoped>
.section.bg-blue {
  @apply text-white;
}
</style>
