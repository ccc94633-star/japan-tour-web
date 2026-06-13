<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { spots } from '../data'

const route = useRoute()

const spot = computed(() => spots.find(s => s.id === Number(route.params.id)))

const typeLabel = { food: '美食', spot: '景點', culture: '文化' }
const tagColor = { food: '#ff7043', spot: '#2196f3', culture: '#9c27b0' }
</script>

<template>
  <div class="page">
      <RouterLink
      :to="{ path: `/cities/${route.params.city}`, query: route.query.type ? { type: route.query.type } : {} }"
      class="back-link">← 返回上一頁</RouterLink>

    <!-- 當 spot 資料存在（不是 null/undefined）時，裡面的內容才會顯示。防止資料還沒載入時就渲染造成錯誤。 -->
    <template v-if="spot">
      <div class="detail-card">
        <div class="card-header">
          <h1 class="spot-name">{{ spot.name }}</h1>
          <span class="type-tag" :style="{ background: tagColor[spot.type] }">
            {{ typeLabel[spot.type] }}
          </span>
        </div>

        <div class="meta">
          <span class="meta-icon">📍</span>
          <span>{{ spot.cityName }}</span>
        </div>

        <div class="divider"></div>

        <p class="section-title">介紹</p>
        <p class="description">{{ spot.description }}</p>
      </div>
    </template>

    <p v-else class="not-found">找不到此景點</p>


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
  padding: 28px 16px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #1a73e8;
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 20px;
}

.back-link:hover {
  text-decoration: underline;
}

.detail-card {
  background: #fff;
  border-radius: 18px;
  padding: 30px 26px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.spot-name {
  font-size: 26px;
  font-weight: 700;
  color: #222;
}

.type-tag {
  padding: 4px 14px;
  border-radius: 999px;
  color: #fff;
  font-size: 13px;
}

.meta {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 20px;
  font-size: 14px;
  color: #777;
}

.meta-icon {
  font-size: 16px;
}

.divider {
  height: 1px;
  background: #f0f0f0;
  margin-bottom: 20px;
}

.section-title {
  font-size: 13px;
  font-weight: 600;
  color: #aaa;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.description {
  font-size: 15px;
  line-height: 1.8;
  color: #444;
}

.not-found {
  text-align: center;
  color: #aaa;
  padding: 60px 0;
  font-size: 15px;
}

.route-hint {
  margin-top: 32px;
  text-align: center;
  font-size: 12px;
  color: #aaa;
  letter-spacing: 0.5px;
}
</style>
