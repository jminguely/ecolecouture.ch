export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  return {
    provide: {
      getRandomInt: (max) => Math.ceil(Math.random() * max),
      processCustomURL: (content) => {
        const baseUrl = config.public.wp
        const regex = new RegExp(`(${baseUrl})(?!\app\\/uploads)(\\/.*$)?`, 'g')

        return content.replace(regex, `/$2`)
      },
    },
  }
})
