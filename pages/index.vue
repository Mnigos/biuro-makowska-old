<script setup lang="ts">
import { ref } from 'vue'

const homeContent = ref(`
<p>
  Proponuję Państwu profesjonalne usługi księgowe w atrakcyjnych cenach z możliwością odbioru dokumentów od klienta.
</p>

<ul class="list-inside list-disc">
  <p>Posiadam:</p>
  <li>wieloletnie doświadczenie w obsłudze księgowej firm</li>
  <li>licencję Ministra Finansów</li>
  <li>ubezpieczenie w zakresie odpowiedzialności cywilnej</li>
</ul>`)

const aboutContent =
  ref(`<p>Biuro Rachunkowe Joanna Makowska to certyfikowane biuro, które zapewnia swoim klientom profesjonalną obsługę oraz rzetelne i fachowe świadczenie usług księgowych.</p>
<p>Wieloletnia praca zawodowa, nabyta wiedza teoretyczna i praktyczna oraz umiejętności jej wykorzystania to dowód na rzetelną realizację usług.</p>
<p>Działalność biura rachunkowego to dziś istotna pomoc dla wielu przedsiębiorców. Chcemy wychodzić naprzeciw wymaganiom i oczekiwaniom, które pojawiają się ze strony przedsiębiorców, dlatego oferujemy szeroki zakres usług księgowych i kadrowych w ramach prowadzenia KPiR, ksiąg rachunkowych, obsługi płac pracowniczych, deklaracji podatkowych, ZUS, kontaktów z Urzędem Skarbowy, rozliczeń rocznych PIT oraz pomocy przy założeniu działalności gospodarczej.</p>
<p>Świadczone przez nas usługi księgowe i kadrowe realizujemy na podstawie certyfikatu księgowego wydanego przez Ministra Finansów nr 26183/01. Posiadamy obowiązkowe i dodatkowe ubezpieczenie OC.</p>
<p>Jednocześnie stale poszerzamy swoją merytoryczną wiedzę uczestnicząc na bieżąco w organizowanych szkoleniach, chociażby w Stowarzyszeniach Księgowych w Polsce.
Serdecznie zapraszamy Państwa do skorzystania z naszych kompleksowych i elastycznie dopasowanych do Państwa potrzeb usług.</p>
`)
</script>

<template>
  <div class="w-full flex flex-col gap-36">
    <section class="flex flex-col md:flex-row justify-evenly min-h-[90vh] items-start">
      <header>
        <!-- This is for SEO optimalization -->
        <div class="hidden">
          <h1>Biuro Rachunkowe</h1>
          <p>Joanna Makowska</p>
        </div>

        <img src="/logo.png" alt="Logo Biuro Makowska" />
      </header>

      <the-card title="Witam na mojej stronie" :content="homeContent" class="mt-64 md:w-128" />
    </section>

    <section>
      <the-card title="O mnie" :content="aboutContent" class="md:w-1/2" />
    </section>
  </div>
</template>
