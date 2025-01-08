const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  devServer: {
    port: 9999,
  },
  configureWebpack: {
    // 使用 define 插件注入特性标志
    plugins: [
      new (require("webpack").DefinePlugin)({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
      }),
    ],
  },
});
