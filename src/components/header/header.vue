<template>
  <header class="header-shell drag">
    <div class="header-info">
      <div class="brand-mark">C</div>
      <div class="brand-copy">
        <h1 class="brand-title">模板</h1>
      </div>
    </div>
    <div class="icon-list no-drag">
      <n-icon
        class="icon-mar"
        :color="iconColor[0]"
        size="24"
        @click="min"
        :component="Minus"
        @mouseenter="iconMouseenter(0)"
        @mouseleave="iconMouseleave(0)"
      />
      <n-icon
        class="icon-mar"
        :color="iconColor[1]"
        v-if="windowState == 'normal'"
        size="21"
        :component="FullScreenMaximize20Regular"
        @click="max('max')"
        @mouseenter="iconMouseenter(1)"
        @mouseleave="iconMouseleave(1)"
      />
      <n-icon
        class="icon-mar"
        :color="iconColor[2]"
        v-if="windowState == 'max'"
        size="21"
        :component="FullScreenMinimize24Filled"
        @click="max('normal')"
        @mouseenter="iconMouseenter(2)"
        @mouseleave="iconMouseleave(2)"
      />
      <n-icon
        class="icon-mar"
        :color="iconColor[3]"
        size="24"
        :component="Close"
        @click="close"
        @mouseenter="iconMouseenter(3)"
        @mouseleave="iconMouseleave(3)"
      />
    </div>
  </header>
</template>

<script lang="ts" setup>
import {  ref } from "vue";
import { Close, Moon, Sun } from "@vicons/carbon";
import {
  FullScreenMaximize20Regular,
  FullScreenMinimize24Filled,
} from "@vicons/fluent";
import { Minus } from "@vicons/tabler";

let windowState = ref("normal");
let iconColor = ref(["#7B7B7B", "#7B7B7B", "#7B7B7B", "#7B7B7B"]);

function close() {
  window.electronApi.ipcRenderer.send("close");
}
function min() {
  window.electronApi.ipcRenderer.send("min");
}
function max(type: string) {
  windowState.value = type;
  window.electronApi.ipcRenderer.send("max", type);
}
function iconMouseenter(i: number) {
  iconColor.value[i] = "#00CC65";
}
function iconMouseleave(i: number) {
  iconColor.value[i] = "#7B7B7B";
}
function toggleTheme() {
  appTheme?.toggleTheme();
}
</script>

<style lang="scss" scoped>
.header-shell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 58px;
  min-height: 58px;
  padding: 0 18px;
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
  background: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(14px);
}

.header-info {
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background: linear-gradient(135deg, #0f766e, #2563eb);
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  box-shadow: 0 10px 24px rgba(37, 99, 235, 0.18);
}

.brand-copy {
  min-width: 0;
}

.brand-title,
.brand-subtitle {
  margin: 0;
}

.brand-title {
  font-size: 16px;
  font-weight: 700;
  color: #0f172a;
}

.brand-subtitle {
  margin-top: 2px;
  font-size: 12px;
  color: #64748b;
}

.icon-list {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;

  .theme-toggle {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    margin: 0 6px 0 0;
    padding: 0;
    border: 1px solid rgba(148, 163, 184, 0.3);
    border-radius: 7px;
    background: rgba(255, 255, 255, 0.64);
    transition:
      background-color 0.2s ease,
      border-color 0.2s ease,
      transform 0.2s ease;
  }

  .theme-toggle:hover {
    cursor: pointer;
    border-color: rgba(37, 99, 235, 0.35);
    background: rgba(37, 99, 235, 0.08);
    transform: translateY(-1px);
  }

  .icon-mar {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    margin: 0 0 0 4px;
    border-radius: 7px;
    transition:
      background-color 0.2s ease,
      transform 0.2s ease;
  }

  .icon-mar:hover {
    cursor: pointer;
    background: rgba(15, 23, 42, 0.06);
    transform: translateY(-1px);
  }
}

:global(.app-root.is-dark) .header-shell {
  border-bottom-color: rgba(148, 163, 184, 0.16);
  background: rgba(15, 23, 42, 0.9);
}

:global(.app-root.is-dark) .brand-title {
  color: #e5e7eb;
}

:global(.app-root.is-dark) .brand-mark {
  background: linear-gradient(135deg, #14b8a6, #60a5fa);
  box-shadow: 0 10px 24px rgba(20, 184, 166, 0.16);
}

:global(.app-root.is-dark) .theme-toggle {
  border-color: rgba(148, 163, 184, 0.2);
  background: rgba(30, 41, 59, 0.78);
}

:global(.app-root.is-dark) .theme-toggle:hover,
:global(.app-root.is-dark) .icon-mar:hover {
  background: rgba(148, 163, 184, 0.12);
}

@media (max-width: 640px) {
  .header-shell {
    height: 54px;
    min-height: 54px;
    padding: 0 14px;
  }

  .brand-mark {
    width: 32px;
    height: 32px;
  }

  .brand-title {
    font-size: 15px;
  }

  .brand-subtitle {
    display: none;
  }
}
</style>
