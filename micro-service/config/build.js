const child_process = require('child_process')

const serviceNames = process.argv.slice(2)

serviceNames.forEach(function (service) {
    child_process.execSync(`yarn build:${service}`)
})
