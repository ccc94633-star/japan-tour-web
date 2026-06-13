<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { cities, spots } from '../data'

const route = useRoute()

const cityKey = computed(() => route.params.city)


// const activeType = computed(() => {

//   //console.log(`現在按了哪個分類: ${route.query.type || 'all'}`);
//   return route.query.type || 'all'
// })


const activeType = computed(() => {
  console.log(`按到什麼類別:${route.query.type}`);
  return route.query.type || 'all';
})

const cityInfo = computed(() => cities.find(c => c.city === cityKey.value))

const filteredSpots = computed(() => {
  const citySpots = spots.filter(s => s.city === cityKey.value)
  if (activeType.value === 'all') return citySpots
  return citySpots.filter(s => s.type === activeType.value)
})

const typeLabel = { food: '美食', spot: '景點', culture: '文化' }
const tagColor = { food: '#ff7043', spot: '#2196f3', culture: '#9c27b0' }
</script>

<template>
  <div class="page">
    <RouterLink to="/cities" class="back-link">← 返回城市列表</RouterLink>

    <header class="header">
      <h1>{{ cityInfo?.cityName }}</h1>
      <p class="subtitle">共 {{ filteredSpots.length }} 個景點</p>
    </header>

    <!-- Filter Tabs -->
    <div class="filters">
      <RouterLink v-for="type in ['all', 'food', 'spot', 'culture']" :key="f" class="filter-btn"
        :class="{ active: activeType === type }" active-class="" exact-active-class=""
        :to="{ path: `/cities/${cityKey}`, query: type === 'all' ? {} : { type: type } }">
        {{ type === 'all' ? '全部' : typeLabel[type] }}
      </RouterLink>
    </div>

    <!-- Spot List -->
    <main class="spot-list">
      <RouterLink v-for="spot in filteredSpots" :key="spot.id"
        :to="{ path: `/cities/${cityKey}/spots/${spot.id}`, query: activeType !== 'all' ? { type: activeType } : {} }" ;
        class="spot-card" :data-type="spot.type">
        <div class="spot-info">
          <span class="spot-name">{{ spot.name }}</span>
          <span class="type-tag" :style="{ background: tagColor[spot.type] }">
            {{ typeLabel[spot.type] }}
          </span>
        </div>
        <span class="arrow">›</span>
      </RouterLink>

      <p v-if="filteredSpots.length === 0" class="empty">此分類目前沒有景點</p>
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
  padding: 28px 16px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #1a73e8;
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 14px;
}

.back-link:hover {
  text-decoration: underline;
}

.header h1 {
  font-size: 26px;
  font-weight: 700;
  color: #222;
  margin-bottom: 4px;
}

.header .subtitle {
  font-size: 14px;
  color: #999;
  margin-bottom: 24px;
}

.filters {
  display: flex;
  gap: 10px;
  margin-bottom: 22px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 8px 20px;
  border: 2px solid #ddd;
  border-radius: 999px;
  background: #fff;
  color: #666;
  font-size: 14px;
  cursor: pointer;
  font-family: inherit;
  text-decoration: none;
  transition: all 0.15s;
}

.filter-btn:hover {
  border-color: #1a73e8;
  color: #1a73e8;
}

.filter-btn.active {
  border-color: #1a73e8;
  background: #1a73e8;
  color: #fff;
}

.spot-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.spot-card {
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 14px;
  padding: 16px 20px;
  text-decoration: none;
  color: #333;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.15s;
  cursor: pointer;
}

.spot-card:hover {
  transform: translateY(-2px);
}

.spot-card[data-type="food"] {
  border-left: 4px solid #ff7043;
}

.spot-card[data-type="spot"] {
  border-left: 4px solid #2196f3;
}

.spot-card[data-type="culture"] {
  border-left: 4px solid #9c27b0;
}

.spot-info {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
}

.spot-name {
  font-size: 16px;
  font-weight: 500;
}

.type-tag {
  padding: 3px 10px;
  border-radius: 999px;
  color: #fff;
  font-size: 12px;
  white-space: nowrap;
}

.arrow {
  font-size: 22px;
  color: #bbb;
}

.empty {
  text-align: center;
  color: #aaa;
  padding: 40px 0;
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
