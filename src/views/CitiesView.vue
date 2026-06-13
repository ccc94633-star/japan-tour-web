<script setup>
import { RouterLink } from 'vue-router'
import { cities } from '../data'
</script>

<template>
  <div class="page">
    <RouterLink to="/" class="back-link">← 回到卷首</RouterLink>
    <header class="header">
      <span class="header-seal">旅</span>
      <div>
        <p class="kicker">名所案內</p>
        <h1>選擇旅宿之地</h1>
        <p class="intro">擇一城，循著古今風景啟程</p>
      </div>
    </header>

    <main class="city-list">
      <RouterLink
        v-for="(city, index) in cities"
        :key="city.city"
        :to="`/cities/${city.city}`"
        class="city-card"
      >
        <span class="number">{{ String(index + 1).padStart(2, '0') }}</span>
        <div class="city-title">
          <span class="city-name">{{ city.cityName }}</span>
          <small>{{ city.city.toUpperCase() }}</small>
        </div>
        <span class="arrow">行</span>
      </RouterLink>
    </main>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Microsoft JhengHei', sans-serif;
  background: #f0f4f8;
  min-height: 100vh;
}

.page {
  width: min(100% - 36px, 620px);
  min-height: 100vh;
  margin: 0 auto;
  padding: 42px 0 70px;
}

.header {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  margin: 34px 0 38px;
  padding: 22px 0;
  border-top: 3px double var(--ink);
  border-bottom: 1px solid var(--ink);
}

.header h1 {
  margin: 0;
  color: var(--indigo-deep);
  font-size: clamp(27px, 7vw, 38px);
  font-weight: 900;
  letter-spacing: 0.12em;
}

.header-seal {
  display: grid;
  place-items: center;
  width: 48px;
  height: 62px;
  color: var(--washi-light);
  background: var(--vermilion);
  border: 2px solid var(--vermilion);
  outline: 1px solid var(--vermilion);
  outline-offset: 3px;
  font-size: 25px;
  font-weight: 900;
}

.kicker {
  margin: 0 0 4px;
  color: var(--vermilion);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.45em;
}

.header .intro {
  margin: 8px 0 0;
  color: rgba(37, 35, 31, 0.67);
  font-size: 14px;
  letter-spacing: 0.12em;
}

.back-link {
  color: var(--indigo);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-decoration: none;
  border-bottom: 1px solid currentColor;
}

.city-list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--line);
}

.city-card {
  display: flex;
  align-items: center;
  min-height: 96px;
  padding: 18px 9px;
  color: var(--ink);
  background: transparent;
  border-bottom: 1px solid var(--line);
  text-decoration: none;
  transition: color 160ms ease, padding 160ms ease, background 160ms ease;
}

.city-card:hover {
  padding-inline: 18px;
  color: var(--washi-light);
  background: var(--indigo);
}

.number {
  width: 52px;
  color: var(--vermilion);
  font-size: 13px;
  font-weight: 900;
  font-family: Georgia, serif;
  letter-spacing: 0.08em;
}

.city-title {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.city-name {
  font-size: 25px;
  font-weight: 900;
  letter-spacing: 0.22em;
}

.city-title small {
  opacity: 0.52;
  font-family: Georgia, serif;
  font-size: 9px;
  letter-spacing: 0.28em;
}

.arrow {
  display: grid;
  place-items: center;
  width: 35px;
  height: 35px;
  color: var(--washi-light);
  background: var(--vermilion);
  font-size: 13px;
  font-weight: 900;
}
</style>
