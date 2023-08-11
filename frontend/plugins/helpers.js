export default defineNuxtPlugin(() => {
  return {
    provide: {
      getRandomInt: (max) => Math.ceil(Math.random() * max),
    },
  }
})
