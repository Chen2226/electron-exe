const { ipcMain } = require("electron");

const init = (app, win) => {
  // 右上角操作
  ipcMain.on("close", () => {
    win.close();
    app.quit();
  });
  ipcMain.on("min", () => win.minimize());
  ipcMain.on("max", (e, arg) => {
    if (arg === "max") {
      if (!win.isMaximized()) {
        win.maximize();
      }
    } else {
      if (win.isMaximized()) {
        win.unmaximize();
      }
    }
  })
};

module.exports = init;
