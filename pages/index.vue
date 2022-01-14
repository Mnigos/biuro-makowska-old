<template>
  <div class="flex flex-col w-full">
    <article class="flex flex-col md:flex-row justify-evenly min-h-screen items-start">
      <header>
        <!-- This is for SEO optimalization -->
        <div class="hidden">
          <h1>Biuro Rachunkowe</h1>
          <p>Joanna Makowska</p>
        </div>

        <img src="/logo.png" alt="Logo Biuro Makowska" />
      </header>

      <the-card title="Witam na mojej stronie" class="mt-48 md:w-128">
        <p>
          Proponuję Państwu profesjonalne usługi księgowe w atrakcyjnych cenach z możliwością
          odbioru dokumentów od klienta.
        </p>

        <ul class="list-inside list-disc">
          <p>Posiadam:</p>
          <li>wieloletnie doświadczenie w obsłudze księgowej firm</li>
          <li>licencję Ministra Finansów</li>
          <li>ubezpieczenie w zakresie odpowiedzialności cywilnej</li>
        </ul>
      </the-card>
    </article>

    <article>
      <contact-form class="w-1/2" />
    </article>
  </div>
</template>
