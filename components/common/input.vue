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
  <label :for="id">
    {{ label }}
    <input :id="id" />
  </label>
</template>
