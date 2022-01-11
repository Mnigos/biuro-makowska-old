<script setup lang="ts">
const cardContent = `
<p>
  Proponuję Państwu profesjonalne usługi księgowe<br />
  w atrakcyjnych cenach z możliwością odbioru dokumentów od klienta.
</p>

<ul class="list-inside list-disc">
  <p>Posiadam:</p>
  <li>wieloletnie doświadczenie w obsłudze księgowej firm</li>
  <li>licencję Ministra Finansów</li>
  <li>ubezpieczenie w zakresie odpowiedzialności cywilnej</li>
</ul>`
</script>

<template>
  <div class="flex flex-col md:flex-row justify-evenly w-full">
    <header>
      <!-- This is for SEO optimalization -->
      <div class="hidden">
        <h1>Biuro Rachunkowe</h1>
        <p>Joanna Makowska</p>
      </div>

      <img src="/logo.png" alt="Logo Biuro Makowska" />
    </header>

    <the-card title="Witam na mojej stronie" :content="cardContent" class="mt-48" />
  </div>
</template>
