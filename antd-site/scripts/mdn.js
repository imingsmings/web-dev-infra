const express = require('express');
const path = require('path');

const app = express();
const port = 9005

app.use(express.static(path.resolve(__dirname, '../sites/mdn')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../sites/mdn/index.html'))
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
