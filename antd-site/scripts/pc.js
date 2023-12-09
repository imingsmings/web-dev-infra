const express = require('express');
const path = require('path');

const app = express();
const port = 9004

app.use(express.static(path.resolve(__dirname, '../sites/pro-components')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../sites/pro-components/index.html'))
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
