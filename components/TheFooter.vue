<script setup lang="ts">
import { ref } from 'vue'

const date = new Date()

const year = ref(date.getFullYear())
</script>

<template>
  <footer class="bg-accent p-2 flex justify-center">
    <p>&copy; {{ year }} Igor Makowski</p>
  </footer>
</template>
