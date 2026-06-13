<script setup>
import { RouterLink } from 'vue-router'
import { cities } from '../data'
</script>

<template>
  <div class="page">
    <header class="header">
      <h1>🗾 日本城市旅遊導覽</h1>
      <p>選擇一個城市開始探索</p>
    </header>

    <main class="city-list">
      <RouterLink
        v-for="city in cities"
        :key="city.city"
        :to="`/cities/${city.city}`"
        class="city-card"
      >
        <div class="city-icon">📍</div>
        <span class="city-name">{{ city.cityName }}</span>
        <span class="arrow">›</span>
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
  max-width: 480px;
  margin: 0 auto;
  padding: 32px 16px;
}

.header {
  text-align: center;
  margin-bottom: 36px;
}

.header h1 {
  font-size: 28px;
  font-weight: 700;
  color: #1a73e8;
  margin-bottom: 8px;
}

.header p {
  color: #888;
  font-size: 15px;
}

.city-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.city-card {
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 14px;
  padding: 20px 22px;
  text-decoration: none;
  color: #333;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.15s, box-shadow 0.15s;
  cursor: pointer;
}

.city-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}

.city-icon {
  width: 40px;
  height: 40px;
  background: #e8f0fe;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-right: 16px;
  flex-shrink: 0;
}

.city-name {
  flex: 1;
  font-size: 18px;
  font-weight: 600;
}

.arrow {
  font-size: 22px;
  color: #bbb;
}

.route-hint {
  margin-top: 32px;
  text-align: center;
  font-size: 12px;
  color: #aaa;
  letter-spacing: 0.5px;
}
</style>
