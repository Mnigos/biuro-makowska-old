import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  head: {
    title: 'Biuro Makowska',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Biuro Rachunkowe Joanna Makowska to certyfikowane biuro, które zapewnia swoim klientom profesjonalną obsługę oraz rzetelne i fachowe świadczenie usług księgowych.',
      },
      {
        name: 'msapplication-TileColor',
        content: '#000000',
      },
      {
        name: 'theme-color',
        content: '#ffffff',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '64x64', href: '/favicon-64x64.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
    ],
  },
  buildModules: ['nuxt-windicss'],
  windicss: {
    analyze: true,
  },
})
