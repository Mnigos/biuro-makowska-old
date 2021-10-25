<template>
  <div class="flex justify-end">
    <ul class="bg-primary flex justify-evenly w-1/3 p-5 rounded-bl-xl">
      <li v-for="({ name, path }, index) in routes" :key="index">
        <nuxt-link class="uppercase" :to="path">{{ name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

interface Route {
  name: string
  path: string
}

@Component
export default class NavBar extends Vue {
  routes: Route[] = [
    {
      name: 'home',
      path: '/',
    },
    {
      name: 'nowości',
      path: '/nowosci',
    },
    {
      name: 'oferta',
      path: '/oferta',
    },
    {
      name: 'kontakt',
      path: '/kontakt',
    },
  ]
}
</script>

<style lang="postcss">
a {
  color: white;
  font-weight: 500;
}
.nuxt-link-active {
  @apply border-white border-b-2;
}
</style>
