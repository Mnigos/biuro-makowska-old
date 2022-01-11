<script setup lang="ts">
import { ref } from 'vue'

interface Page {
  title: string
  path: string
}

const pages = ref<Page[]>([
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
])
</script>

<template>
  <nav class="bg-accent text-white font-semibold p-4 w-full md:w-64 md:rounded-bl-2xl">
    <ul class="flex gap-4 justify-around">
      <li v-for="({ title, path }, index) in pages" :key="index">
        <router-link :to="path">
          {{ title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
