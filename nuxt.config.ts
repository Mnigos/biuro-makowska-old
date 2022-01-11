import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  head: {
    title: 'Biuro Makowska',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Biuro Rachunkowe Joanna Makowska' },
    ],
  },
  buildModules: ['nuxt-windicss'],
  windicss: {
    analyze: true,
  },
})
