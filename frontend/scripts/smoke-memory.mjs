#!/usr/bin/env node

import { readFile } from 'node:fs/promises'

const apiUrl = process.env.API_URL || process.env.SMOKE_API_URL
const iterations = Number(process.env.SMOKE_ITERATIONS || 3)
const timeoutMs = Number(process.env.SMOKE_TIMEOUT_MS || 8000)
const maxHeapDeltaMb = Number(process.env.SMOKE_MAX_HEAP_DELTA_MB || 128)
const homepageSlugs = (process.env.SMOKE_HOMEPAGE_SLUGS || 'accueil,startseite')
  .split(',')
  .map((value) => value.trim())
  .filter(Boolean)
const pageUris = (process.env.SMOKE_PAGE_URIS || '')
  .split(',')
  .map((value) => value.trim())
  .filter(Boolean)
const menuLocales = (process.env.SMOKE_MENU_LOCALES || 'FR,DE')
  .split(',')
  .map((value) => value.trim())
  .filter(Boolean)

if (!apiUrl) {
  console.error('Missing API_URL or SMOKE_API_URL')
  process.exit(1)
}

const homepageQuery = await readFile(
  new URL('../graphql/fetchHomepage.gql', import.meta.url),
  'utf8'
)
const pageQuery = await readFile(
  new URL('../graphql/fetchPage.gql', import.meta.url),
  'utf8'
)
const menuQuery = await readFile(
  new URL('../graphql/fetchMenu.gql', import.meta.url),
  'utf8'
)

async function postGraphQL(query, variables) {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs)
  const startedAt = performance.now()

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
      signal: controller.signal,
    })

    const payload = await response.text()

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} on ${JSON.stringify(variables)}`)
    }

    const parsed = JSON.parse(payload)
    if (parsed.errors?.length) {
      throw new Error(parsed.errors[0]?.message || 'GraphQL error')
    }

    return {
      bytes: Buffer.byteLength(payload),
      ms: Math.round(performance.now() - startedAt),
    }
  } finally {
    clearTimeout(timeoutId)
  }
}

function heapUsedMb() {
  return Math.round(process.memoryUsage().heapUsed / 1024 / 1024)
}

const heapStart = heapUsedMb()
let heapPeak = heapStart

for (let iteration = 1; iteration <= iterations; iteration += 1) {
  for (const slug of homepageSlugs) {
    const result = await postGraphQL(homepageQuery, { uri: slug })
    heapPeak = Math.max(heapPeak, heapUsedMb())
    console.log(`homepage:${slug} bytes=${result.bytes} ms=${result.ms} heap=${heapUsedMb()}MB`)
  }

  for (const uri of pageUris) {
    const result = await postGraphQL(pageQuery, { uri })
    heapPeak = Math.max(heapPeak, heapUsedMb())
    console.log(`page:${uri} bytes=${result.bytes} ms=${result.ms} heap=${heapUsedMb()}MB`)
  }

  for (const locale of menuLocales) {
    const result = await postGraphQL(menuQuery, {
      lang: locale,
      location: 'MENU_PRIMARY',
    })
    heapPeak = Math.max(heapPeak, heapUsedMb())
    console.log(`menu:${locale} bytes=${result.bytes} ms=${result.ms} heap=${heapUsedMb()}MB`)
  }

  console.log(`iteration:${iteration} peakHeap=${heapPeak}MB`)
}

const heapDelta = heapPeak - heapStart
console.log(`startHeap=${heapStart}MB peakHeap=${heapPeak}MB delta=${heapDelta}MB`)

if (heapDelta > maxHeapDeltaMb) {
  console.error(`Heap delta ${heapDelta}MB exceeded ${maxHeapDeltaMb}MB`)
  process.exit(1)
}
