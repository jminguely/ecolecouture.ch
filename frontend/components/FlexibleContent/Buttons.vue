<template>
  <div class="gap-3 flex items-start">
    <Button v-for="(button, i) in buttons" :key="i" :button="button" />
  </div>
</template>

<script setup>
import Button from '@/components/FlexibleContent/Button.vue'

const props = defineProps({
  buttons: {
    type: Array,
    required: true,
  },
})
</script>
