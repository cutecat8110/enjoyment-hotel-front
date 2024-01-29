// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  typescript: {
    typeCheck: true
  },

  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@vee-validate/nuxt',
    'nuxt-icon'
  ],

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE
    }
  },
  vite: {
    // 定義全域共用 Sass / SCSS 變數
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/scss/bootstrap/_color.scss";
            @import "@/assets/scss/custom/_variables.scss";
          `
        }
      }
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in'
    },
    head: {
      link: []
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

  css: ['@/assets/scss/app.scss'],

  postcss: {
    // CSS 屬性加上瀏覽器相容性前綴
    plugins: {
      autoprefixer: true
    }
  },
  veeValidate: {
    // 啟用 auto imports
    autoImports: true,
    // 更換 components 名稱
    componentNames: {
      Form: 'VForm',
      Field: 'VField',
      FieldArray: 'VFieldArray',
      ErrorMessage: 'VErrorMessage'
    }
  }
})
