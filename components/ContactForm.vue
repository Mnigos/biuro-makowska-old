<template>
  <form
    class="lg:w-1/3 p-5 h-2/3 bg-primary-dark rounded-xl flex flex-col gap-5"
    @submit.prevent="submit"
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
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

import { FormElement } from 'interfaces'

@Component
export default class ContactForm extends Vue {
  @Prop({ required: true, type: Array }) readonly elements!: FormElement[]

  formElements: FormElement[] = this.elements

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
