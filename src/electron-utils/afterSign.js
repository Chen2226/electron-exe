const fs = require("fs");
const path = require("path");
const asar = require("@electron/asar");
const { execSync } = require('child_process');

//获取指定文件夹下排除指定类型的文件
function getFiles(dirpath, exclude) {
  function getFiles_(dir, arr) {
    const stat = fs.statSync(dir);
    if (stat.isDirectory()) {
      const dirs = fs.readdirSync(dir);
      dirs.forEach((value) => {
        let extname = path.extname(value);
        if (!exclude.includes(value) && !exclude.includes(extname))
          getFiles_(path.join(dir, value), arr);
      });
    } else if (stat.isFile()) {
      //文件
      arr.push(dir);
    }
  }
  let arrs = [];
  getFiles_(dirpath, arrs);
  return arrs;
}

exports.default = async ({ appOutDir, packager }) => {
  try {
    const asarPath = path.join(packager.getResourcesDir(appOutDir), "app.asar");
    let appPath = path.join(packager.getResourcesDir(appOutDir), "app");
    if (fs.existsSync(asarPath)) {
      asar.extractAll(asarPath, appPath);
    }

    let hl = [
      "node_modules",
      "dist",
      ".css",
      ".html",
      ".md",
      ".json",
      ".xml",
      "chrome-win64"
    ];
    let fileArrs = getFiles(appPath, hl);

    for (let i = 0; i < fileArrs.length; i++) {
      let shell = `electron ${appPath}/src/electron-utils/v8build.js ${fileArrs[i]}`;
      console.log(shell)
      let msg = execSync(shell);
      console.log(msg.toString())
    }

    console.log("asar content replacement completed.");
    if (fs.existsSync(asarPath)) {
      fs.unlinkSync(asarPath);
      console.log("delete the original asar.");
    }
    await asar.createPackage(appPath, asarPath);
    fs.rmSync(appPath, { recursive: true });
    console.log("create new asar.");
  } catch (err) {
    console.error(err);
  }
};