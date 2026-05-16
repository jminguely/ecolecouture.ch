export async function useTimedAsyncQuery(query, variables, options = {}) {
  const timeoutMs = options.timeoutMs ?? 8000
  const fallbackData = options.fallbackData ?? null
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs)

  try {
    return await useAsyncQuery(query, variables, {
      ...options,
      context: {
        ...(options.context || {}),
        fetchOptions: {
          ...((options.context && options.context.fetchOptions) || {}),
          signal: controller.signal,
        },
      },
    })
  } catch (error) {
    return {
      data: ref(fallbackData),
      error: ref(error),
      pending: ref(false),
      refresh: async () => { },
    }
  } finally {
    clearTimeout(timeoutId)
  }
}
