<template>
  <div>
    <h2>Erreur</h2>
  </div>
</template>

<script>
export default {
  setup() {
    const data = ref(null) // Assuming data is fetched asynchronously

    // Simulate fetching data
    onMounted(async () => {
      try {
        const response = await fetchData() // Replace with actual data fetching logic
        data.value = response || {} // Ensure data is not null
      } catch (error) {
        console.error('Failed to fetch data:', error)
      }
    })

    return {
      title: computed(() => data.value?.title || 'Default Title'), // Provide a fallback title
    }
  },
}
</script>
