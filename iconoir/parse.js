const path = require('path')
const fs = require('fs')

const source = fs.readFileSync(path.resolve(__dirname, 'iconoir.css')).toString()

const classNames = source.match(/iconoir-[A-Za-z0-9](.+?)::/g).map(item => item.replace('::', ''))

fs.writeFileSync(path.resolve(__dirname, 'classname.js'),`const classNames = ${JSON.stringify(classNames)}`)