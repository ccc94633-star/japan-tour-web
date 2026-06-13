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
  return route.query.type || 'all'
})

const cityInfo = computed(() => cities.find(c => c.city === cityKey.value))

const filteredSpots = computed(() => {
  const citySpots = spots.filter(s => s.city === cityKey.value)
  if (activeType.value === 'all') return citySpots
  return citySpots.filter(s => s.type === activeType.value)
})

const typeLabel = { food: '美食', spot: '景點', culture: '文化' }
</script>

<template>
  <div class="page">
    <RouterLink to="/cities" class="back-link">← 返回城市列表</RouterLink>

    <header class="header">
      <div class="title-row">
        <p class="vertical-label">名所<br>細見</p>
        <h1>{{ cityInfo?.cityName }}</h1>
      </div>
      <p class="subtitle">收錄 {{ filteredSpots.length }} 處風土名勝</p>
    </header>

    <!-- Filter Tabs -->
    <div class="filters">
      <RouterLink v-for="type in ['all', 'food', 'spot', 'culture']" :key="type" class="filter-btn"
        :class="{ active: activeType === type }" active-class="" exact-active-class=""
        :to="{ path: `/cities/${cityKey}`, query: type === 'all' ? {} : { type: type } }">
        {{ type === 'all' ? '全部' : typeLabel[type] }}
      </RouterLink>
    </div>

    <!-- Spot List -->
    <main class="spot-list">
      <RouterLink v-for="spot in filteredSpots" :key="spot.id"
        :to="{ path: `/cities/${cityKey}/spots/${spot.id}`, query: activeType !== 'all' ? { type: activeType } : {} }"
        class="spot-card" :data-type="spot.type">
        <div class="spot-info">
          <span class="spot-name">{{ spot.name }}</span>
          <span class="type-tag">
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
  width: min(100% - 36px, 620px);
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 0 70px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: var(--indigo);
  text-decoration: none;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.12em;
  border-bottom: 1px solid currentColor;
}

.header {
  margin: 35px 0 24px;
  border-bottom: 3px double var(--ink);
}

.header h1 {
  margin: 0;
  color: var(--indigo-deep);
  font-size: clamp(52px, 16vw, 82px);
  font-weight: 900;
  letter-spacing: 0.14em;
  line-height: 1;
}

.title-row {
  display: flex;
  align-items: center;
  gap: 18px;
}

.vertical-label {
  margin: 0;
  padding: 9px 8px;
  color: var(--washi-light);
  background: var(--vermilion);
  font-size: 12px;
  font-weight: 900;
  line-height: 1.2;
  text-align: center;
}

.header .subtitle {
  margin: 15px 0 12px;
  color: rgba(37, 35, 31, 0.65);
  font-size: 13px;
  letter-spacing: 0.2em;
}

.filters {
  display: flex;
  margin-bottom: 28px;
  border: 1px solid var(--ink);
}

.filter-btn {
  flex: 1;
  padding: 10px 4px;
  color: var(--ink);
  background: rgba(248, 239, 217, 0.4);
  border-right: 1px solid var(--ink);
  font-size: 13px;
  font-weight: 800;
  text-align: center;
  text-decoration: none;
  transition: color 150ms ease, background 150ms ease;
}

.filter-btn:last-child { border-right: 0; }
.filter-btn:hover { color: var(--vermilion); }

.filter-btn.active {
  color: var(--washi-light);
  background: var(--indigo);
}

.spot-list {
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.spot-card {
  display: flex;
  align-items: center;
  min-height: 70px;
  padding: 12px 13px 12px 17px;
  color: var(--ink);
  background: rgba(248, 239, 217, 0.54);
  border: 1px solid rgba(37, 35, 31, 0.62);
  text-decoration: none;
  box-shadow: 3px 3px 0 rgba(37, 35, 31, 0.16);
  transition: transform 150ms ease, background 150ms ease;
}

.spot-card:hover {
  transform: translateX(5px);
  background: var(--washi-light);
}

.spot-card[data-type="food"] { border-left: 6px solid var(--vermilion); }
.spot-card[data-type="spot"] { border-left: 6px solid var(--indigo); }
.spot-card[data-type="culture"] { border-left: 6px solid var(--moss); }

.spot-info {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
}

.spot-name {
  font-size: 16px;
  font-weight: 900;
  letter-spacing: 0.08em;
}

.type-tag {
  padding: 3px 6px;
  color: var(--vermilion);
  border: 1px solid currentColor;
  font-size: 10px;
  font-weight: 900;
  white-space: nowrap;
}

.arrow {
  color: var(--vermilion);
  font-size: 25px;
}

.empty {
  text-align: center;
  color: rgba(37, 35, 31, 0.58);
  padding: 40px 0;
  font-size: 15px;
}
</style>
