const express = require('express')
const path = require('path');
const { getLocalAddress } = require('../config/utils')

class Application {
    static create(appName, port) {
        const app = express()

        registerApplicetion(app, appName, port)
    }
}

function registerApplicetion(app, appName, port) {
    app.use(express.static(path.resolve(__dirname, `../sites/${appName}`)));

    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, `../sites/${appName}/index.html`))
    });

    app.get('/index-cn', (req, res) => {
        res.sendFile(path.resolve(__dirname, `../sites/${appName}/index-cn.html`))
    });

    app.listen(port, () => {
        if (appName === 'app') {
            console.log(`Application is runnung on http://${getLocalAddress()}:${port}`);
        }
    });
}

module.exports = {
    Application
}