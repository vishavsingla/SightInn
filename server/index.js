const express  = require('express');
const db = require('./dbConnect');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

db();
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(8080, () => {
  console.log('App listening on port 8080!');
});

