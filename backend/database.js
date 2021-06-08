//const mysql = require("mysql");
const sqlite3 = require('sqlite3').verbose();

//var properties = {
 // host: "fintechsg08.mysql.database.azure.com",
 // port: 3306,
//  user: "fintechlab@fintechsg08",
//  password: "FinTechSG2021",
//  database: "batch9group3",
//};

var db = new sqlite3.Database('./mysqllite.sqlite', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
      return console.error(err.message);
  }
  console.log('Connected to the SQlite database');
});

// var connection = mysql.createConnection(properties);

// connection.connect((errors) => {
//   if (errors) {
//     console.log("Couldn't connect to the MySQL Server. Error: " + errors);
//   } else {
//     console.log("Connected to MySQL successfully!");
//   }
// });   

// setInterval(() => {
//   connection.query("select 1");
// }, 60 * 1000);

module.exports = { db };