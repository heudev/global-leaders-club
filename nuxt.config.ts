export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
  ],

  i18n: {
    locales: [
      { code: 'tr', name: 'Türkçe', file: 'tr.json' },
      { code: 'en', name: 'English', file: 'en.json' },
    ],
    defaultLocale: 'tr',
    lazy: true,
    langDir: '../i18n',
    strategy: 'prefix_except_default',
  },

  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700, 800, 900],
    },
    display: 'swap',
  },

  app: {
    head: {
      title: 'Küresel Liderler Kulübü | İzmir Ekonomi Üniversitesi',
      meta: [
        { name: 'description', content: 'İzmir Ekonomi Üniversitesi Küresel Liderler Kulübü - Liderlik becerilerimizi beraber geliştirdiğimiz, uluslararası perspektif kazandığımız bir öğrenci topluluğu.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
    },
  },
})
