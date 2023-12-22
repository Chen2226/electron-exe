<template>
  <n-config-provider :theme="theme">
    <n-message-provider>
      <n-card size="small" style="--n-padding-top: 0px;--n-padding-bottom: 0px;--n-padding-left: 0px">
        <div class="header drag">
          <Header />
        </div>
        <div class="content no-drag">
          <router-view />
        </div>
      </n-card>
    </n-message-provider>
  </n-config-provider>
</template>

<script lang="ts" setup>
// TODO 暂不适应系统主题
// import { computed } from 'vue'
// import { useOsTheme, darkTheme } from 'naive-ui'
import Header from "@/components/header/header.vue"

// const osTheme = useOsTheme();
// const theme = computed(() => (osTheme.value === 'dark' ? darkTheme : null));
const theme = null;
</script>



<style scoped>
html,
body .n-card {
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.header {
  min-height: 5vh;
  width: 100%;
  background: #f5f5f5;
}

.content {
  padding: 5px;
}
</style>
