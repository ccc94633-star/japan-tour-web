<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
:root {
  --washi: #eee2c5;
  --washi-light: #f8efd9;
  --ink: #25231f;
  --indigo: #17466b;
  --indigo-deep: #102f49;
  --vermilion: #a83a2f;
  --ochre: #c18b3a;
  --moss: #5f6b49;
  --line: rgba(37, 35, 31, 0.55);
  font-family: "Yu Mincho", "Hiragino Mincho ProN", "Noto Serif TC",
    "PMingLiU", serif;
  color: var(--ink);
  background: var(--washi);
  font-synthesis: none;
}

* {
  box-sizing: border-box;
}

html {
  min-width: 320px;
  min-height: 100%;
  background: var(--washi);
}

body {
  min-width: 320px;
  min-height: 100vh;
  margin: 0;
  background-color: var(--washi);
  background-image:
    radial-gradient(circle at 20% 10%, rgba(255, 255, 255, 0.34) 0 1px, transparent 2px),
    radial-gradient(circle at 75% 35%, rgba(86, 67, 37, 0.08) 0 1px, transparent 2px),
    repeating-linear-gradient(3deg, transparent 0 7px, rgba(74, 59, 35, 0.035) 8px 9px);
  background-size: 17px 17px, 23px 23px, auto;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

::selection {
  color: var(--washi-light);
  background: var(--vermilion);
}
</style>
