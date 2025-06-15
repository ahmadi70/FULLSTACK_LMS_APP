// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/test-utils/module', '@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' }
    ]
  },
  vite:{
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "@/assets/style/variables.scss" as *;
          @use "@/assets/style/mixins.scss" as *;
          @use "@/assets/style/functions.scss" as *;
          `,
        },
      },
    },
   }
})