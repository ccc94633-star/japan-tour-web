<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="home">
    <div class="bg-deco">
      <span class="sakura s1">🌸</span>
      <span class="sakura s2">🌸</span>
      <span class="sakura s3">🌸</span>
      <span class="sakura s4">🌸</span>
      <span class="sakura s5">🌸</span>
    </div>

    <div class="content">
      <h1 class="title">日本城市旅遊導覽</h1>
      <p class="subtitle">探索東京・熊本・名古屋</p>

      <RouterLink to="/cities" class="japan-card">
        <div class="map-wrap">
          <span class="map-emoji">🗾</span>
          <div class="pin p1">📍<span>東京</span></div>
          <div class="pin p2">📍<span>名古屋</span></div>
          <div class="pin p3">📍<span>熊本</span></div>
        </div>
        <div class="card-footer">
          <span class="cta">點擊開始探索</span>
          <span class="arrow-right">→</span>
        </div>
      </RouterLink>

      <div class="icons-row">
        <span>⛩️ 神社</span>
        <span>🍜 美食</span>
        <span>🏯 名城</span>
        <span>🎎 文化</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.home {
  min-height: 100vh;
  background: linear-gradient(160deg, #fff5f5 0%, #fff0f8 50%, #f0f4ff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  font-family: 'Microsoft JhengHei', sans-serif;
}

/* 背景飄落裝飾 */
.bg-deco { position: absolute; inset: 0; pointer-events: none; }

.sakura {
  position: absolute;
  font-size: 28px;
  opacity: 0.25;
  animation: fall linear infinite;
}
.s1 { left: 8%;  animation-duration: 9s;  animation-delay: 0s;   top: -40px; }
.s2 { left: 25%; animation-duration: 12s; animation-delay: 2s;   top: -40px; }
.s3 { left: 55%; animation-duration: 10s; animation-delay: 4s;   top: -40px; }
.s4 { left: 75%; animation-duration: 8s;  animation-delay: 1s;   top: -40px; }
.s5 { left: 90%; animation-duration: 11s; animation-delay: 3s;   top: -40px; }

@keyframes fall {
  0%   { transform: translateY(0)   rotate(0deg);   opacity: 0.25; }
  100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
}

/* 主內容 */
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  padding: 32px 16px;
  z-index: 1;
}

.title {
  font-size: 32px;
  font-weight: 800;
  color: #c0392b;
  text-align: center;
  letter-spacing: 2px;
}

.subtitle {
  font-size: 15px;
  color: #888;
  text-align: center;
  margin-top: -20px;
}

/* 可點擊的日本地圖卡片 */
.japan-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border: 3px solid #e8c0c0;
  border-radius: 24px;
  padding: 32px 40px 24px;
  text-decoration: none;
  box-shadow: 0 8px 32px rgba(192, 57, 43, 0.12);
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
  cursor: pointer;
  width: 300px;
}

.japan-card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 16px 48px rgba(192, 57, 43, 0.22);
  border-color: #c0392b;
}

/* 地圖區域 */
.map-wrap {
  position: relative;
  width: 160px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-emoji {
  font-size: 120px;
  line-height: 1;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
}

/* 城市 Pin */
.pin {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 11px;
  font-weight: 700;
  color: #c0392b;
  white-space: nowrap;
  background: rgba(255,255,255,0.85);
  border-radius: 999px;
  padding: 2px 7px 2px 2px;
  box-shadow: 0 1px 6px rgba(0,0,0,0.12);
}

.p1 { top: 10px;  right: -10px; }
.p2 { bottom: 46px; right: -18px; }
.p3 { bottom: 14px; left: -8px; }

/* 底部 CTA */
.card-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  border-top: 1px solid #f0e0e0;
  padding-top: 18px;
  width: 100%;
  justify-content: center;
}

.cta {
  font-size: 16px;
  font-weight: 700;
  color: #c0392b;
  letter-spacing: 1px;
}

.arrow-right {
  font-size: 18px;
  color: #c0392b;
  transition: transform 0.2s;
}

.japan-card:hover .arrow-right {
  transform: translateX(4px);
}

/* 底部圖示列 */
.icons-row {
  display: flex;
  gap: 20px;
  font-size: 13px;
  color: #999;
}

.icons-row span {
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>
