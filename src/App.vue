<template>
  <n-config-provider :theme="theme">
    <n-message-provider>
      <div :class="appClass">
        <router-view />
      </div>
    </n-message-provider>
  </n-config-provider>
</template>

<script lang="ts" setup>
import { computed, provide, ref } from "vue";
import { darkTheme } from "naive-ui";

const isDarkTheme = ref(false);
const theme = computed(() => (isDarkTheme.value ? darkTheme : null));
const appClass = computed(() => [
  "app-root",
  isDarkTheme.value ? "is-dark" : "is-light",
]);

function toggleTheme() {
  isDarkTheme.value = !isDarkTheme.value;
}

provide("appTheme", {
  isDarkTheme,
  toggleTheme,
});
</script>

<style scoped>
.app-root {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
