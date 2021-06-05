const mysql = require("myql");
const util = require("util");

const connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306

  
    // Your username
    user: "root",
  
    // Your password
    password: "Codexpress25_",
    database: "employeeTracker_DB",
  });


  
  connection.connect((err) => {
    if (err) throw err;
  });

  connection.query = util.promisify(conecction.query);
  
  module.exports = connection;
