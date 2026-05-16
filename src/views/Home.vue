<template>
  <main class="home-page">
    <section class="home-shell">
      <Header />
      <div class="home-body no-drag">
        模板
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import Header from "@/components/header/header.vue";
</script>

<style scoped>
.home-page {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  color: #0f172a;
  background: linear-gradient(180deg, #f8fafc 0%, #edf2f7 100%);
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.home-shell {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background:
    linear-gradient(90deg, rgba(15, 118, 110, 0.08) 0 1px, transparent 1px),
    linear-gradient(180deg, rgba(37, 99, 235, 0.06) 0 1px, transparent 1px),
    #f8fafc;
  background-size: 34px 34px;
}

.home-body {
  flex: 1;
  min-height: 0;
  padding: 18px;
  overflow: hidden;
}

:global(.app-root.is-dark) .home-page {
  color: #e5e7eb;
  background: #0f172a;
}

:global(.app-root.is-dark) .home-shell {
  background:
    linear-gradient(90deg, rgba(20, 184, 166, 0.08) 0 1px, transparent 1px),
    linear-gradient(180deg, rgba(96, 165, 250, 0.08) 0 1px, transparent 1px),
    #0f172a;
}

.hero-panel {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
  gap: 14px;
  align-items: stretch;
  height: calc(100% - 126px);
  min-height: 0;
}

.hero-copy,
.hero-metrics,
.feature-card {
  border: 1px solid rgba(148, 163, 184, 0.22);
  background: rgba(255, 255, 255, 0.82);
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
}

.hero-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 0;
  padding: 24px;
  border-radius: 8px;
}

.hero-copy h2 {
  margin: 0 0 10px;
  font-size: 34px;
  line-height: 1.12;
  color: #0f172a;
}

.hero-copy p {
  max-width: 560px;
  margin: 0 0 18px;
  font-size: 14px;
  line-height: 1.7;
  color: #475569;
}

.hero-metrics {
  display: grid;
  gap: 10px;
  min-height: 0;
  padding: 12px;
  border-radius: 8px;
}

.metric-card {
  min-height: 0;
  padding: 14px;
  border-radius: 6px;
  background: #f8fafc;
}

.metric-label,
.metric-note,
.feature-index {
  color: #64748b;
}

.metric-label {
  display: block;
  margin-bottom: 6px;
  font-size: 13px;
}

.metric-value {
  display: block;
  margin-bottom: 4px;
  font-size: 24px;
  color: #0f172a;
}

.metric-note {
  margin: 0;
  font-size: 13px;
  line-height: 1.55;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  height: 112px;
  margin-top: 14px;
}

.feature-card {
  min-width: 0;
  padding: 16px;
  border-radius: 8px;
}

.feature-card h3 {
  margin: 8px 0 6px;
  font-size: 16px;
  color: #0f172a;
}

.feature-card p {
  margin: 0;
  font-size: 13px;
  line-height: 1.45;
  color: #475569;
}

.feature-index {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
}

@media (max-width: 980px) {
  .hero-panel {
    grid-template-columns: 1fr;
    height: calc(100% - 238px);
  }

  .feature-grid {
    grid-template-columns: 1fr;
    height: 224px;
  }
}

@media (max-width: 640px) {
  .home-body {
    padding: 12px;
  }

  .hero-panel {
    gap: 10px;
    height: calc(100% - 214px);
  }

  .hero-copy {
    padding: 18px;
  }

  .hero-copy h2 {
    font-size: 26px;
  }

  .feature-grid {
    gap: 10px;
    height: 204px;
    margin-top: 10px;
  }

  .feature-card {
    padding: 12px;
  }
}
</style>
