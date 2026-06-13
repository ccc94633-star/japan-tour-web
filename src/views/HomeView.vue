<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="home">
    <div class="sun" aria-hidden="true"></div>
    <div class="cloud cloud-one" aria-hidden="true"></div>
    <div class="cloud cloud-two" aria-hidden="true"></div>
    <div class="wave-field" aria-hidden="true">
      <span v-for="n in 7" :key="n"></span>
    </div>

    <div class="content">
      <div class="title-block">
        <p class="eyebrow">東海道・旅之案内</p>
        <h1 class="title"><span>日本</span>城市旅遊導覽</h1>
        <p class="subtitle">東京・熊本・名古屋</p>
      </div>

      <RouterLink to="/cities" class="japan-card">
        <div class="print-frame">
          <div class="mountain" aria-hidden="true">
            <span class="snow"></span>
          </div>
          <div class="pine pine-one" aria-hidden="true"></div>
          <div class="pine pine-two" aria-hidden="true"></div>
          <div class="route-stamps">
            <span>東<br>京</span>
            <span>名<br>古<br>屋</span>
            <span>熊<br>本</span>
          </div>
        </div>
        <div class="card-footer">
          <span class="seal">旅</span>
          <span class="cta">翻開旅帖，開始探索</span>
          <span class="arrow-right">›</span>
        </div>
      </RouterLink>

      <div class="icons-row">
        <span>神社</span><i></i>
        <span>美食</span><i></i>
        <span>名城</span><i></i>
        <span>文化</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 52px 20px 72px;
  isolation: isolate;
}

.home::before {
  content: "";
  position: absolute;
  inset: 18px;
  border: 1px solid rgba(37, 35, 31, 0.45);
  outline: 5px double rgba(37, 35, 31, 0.18);
  outline-offset: -10px;
  z-index: -1;
}

.sun {
  position: absolute;
  top: 9%;
  right: 10%;
  width: clamp(110px, 20vw, 190px);
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--vermilion);
  opacity: 0.9;
  z-index: -2;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: min(100%, 430px);
  z-index: 1;
}

.title-block {
  text-align: center;
}

.eyebrow {
  margin: 0 0 8px;
  color: var(--vermilion);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.45em;
}

.title {
  margin: 0;
  color: var(--ink);
  font-size: clamp(30px, 8vw, 44px);
  font-weight: 900;
  letter-spacing: 0.08em;
  line-height: 1.25;
  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.3);
}

.title span {
  color: var(--indigo);
  font-size: 1.2em;
}

.subtitle {
  margin: 9px 0 0;
  color: rgba(37, 35, 31, 0.72);
  font-size: 14px;
  letter-spacing: 0.38em;
}

.japan-card {
  width: min(100%, 360px);
  display: flex;
  flex-direction: column;
  background: var(--washi-light);
  border: 2px solid var(--ink);
  padding: 8px;
  text-decoration: none;
  box-shadow: 8px 9px 0 rgba(23, 70, 107, 0.9);
  transition: transform 180ms ease, box-shadow 180ms ease;
}

.japan-card:hover {
  transform: translate(-3px, -3px);
  box-shadow: 12px 13px 0 rgba(23, 70, 107, 0.9);
}

.print-frame {
  position: relative;
  height: 228px;
  overflow: hidden;
  border: 1px solid rgba(37, 35, 31, 0.75);
  background:
    repeating-radial-gradient(ellipse at 50% 115%, transparent 0 17px, rgba(248, 239, 217, 0.9) 18px 21px, transparent 22px 30px),
    var(--indigo);
}

.mountain {
  position: absolute;
  left: 50%;
  bottom: 31px;
  width: 205px;
  height: 135px;
  transform: translateX(-50%);
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  background: #d5c7a7;
}

.snow {
  position: absolute;
  inset: 0;
  background: var(--washi-light);
  clip-path: polygon(50% 0, 70% 40%, 60% 35%, 51% 49%, 42% 34%, 31% 41%);
}

.pine {
  position: absolute;
  bottom: 12px;
  width: 72px;
  height: 102px;
  border-left: 8px solid var(--ink);
}

.pine::before,
.pine::after {
  content: "";
  position: absolute;
  width: 70px;
  height: 34px;
  border-radius: 50%;
  background: var(--moss);
  border: 2px solid var(--ink);
}

.pine::before { top: 2px; left: -28px; transform: rotate(-16deg); }
.pine::after { top: 30px; left: -7px; transform: rotate(15deg); }
.pine-one { left: 18px; transform: scale(0.85); }
.pine-two { right: -12px; transform: scale(1.15); }

.route-stamps {
  position: absolute;
  inset: 15px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.route-stamps span {
  display: grid;
  place-items: center;
  width: 34px;
  min-height: 52px;
  padding: 5px 0;
  color: var(--washi-light);
  background: var(--vermilion);
  border: 2px solid var(--washi-light);
  outline: 1px solid var(--vermilion);
  font-size: 12px;
  font-weight: 800;
  line-height: 1.05;
}

.route-stamps span:nth-child(2) { margin-top: 72px; }
.route-stamps span:nth-child(3) { margin-top: 18px; }

.card-footer {
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 16px 12px 9px;
  color: var(--ink);
}

.seal {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  color: var(--washi-light);
  background: var(--vermilion);
  font-size: 17px;
  font-weight: 800;
}

.cta {
  flex: 1;
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.arrow-right {
  color: var(--vermilion);
  font-size: 27px;
  transition: transform 0.2s;
}

.japan-card:hover .arrow-right {
  transform: translateX(4px);
}

.icons-row {
  display: flex;
  align-items: center;
  gap: 9px;
  color: rgba(37, 35, 31, 0.7);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
}

.icons-row i {
  width: 3px;
  height: 3px;
  background: var(--vermilion);
  transform: rotate(45deg);
}

.wave-field {
  position: absolute;
  right: -30px;
  bottom: -58px;
  left: -30px;
  display: flex;
  justify-content: center;
  gap: 4px;
  z-index: -2;
  opacity: 0.72;
}

.wave-field span {
  width: 16%;
  aspect-ratio: 1;
  border: 10px double var(--indigo);
  border-right-color: transparent;
  border-radius: 50%;
  transform: rotate(35deg);
}

.cloud {
  position: absolute;
  width: 150px;
  height: 18px;
  border-top: 3px solid var(--indigo);
  border-bottom: 1px solid var(--indigo);
  opacity: 0.45;
  z-index: -1;
}

.cloud-one { top: 16%; left: -35px; }
.cloud-two { top: 30%; right: -65px; width: 200px; }

@media (max-width: 420px) {
  .home { padding-inline: 30px; }
  .home::before { inset: 11px; }
  .print-frame { height: 210px; }
}
</style>
