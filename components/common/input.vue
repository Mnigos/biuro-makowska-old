<script setup lang="ts">
import { defineProps, ref } from 'vue'

import { generateId } from '~/utils'

interface Props {
  label: string
  validator?: (value: string) => Array<string | boolean>
}
const { label, validator } = withDefaults(defineProps<Props>(), {
  validator: () => [],
})

const id = generateId(label)
const value = ref('')
const errors = ref<Array<string | boolean>>([])

const validate = () => errors.value.push(...validator(value.value))
</script>

<template>
  <label :for="id" class="flex flex-col items-center gap-2 relative group mb-5">
    {{ label }}

    <span
      class="text-[#606060] absolute bottom-[.4rem] left-1 transition-opacity group-hover:opacity-0 duration-300"
    >
      {{ label }}
    </span>

    <input
      :id="id"
      v-model="value"
      class="border-b-2 border-accent bg-primary-dark outline-none p-1 rounded-md shadow-2xl w-full"
      @change="validate"
    />

    <p v-for="(error, index) in errors" :key="index" class="absolute -bottom-8 text-red-500">
      {{ error }}
    </p>
  </label>
</template>
