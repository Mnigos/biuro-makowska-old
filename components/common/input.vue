<script setup lang="ts">
import { defineProps } from 'vue'

import { generateId } from '~/utils'

interface Props {
  label: string
}

const { label } = defineProps<Props>()
const id = generateId(label)
</script>

<template>
  <label :for="id" class="flex flex-col items-center gap-2 relative group">
    {{ label }}

    <span
      class="text-[#606060] absolute bottom-[.4rem] left-1 transition-opacity group-hover:opacity-0 duration-300"
    >
      {{ label }}
    </span>

    <input
      :id="id"
      class="border-b-2 border-accent bg-primary-dark outline-none p-1 rounded-md shadow-2xl w-full"
    />
  </label>
</template>
