require('dotenv').config();

const express = require('express');
const { ParseServer } = require('parse-server');

const app = express();

const api = new ParseServer({
  databaseURI: process.env.MONGO_URI,
  cloud: './cloud/main.js',
  appId: process.env.APP_ID,
  masterKey: process.env.MASTER_KEY,
  serverURL: `http://localhost:${process.env.PORT}/parse`,
});

app.use('/parse', api);

app.listen(process.env.PORT, () => {
  console.log(`Parse Server running on http://localhost:${process.env.PORT}/parse`);
});
