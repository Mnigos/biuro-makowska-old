<template>
  <div class="bg-primary flex flex-col gap-8 w-full items-center p-4 rounded-2xl py-12">
    <header>
      <h1 class="text-4xl font-semibold">Kontakt</h1>
    </header>

    <div class="flex flex-col gap-4 w-1/2">
      <common-input label="Tytuł" />

      <common-input label="Twój e-mail" />

      <common-input label="Treść" />
    </div>

    <div class="border-t-2 p-8">
      <common-button label="Wyślij" />
    </div>
  </div>
</template>
