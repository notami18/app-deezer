<template>
  <header>
    <SearchArtist />
  </header>
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import service from "./services/search"
import HelloWorld from './components/HelloWorld.vue'
import SearchArtist from "./components/SearchArtist.vue";

// onMounted(async () => console.log(await service("eminen")))
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
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
