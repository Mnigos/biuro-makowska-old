<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

interface Props {
  label: string
  id: string
  color: string
}

const { label, id, color } = withDefaults(defineProps<Props>(), {
  color: 'accent',
})
</script>

<template>
  <label :for="id" class="relative group h-10 flex flex-col justify-end">
    <span
      class="absolute text-gray-300 transition-opacity duration-300 group-hover:opacity-0 bottom-1"
    >
      {{ label }}
    </span>

    <input class="bg-primary border-b-2 outline-none" :class="`border-${color}`" />
  </label>
</template>
