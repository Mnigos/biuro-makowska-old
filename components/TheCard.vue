<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <section class="bg-primary p-8 rounded-2xl flex flex-col gap-8">
    <header>
      <h1 class="text-3xl">{{ title }}</h1>
    </header>

    <main>
      <!--eslint-disable-next-line vue/no-v-html-->
      <div class="flex flex-col gap-4" v-html="content" />
    </main>
  </section>
</template>
