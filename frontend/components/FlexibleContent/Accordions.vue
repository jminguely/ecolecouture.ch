<template>
  <div>
    <div v-for="(accordion, i) in accordionsList" :key="i" class="mb-3">
      <button
        class="font-bold"
        @click="accordion.expanded = !accordion.expanded"
      >
        {{ accordion.title }}
        <span
          class="relative inline-block"
          :class="[accordion.expanded ? ' rotate-180 top-1' : '-top-1']"
        >
          ⌄
        </span>
      </button>
      <VueAccordion :expanded="accordion.expanded">
        <div v-html="accordion.richtext"></div>
      </VueAccordion>
    </div>
  </div>
</template>

<script setup>
import { VueAccordion } from '@ztrehagem/vue-accordion'

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
