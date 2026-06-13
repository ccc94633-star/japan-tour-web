<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { spots } from '../data'

const route = useRoute()

const spot = computed(() => spots.find(s => s.id === Number(route.params.id)))

const typeLabel = { food: '美食', spot: '景點', culture: '文化' }
</script>

<template>
  <div class="page">
      <RouterLink
      :to="{ path: `/cities/${route.params.city}`, query: route.query.type ? { type: route.query.type } : {} }"
      class="back-link">← 返回上一頁</RouterLink>

    <!-- 當 spot 資料存在（不是 null/undefined）時，裡面的內容才會顯示。防止資料還沒載入時就渲染造成錯誤。 -->
    <template v-if="spot">
      <div class="detail-card">
        <div class="corner-mark">旅<br>帖</div>
        <div class="card-header">
          <h1 class="spot-name">{{ spot.name }}</h1>
          <span class="type-tag" :data-type="spot.type">
            {{ typeLabel[spot.type] }}
          </span>
        </div>

        <div class="meta">
          <span class="meta-icon">所在地</span>
          <span>{{ spot.cityName }}之卷</span>
        </div>

        <div class="divider"></div>

        <p class="section-title">名所由來</p>
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
  width: min(100% - 36px, 650px);
  min-height: 100vh;
  margin: 0 auto;
  padding: 40px 0 75px;
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

.detail-card {
  position: relative;
  margin-top: 32px;
  padding: clamp(32px, 8vw, 52px);
  background: rgba(248, 239, 217, 0.62);
  border: 1px solid var(--ink);
  outline: 5px double rgba(37, 35, 31, 0.4);
  outline-offset: -12px;
  box-shadow: 10px 11px 0 var(--indigo);
}

.corner-mark {
  position: absolute;
  top: -13px;
  right: 25px;
  width: 41px;
  padding: 8px 0;
  color: var(--washi-light);
  background: var(--vermilion);
  border: 2px solid var(--washi-light);
  outline: 1px solid var(--vermilion);
  font-size: 12px;
  font-weight: 900;
  line-height: 1.2;
  text-align: center;
}

.card-header {
  display: flex;
  align-items: center;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 18px;
  flex-wrap: wrap;
}

.spot-name {
  flex: 1;
  margin: 0;
  color: var(--indigo-deep);
  font-size: clamp(30px, 8vw, 44px);
  font-weight: 900;
  letter-spacing: 0.08em;
  line-height: 1.25;
}

.type-tag {
  margin-top: 7px;
  padding: 5px 7px;
  color: var(--vermilion);
  border: 2px solid currentColor;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.1em;
}

.type-tag[data-type="spot"] { color: var(--indigo); }
.type-tag[data-type="culture"] { color: var(--moss); }

.meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  font-size: 14px;
  color: rgba(37, 35, 31, 0.68);
  letter-spacing: 0.1em;
}

.meta-icon {
  padding: 3px 6px;
  color: var(--washi-light);
  background: var(--ink);
  font-size: 10px;
  font-weight: 900;
}

.divider {
  height: 5px;
  margin-bottom: 24px;
  border-top: 1px solid var(--ink);
  border-bottom: 1px solid var(--ink);
}

.section-title {
  margin: 0 0 12px;
  color: var(--vermilion);
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.35em;
}

.description {
  margin: 0;
  color: var(--ink);
  font-size: 16px;
  line-height: 2;
  letter-spacing: 0.05em;
  text-align: justify;
}

.not-found {
  text-align: center;
  color: rgba(37, 35, 31, 0.58);
  padding: 60px 0;
  font-size: 15px;
}

@media (max-width: 420px) {
  .detail-card { box-shadow: 6px 7px 0 var(--indigo); }
  .description { font-size: 15px; }
}
</style>
