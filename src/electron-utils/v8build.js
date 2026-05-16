const fs = require('fs')
const path = require('path')
const process = require('process')
const v8 = require('v8')
const bytenode = require('bytenode')
v8.setFlagsFromString('--no-lazy');
const codePath = process.argv[2]

console.log('electron 环境版本:', process.versions.electron || '未知');
console.log('构建目录:', codePath);

// buildDir(codePath)
buildFile(codePath)

console.log('[Build]', 'Bytecode build success.', '\n');
process.exit()

function buildFile(source) {
    const fileNameInfo = path.parse(source)
    if (fileNameInfo.ext == '.jsc') {
        console.warn('[Build]', `${source} it has been compiled.`);
        return
    }
    bytenode.compileFile(source, `${fileNameInfo.dir}/${fileNameInfo.name}.jsc`);
    bytenode.addLoaderFile(`${fileNameInfo.dir}/${fileNameInfo.name}.jsc`, `${fileNameInfo.base}`)

    console.log('[Build] success', source);
}