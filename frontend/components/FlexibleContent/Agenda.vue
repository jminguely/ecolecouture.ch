<template>
  <div class="agenda">
    <template v-for="event in events" :key="event.id">
      <div class="event-date" v-html="event.date"></div>
      <div class="event-text" v-html="event.richtext" />
    </template>
  </div>
</template>

<script setup>
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

.agenda {
  display: grid;
  grid-template-columns: auto;

  .event-date {
    @apply pt-5;
  }

  .event-text {
    @apply border-b pb-5;

    &:last-child {
      border-bottom: none;
    }
  }

  @screen md {
    grid-template-columns: min-content auto;

    .event-date,
    .event-text {
      @apply border-b py-5;

      &:nth-last-child(-n + 2) {
        border-bottom: none;
      }
    }

    .event-text {
      @apply pl-5;
    }
  }
}
</style>
