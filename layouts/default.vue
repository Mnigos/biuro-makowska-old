<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div
    class="bg-primary-darker min-h-screen text-white bg-no-repeat"
    :style="route.path === '/' ? 'background-image: url(/background.jpg)' : ''"
  >
    <div class="flex justify-end absolute right-0">
      <the-navbar />
    </div>

    <div class="flex flex-col justify-between min-h-screen">
      <main class="p-4 sm:p-8 md:p-16">
        <slot />
      </main>

      <the-footer class="justify-self-end" />
    </div>
  </div>
</template>
