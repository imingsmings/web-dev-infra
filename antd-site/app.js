const express = require('express');
const path = require('path');

const app = express();
const port = 9000;

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(port, () => {
  console.log(`Main server is running at http://localhost:${port}`);
});