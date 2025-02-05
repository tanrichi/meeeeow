import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@nuxthub/core', '@nuxt/eslint', '@clerk/nuxt'],

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  vite: { plugins: [tailwindcss()] },

  runtimeConfig: {
    public: {
      helloText: 'meeeeow 👋',
      clerkPublishableKey: '',
    },
    clerkSecretKey: '',
  },

  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-07-30',

  hub: {},

  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
      },
    },
  },
})
