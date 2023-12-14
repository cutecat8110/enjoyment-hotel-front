// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  typescript: {
    typeCheck: true
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    'nuxt-icon'
  ],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in'
    }
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE
    }
  },

  i18n: {
    langDir: 'locales',
    locales: [
      { code: 'en', file: 'en.json', iso: 'en-US', name: 'English' },
      { code: 'zh', file: 'zh.json', iso: 'zh-TW', name: '繁體中文' }
    ],
    lazy: true,
    defaultLocale: 'zh',
    strategy: 'no_prefix',
    vueI18n: './i18n.config.js'
  },

  css: ['~/assets/scss/main.scss']
})
