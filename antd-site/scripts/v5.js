const express = require('express');
const path = require('path');

const app = express();
const port = 9001

app.use(express.static(path.resolve(__dirname, '../sites/v5')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../sites/v5/index.html'))
});

app.get('/index-cn', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../sites/v5/index-cn.html'))
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
