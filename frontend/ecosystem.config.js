module.exports = {
  apps: [
    {
      name: 'nuxt',
      exec_mode: 'fork',
      instances: 1, // Or a number of instances
      script: './.output/server/index.mjs',
      env: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=768',
      },
    },
  ],
}
