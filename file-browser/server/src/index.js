const app = require('./app');
const { port } = require('./config');

app.listen(port, function onListen() {
  // eslint-disable-next-line no-console
  console.log(`File browser server listening on http://localhost:${port}`);
});
