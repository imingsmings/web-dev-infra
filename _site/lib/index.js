const express = require('express')
const path = require('path');
const fs = require('fs')
const { getLocalAddress } = require('../config/utils');

const address = getLocalAddress()

class Application {
    static create(appName, port) {
        const app = express()
        registerApplicetion(app, appName, port)
    }
}

function registerApplicetion(app, appName, port) {

    app.use(express.static(path.resolve(__dirname, `../sites/${appName}`)))

    if (appName === 'app') {
        injectTpl()
    }

    app.get('/', (req, res, next) => {
        const filePath = getFilePath(appName, 'index')
        res.sendFile(filePath)
    });

    app.get('/index-cn', (req, res) => {
        const filePath = getFilePath(appName, 'index-cn')
        res.sendFile(filePath)
    });

    app.listen(port, () => {
        if (appName === 'app') {
            console.log(`Application is running on http://${address}:${port}`);
        }
    });
}

function getFilePath(appName, fileName) {
   return path.resolve(__dirname, `../sites/${appName}/${fileName}.html`)
}

function injectTpl() {
    const filePath = getFilePath('app', 'index')
    const jsonData= JSON.parse(fs.readFileSync(path.resolve(__dirname, '../config/config.json')))
    const servers = jsonData.filter(app => app.appName !== 'app').map(app => ({ title: app.title, origin: `http://${address}:${app.port}`}))
    const data = fs.readFileSync(filePath).toString().replace(/<script id='tpl'>([\s\S]*?)<\/script>/, `<script id='tpl'>${JSON.stringify(servers)}</script>`)
    fs.writeFileSync(filePath, data)
}

module.exports = {
    Application
}