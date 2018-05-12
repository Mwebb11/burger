const mysql = require("mysql");

let connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "", // Enter your password here
  database: "burgers_db"
});
// Make connection.
if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
}
// Export connection for our ORM to use.
module.exports = connection;