<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  href: string
}

const { href } = defineProps<Props>()
</script>

<template>
  <a
    :href="href"
    class="flex items-center gap-2 hover:text-accent transition-colors duration-300"
    target="_blank"
  >
    <slot />
  </a>
</template>
