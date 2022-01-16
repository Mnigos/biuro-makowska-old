<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface Page {
  title: string
  path: string
}

const pages = ref<Page[]>([
  {
    title: 'Strona główna',
    path: '/',
  },
  {
    title: 'Kontakt',
    path: '/kontakt',
  },
  {
    title: 'Cennik',
    path: '/cennik',
  },
])

const showNavbar = ref(true)
let lastScrollPosition = 0

onMounted(() => window.addEventListener('scroll', handleScroll))

onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))

function handleScroll() {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop

  if (currentScrollPosition <= 1) {
    showNavbar.value = true

    return
  }

  if (Math.abs(currentScrollPosition - lastScrollPosition) < 1) return

  showNavbar.value = currentScrollPosition < lastScrollPosition

  lastScrollPosition = currentScrollPosition
}
</script>

<template>
  <nav
    class="bg-accent text-white font-semibold p-4 w-full md:w-96 md:rounded-bl-2xl shadow-2xl"
    :class="showNavbar ? 'fixed' : ''"
  >
    <ul class="flex gap-4 justify-around">
      <li v-for="({ title, path }, index) in pages" :key="index">
        <nuxt-link :to="path">
          {{ title }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>
