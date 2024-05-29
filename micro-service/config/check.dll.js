const path = require('path')
const fs = require('fs')
const child_process = require('child_process')

const dllPath = path.resolve(__dirname, '../build/vendor')

if (!fs.existsSync(dllPath)) {
    child_process.execSync('yarn build:dll')
}
