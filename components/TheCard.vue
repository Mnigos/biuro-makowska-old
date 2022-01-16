<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  title: string
}

const { title } = defineProps<Props>()
</script>

<template>
  <section class="bg-primary p-8 rounded-2xl flex flex-col gap-8 shadow-2xl">
    <header>
      <h1 class="text-3xl">{{ title }}</h1>
    </header>

    <main>
      <div class="flex flex-col gap-4">
        <slot />
      </div>
    </main>
  </section>
</template>
