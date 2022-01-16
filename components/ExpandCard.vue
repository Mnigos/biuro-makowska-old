<script setup lang="ts">
import { defineProps, ref, computed } from 'vue'

import Button from './common/button.vue'

interface Props {
  title: string
}

const { title } = defineProps<Props>()

const isExpanded = ref(false)
const buttonLabel = computed(() => (isExpanded.value ? 'Zwiń' : 'Rozwiń'))
</script>

<template>
  <section class="bg-primary p-8 rounded-2xl flex flex-col gap-8 shadow-2xl">
    <header class="flex justify-between items-center">
      <h1 class="text-3xl">{{ title }}</h1>

      <Button :label="buttonLabel" @click="isExpanded = !isExpanded" />
    </header>

    <main v-if="isExpanded">
      <div class="flex flex-col gap-8">
        <slot />
      </div>
    </main>
  </section>
</template>
