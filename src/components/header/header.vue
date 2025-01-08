<template>
  <n-grid x-gap="12" :cols="2">
    <n-grid-item :offset="1">
      <div class="light-green" />
    </n-grid-item>
    <n-grid-item :offset="1">
      <div class="icon-list">
        <n-icon
          class="no-drag icon-mar"
          :color="iconColor[0]"
          style=""
          size="30"
          @click="min"
          :component="Minus"
          @mouseenter="iconMouseenter(0)"
          @mouseleave="iconMouseleave(0)"
        />
        <n-icon
          class="no-drag icon-mar"
          :color="iconColor[1]"
          style=""
          v-if="windowState == 'normal'"
          size="25"
          :component="FullScreenMaximize20Regular"
          @click="max('max')"
          @mouseenter="iconMouseenter(1)"
          @mouseleave="iconMouseleave(1)"
        />
        <n-icon
          class="no-drag icon-mar"
          :color="iconColor[2]"
          style=""
          v-if="windowState == 'max'"
          size="25"
          :component="FullScreenMinimize24Filled"
          @click="max('normal')"
          @mouseenter="iconMouseenter(2)"
          @mouseleave="iconMouseleave(2)"
        />
        <n-icon
          class="no-drag icon-mar"
          :color="iconColor[3]"
          style=""
          size="30"
          :component="Close"
          @click="close"
          @mouseenter="iconMouseenter(3)"
          @mouseleave="iconMouseleave(3)"
        />
      </div>
    </n-grid-item>
  </n-grid>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Close } from "@vicons/carbon";
import {
  FullScreenMaximize20Regular,
  FullScreenMinimize24Filled,
} from "@vicons/fluent";
import { Minus } from "@vicons/tabler";

console.log(window.electronApi.ipcRenderer);

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
</script>

<style lang="scss" scope>
.header {
  width: 100%;
}

.icon-list {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .icon-mar {
    margin: 0 5px 0 5px;
  }

  .icon-mar:hover {
    cursor: pointer;
  }
}
</style>