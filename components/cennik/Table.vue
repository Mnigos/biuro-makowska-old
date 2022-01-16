<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  title: string
  rows: number
  cols: number
  content: string[]
}

const { title, rows, cols, content } = defineProps<Props>()

function calculateIndex(row: number, col: number) {
  return row * cols + col
}
</script>

<template>
  <section class="flex flex-col gap-3 md:w-1/2">
    <h3 class="text-lg font-semibold">{{ title }}</h3>

    <table class="max-w-screen block overflow-x-auto">
      <tr v-for="(_rowEl, rowIndex) in Array.from({ length: rows })" :key="rowIndex">
        <td
          v-for="(_colEl, colIndex) in Array.from({ length: cols })"
          :key="colIndex"
          class="border-2 border-accent p-2"
        >
          {{ content[calculateIndex(rowIndex, colIndex)] }}
        </td>
      </tr>
    </table>
  </section>
</template>
