<template>
  <div>
    <div v-for="(accordion, i) in accordions" :key="i" class="mb-3">
      <button class="h3" @click="toggle(i)">
        {{ accordion.title }}
        <span
          class="relative inline-block left-1 origin-center transition-transform"
          :class="[expandedState[i] && '-rotate-180']"
        >
          <svg class="icon w-3 h-3 relative top-0.5">
            <use href="~/assets/img/icons.svg#caret"></use>
          </svg>
        </span>
      </button>
      <VueAccordion :expanded="!!expandedState[i]">
        <div class="pb-1 pl-14">
          <Richtext :richtext="accordion.richtext" />
        </div>
      </VueAccordion>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { VueAccordion } from '@ztrehagem/vue-accordion'
import Richtext from './Richtext.vue'

const props = defineProps({
  accordions: {
    type: Array,
    required: true,
  },
})

const expandedState = reactive({})

const toggle = (index) => {
  expandedState[index] = !expandedState[index]
}
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
