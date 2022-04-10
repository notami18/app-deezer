<template>
  <header>
    <SearchArtist @busqueda="callback" />
    <CardInfo :info="obj" />
    <!-- <div>{{ obj }}</div> -->
  </header>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import service from "./services/search"
import SearchArtist from "./components/SearchArtist.vue";
import CardInfo from "./components/CardInfo.vue";


const obj = reactive([] as any[]);

async function callback(name: string) {
  obj.push(await service(name));
  debugger
}

</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
:root {
  --white: #ffffff;
  --black: #000000;
  --dark: #232830;
  --very-light-pink: #c7c7c7;
  --text-input-field: #f7f7f7;
  --hospital-green: #acd9b2;
  --sm: 14px;
  --md: 16px;
  --lg: 18px;
}

body {
  margin: 0;
  font-family: "Quicksand", sans-serif;
}
</style>
