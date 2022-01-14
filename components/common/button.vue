<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  label: string
}

const { label } = defineProps<Props>()
</script>

<template>
  <button
    class="bg-accent rounded-lg px-8 py-2 border-2 border-accent active:bg-primary hover:shadow-2xl transition-all duration-300"
  >
    {{ label }}
  </button>
</template>
