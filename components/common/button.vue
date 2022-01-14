<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  label: string
}

const { label } = defineProps<Props>()
</script>

<template>
  <button>
    {{ label }}
  </button>
</template>
