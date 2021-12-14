<template>
  <div class="bg-primary h-screen flex flex-col">
    <header class="text-white">
      <h1 class="text-3xl">Kontakt</h1>
    </header>

    <main class="text-white text-lg h-screen-xl flex items-center">
      <contact-form :elements="formElements" />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { FormElement } from 'interfaces'

@Component
export default class Contakt extends Vue {
  formElements: FormElement[] = [
    {
      name: 'title',
      label: 'Tytuł',
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      required: true,
    },
    {
      name: 'message',
      label: 'Wiadomość',
      required: true,
      textArea: true,
    },
  ]
}
</script>
