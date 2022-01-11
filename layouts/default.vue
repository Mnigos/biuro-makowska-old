<script setup lang="ts">
/* @ts-expect-error */
const route = useRoute()
</script>

<template>
  <div
    class="bg-primary min-h-screen text-white"
    :style="route.path === '/' ? 'background-image: url(/background.jpg)' : ''"
  >
    <div class="flex justify-end">
      <TheNavbar />
    </div>

    <div class="p-4 sm:p-8 md:p-16">
      <slot />
    </div>
  </div>
</template>
