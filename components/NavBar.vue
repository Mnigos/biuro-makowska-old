<template>
  <nav class="flex justify-end">
    <ul
      class="bg-primary flex justify-evenly w-1/3 p-5 rounded-bl-xl text-white"
    >
      <li v-for="({ name, path }, index) in routes" :key="index">
        <nuxt-link
          class="uppercase link hover:text-black"
          :class="{ 'border-b-2 border-white': path === $route.path }"
          :to="path"
        >
          {{ name }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
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

<style scoped lang="postcss">
.link {
  @apply focus:outline-none
    before:transition-transform
    before:duration-300
    before:block
    before:border-t
    before:border-white
    before:scale-x-0
    before:origin-top
    hover:before:scale-x-100
    focus:before:scale-x-100;
}
</style>
