<template>
  <div>
    <templat
      v-for="event in events"
      :key="event.id"
      class="event grid sm:grid-cols-3 md:grid-cols-5 py-5 gap-x-8"
    >
      <div v-html="event.date"></div>
      <Richtext
        class="sm:col-span-2 md:col-span-4"
        :richtext="event.richtext"
      />
    </templat>
  </div>
</template>

<script setup>
import Richtext from './Richtext.vue'

const props = defineProps({
  events: {
    type: Array,
    required: true,
  },
})
</script>

<style lang="postcss" scoped>
.event {
  border-bottom: 2px solid currentColor;

  &:last-child {
    border-bottom: none;
  }
}
</style>
