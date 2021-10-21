export default {
  target: 'static',
  head: {
    title: 'biuro-makowska',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Kompleksowa obsługa księgowa dla firm i osób prywatnych',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    'nuxt-windicss',
  ],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],
  pwa: {
    manifest: {
      lang: 'pl',
    },
  },
}
