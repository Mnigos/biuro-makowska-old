<script setup lang="ts">
/* eslint-disable sonarjs/no-duplicate-string */
const firstSections = [
  {
    title: 'Obsługa księgowa',
    rows: 1,
    cols: 3,
    table: ['Do 5 dokumentów', '150,00zł', 'Każdy kolejny dokument 4zł'],
  },
  {
    title: 'Obsługa płacowa',
    rows: 3,
    cols: 2,
    table: [
      '',
      'Pakiet',
      'lista płac dla pracowników i rachunki zleceniobiorców z ZUS',
      '50,00 zł/osoba',
      'rachunki dla zleceniobiorców bez ZUS',
      '40,00 zł/osoba',
    ],
  },
  {
    title: 'Obsługa kadrowa',
    rows: 2,
    cols: 2,
    table: ['kardy', '60,00 zł/osoba', 'dokumentacja zleceniobiorcy', '30,00 zł/osoba'],
  },
]

const secondSections = [
  {
    title: 'Obsługa księgowa',
    rows: 1,
    cols: 3,
    table: ['Do 20 dokumentów', '250,00zł', 'Każdy kolejny dokument 4zł'],
  },
  {
    title: 'Obsługa płacowa',
    rows: 2,
    cols: 2,
    table: [
      'lista płac dla pracowników i rachunki zleceniobiorców z ZUS',
      '50,00 zł/osoba',
      'rachunki dla zleceniobiorców bez ZUS',
      '40,00 zł/osoba',
    ],
  },
  {
    title: 'Obsługa kadrowa',
    rows: 3,
    cols: 2,
    table: [
      '',
      'Pakiet',
      'kardy',
      '60,00 zł/osoba',
      'dokumentacja zleceniobiorcy',
      '40,00 zł/osoba',
    ],
  },
]

const thirdSections = [
  {
    title: 'Usługi księgowe dodatkowe',
    rows: 10,
    cols: 2,
    table: [
      'Konstultacja księgowa- 1 godzina',
      '150,00zł',
      'Zeznanie roczne PIT-37, PIT-38, PIT-28',
      'od 100,00zł',
      'Korekta zeznania, deklaracji, pliku jpk, wniosku ZUS',
      'od 50,00zł',
      'Usługa expresowa w ciągu 24 godzin',
      '100,00zł',
      'Delegacja krajowa',
      '30,00 zł',
      'Delegacja zagraniczna',
      '60,00 zł',
      'Różnice kursowe na KPIR – 1 dokument',
      '5,00 zł',
      'Przewalutowanie – 1 dokument',
      '5,00 zł',
      'Dokumentacja do kredytu',
      '100,00 zł',
      'Opóźnienie w dostarczeniu dokumentów powyżej 5 dni',
      'Dodatkowo 20% ceny podstaw',
    ],
  },
  {
    title: 'Usługi płacowe dodatkowe nie objęte pakietem',
    rows: 7,
    cols: 2,
    table: [
      'Korekta listy płac i deklaracji ZUS',
      '50,00 zł',
      'Roczne sprawozdanie wynagrodzeń i podatków',
      '20,00 zł',
      'Wniosek do PFRON pierwszy pracownik',
      '150,00 zł',
      'Wniosek do PFRON kolejny pracownik',
      '80,00 zł',
      'PFRON deklaracja',
      '100,00 zł',
      'Oświadczenie o zarobkach emerytów i rencistów do ZUS',
      '50,00 zł',
      'Obliczenie dodatkowych składników zmiennych na liście',
      '20,00 zł',
    ],
  },
  {
    title: 'Usługi kadrowe dodatkowe poza pakietem',
    rows: 6,
    cols: 2,
    table: [
      'Dokument kadrowy (np. umowa, świadectwo, zaświadczenie)',
      '50,00 zł',
      'Kompletowanie dokumentacji zleceniobiorcy',
      '50,00 zł',
      'Wyliczenie urlopu pracowniczego dla 1 osoby',
      '60,00 zł',
      'Pismo w sprawie zajęcia komorniczego',
      '40,00 zł',
      'Sprawdzenie dokumentacji przed kontrolą PIP',
      '150,00 zł',
      'Konsultacja kadrowa 1 godzina',
      '150,00 zł',
    ],
  },
  {
    title: 'Usługi dodatkowe ZUS',
    rows: 9,
    cols: 2,
    table: [
      'Zgłoszenie lub wyrejestrowanie do ubezpieczenia ZUA, ZWUA, ZZA,  RUD',
      '50,00 zł',
      'Deklaracja rozliczeniowa DRA',
      '50,00 zł',
      'Ustalenie składek preferencyjnych na podstawie dochodu',
      '100,00 zł',
      'Roczne rozliczenie składki zdrowotnej',
      '100,00 zł',
      'Wnioski o urlopy macierzyńskie, opiekuńcze, ojcowskie',
      '50,00 zł',
      'Wniosek A1',
      '100,00 zł',
      'Wniosek o niezaleganie w ZUS',
      '50,00 zł',
      'Korekta DRA',
      '50,00 zł',
      'Wniosek Z-3, Z-3A, Z3B',
      '50,00 zł',
    ],
  },
]
</script>

<template>
  <div class="min-h-full flex flex-col gap-16 overflow-x-hidden">
    <header class="lg:w-2/3 mt-12 sm:mt-0">
      <h1 class="text-2xl md:text-3xl md:mt-12">
        Umowy o prowadzenie ksiąg oraz umowa o obslugę kadrową zawartą z
        <p class="font-bold">
          Biurem Rachunkowym <span class="text-accent-light">Joanna Makowska</span>
        </p>
      </h1>
    </header>

    <article class="flex flex-col gap-16 items-center">
      <expand-card
        title="Cennik usług księgowych dla podatników zwolnionych z VAT"
        class="w-full lg:w-2/3"
      >
        <cennik-table
          v-for="({ title, rows, cols, table }, index) in firstSections"
          :key="index"
          :title="title"
          :rows="rows"
          :cols="cols"
          :content="table"
        />
      </expand-card>

      <expand-card title="Cennik usług księgowych dla podatników VAT" class="w-full lg:w-2/3">
        <cennik-table
          v-for="({ title, rows, cols, table }, index) in secondSections"
          :key="index"
          :title="title"
          :rows="rows"
          :cols="cols"
          :content="table"
        />
      </expand-card>

      <expand-card title="Cennik usług dodatkowych" class="w-full lg:w-2/3">
        <cennik-table
          v-for="({ title, rows, cols, table }, index) in thirdSections"
          :key="index"
          :title="title"
          :rows="rows"
          :cols="cols"
          :content="table"
        />
      </expand-card>
    </article>

    <article>
      <p class="font-semibold text-xl">
        ZUS – składka zdrowotna według Nowego Ładu – naliczenie i wysyłka deklaracji – 50 zł/mc
      </p>

      <p class="text-red-500">Podane ceny, są cenami netto, należy do nich doliczyć 23% VAT</p>
    </article>
  </div>
</template>
