const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");
const initIpcMain = require("./electron-utils/ipcMain.js");

let mainWindow; // 用来保存主窗口对象的引用

// 当 Electron 完成初始化并准备创建浏览器窗口时被调用
app.on("ready", () => {
  // 创建主窗口
  mainWindow = new BrowserWindow({
    width: 1000,
    minWidth: 1000,
    height: 800,
    minHeight: 800,
    frame: false,
    resizable: true,
    transparent: true,
    backgroundColor: "#00000000",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });

  // 加载页面文件
  if (app.isPackaged) {
    // 如果是打包好的就加载打包的 HTML 文件
    mainWindow.loadFile("dist/index.html");
    mainWindow.removeMenu();
  } else {
    // 如果没有打包就直接从本地服务器加载
    mainWindow.loadURL("http://localhost:9999/");
    mainWindow.webContents.openDevTools();
  }

  // 关闭事件
  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  initIpcMain(app, mainWindow);
});

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
      app.quit()
  }
})

ipcMain.on("min", () => mainWindow.minimize());
ipcMain.on("max", () => {
  if (mainWindow.isMaximized()) {
    mainWindow.restore();
  } else {
    mainWindow.maximize();
  }
});
// 关闭
ipcMain.on("close", () => {
  mainWindow.close();
  app.quit();
});
