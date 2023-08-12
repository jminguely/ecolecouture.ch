<template>
  <div>
    <div v-for="(accordion, i) in accordionsList" :key="i" class="mb-3">
      <button class="h3" @click="accordion.expanded = !accordion.expanded">
        {{ accordion.title }}
        <span
          class="relative inline-block -top-0.5 left-1"
          :class="[accordion.expanded && 'rotate-180']"
        >
          <img class="w-3" src="~/assets/img/icon-caret.svg" alt="" />
        </span>
      </button>
      <VueAccordion :expanded="accordion.expanded">
        <div class="pt-3 pl-14">
          <Richtext :richtext="accordion.richtext" />
        </div>
      </VueAccordion>
    </div>
  </div>
</template>

<script setup>
import { VueAccordion } from '@ztrehagem/vue-accordion'
import Richtext from './Richtext.vue'

const props = defineProps({
  accordions: {
    type: Array,
    required: true,
  },
})

const accordionsList = computed(() => {
  const accordionsList = props.accordions.map((accordion) => {
    accordion.expanded = false
    return accordion
  })
  return accordionsList
})
</script>

<style scoped>
.vue-accordion {
  transition-timing-function: ease;
  transition-property: height;
  height: 0;
}

.vue-accordion__inner {
  display: table;
  width: 100%;
}
</style>
