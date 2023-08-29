<template>
  <h2 class="h1 lg:w-2/3">{{ title }}</h2>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
