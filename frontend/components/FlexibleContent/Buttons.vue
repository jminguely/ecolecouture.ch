<template>
  <div class="gap-3 flex items-start">
    <CustomButton v-for="(button, i) in buttons" :key="i" :button="button" />
  </div>
</template>

<script setup>
import CustomButton from '@/components/FlexibleContent/CustomButton.vue'

const props = defineProps({
  buttons: {
    type: Array,
    required: true,
  },
})
</script>
