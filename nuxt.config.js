export default {
  target: 'static',
  css: [
    '~/assets/css/main.scss',
  ],
  modules: [
    'nuxt-i18n',
  ],
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  i18n: {
    lazy: true,
    langDir: 'locales/',
    locales: [
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en'
      },
      {
        name: 'Français',
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr'
      },
    ],
    defaultLocale: 'en',
    baseUrl: 'https://kit-suv.netlify.com',
  },
}
