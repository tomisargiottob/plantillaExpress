const express = require('express');
const config = require('config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = config.app.port || 8080;

const server = app.listen(PORT, () => {
  console.log(`Server up and listening on http://localhost:${PORT}`);
});

server.on('error', (err) => {
  console.log(err);
});
