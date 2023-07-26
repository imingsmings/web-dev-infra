const http = require('http');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

const CONFIG = {
    PORT: 8080
}

const init = () => {
    createServer()
}

function createServer() {
    const server = http.createServer((req, res) => {
        if (req.url === '/') {
            res.writeHead(301, { 'Location': '/index.html' });
            res.end();
        }
        const filePath = path.join(__dirname, req.url);
        responseContent(req, res, filePath)
    }) 

    server.listen(CONFIG.PORT, () => {
        console.log(`Server is running on http://localhost:${CONFIG.PORT}`);
    });
}

async function readStaticFile(filePath) {
    return await readFile(filePath)
}

async function responseContent(req, res, filePath) {
    try {
        const data = await readStaticFile(filePath);
        res.writeHead(200);
        res.end(data);
    } catch {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
}

init()