const { Sequelize } = require('sequelize');
const express = require('express')

const sequelize = new Sequelize('postgres://postgres:123@localhost:8081/SightInn',{dialect: "postgres"});

sequelize.authenticate().then(() => {
    console.log(`Database connected to discover`)
}).catch((err) => {
    console.log(err)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db









// Option 2: Passing parameters separately (sqlite)

// const express = require('express');
// const mysql = require('mysql2');
// const app = express();

// const db = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   user: 'root',
//   password: '123',
//   database: 'sightinn',
// });


// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database: ' + err.stack);
//     return;
//   }
//   console.log('Connected to the database as ID ' + db.threadId);
// });
