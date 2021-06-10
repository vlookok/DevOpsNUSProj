const sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('./mysqllite.sqlite', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
      return console.error(err.message);
  }
  console.log('Connected to the SQlite database');
});

module.exports = { db };
