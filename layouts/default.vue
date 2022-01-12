<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div
    class="bg-primary-darker min-h-screen text-white flex flex-col justify-between bg-no-repeat"
    :style="route.path === '/' ? 'background-image: url(/background.jpg)' : ''"
  >
    <div class="flex justify-end">
      <the-navbar />
    </div>

    <div class="p-4 sm:p-8 md:p-16">
      <slot />
    </div>

    <the-footer class="justify-self-end" />
  </div>
</template>
