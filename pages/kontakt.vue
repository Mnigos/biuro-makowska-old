<template>
  <div class="bg-primary h-screen flex flex-col">
    <header class="text-white">
      <h1 class="text-3xl">Kontakt</h1>
    </header>

    <main
      class="text-white text-lg h-screen-xl flex items-center"
      @submit.prevent="submit"
    >
      <form
        class="
          lg:w-1/3
          p-5
          h-2/3
          bg-primary-dark
          rounded-xl
          flex flex-col
          gap-5
        "
      >
        <label
          v-for="({ label, required, textArea, name }, index) in formElements"
          :key="index"
          for="title"
          class="flex flex-col gap-4"
        >
          <h3 class="text-2xl">
            {{ label }} <span v-if="required" class="text-red-500">*</span>
          </h3>
          <component
            :is="textArea ? 'textarea' : 'input'"
            id="title"
            v-model="formValues[name]"
            type="text"
            :class="textArea ? 'h-32' : ''"
            class="
              text-xl
              font-sans
              border-b-4 border-accent
              focus:outline-none
              bg-primary
              text-white
              p-1
              rounded-lg
            "
          ></component>
        </label>

        <button class="btn">Wyślij</button>
      </form>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

interface FormElement {
  name: string
  label: string
  required?: boolean
  textArea?: boolean
}

@Component
export default class NavBar extends Vue {
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

  formValues = {
    title: '',
    email: '',
    message: '',
  }

  submit(): void {
    console.log(this.formValues)
  }
}
</script>
