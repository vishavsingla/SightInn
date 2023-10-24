const express  = require('express');
const app = express();
var mysql = require("mysql");
const db = require('./dbConnect.js');


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(8080, () => {
  console.log('App listening on port 8080!');
});

