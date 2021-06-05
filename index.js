// Require 
const mysql = require ("mysql");
const inquirer = require("inquirer");

// set the connection
const connection = mysql.createConnection({
  host: "localhost",

  // set port
  port: process.env.PORT,

  // username
  user: "root",

  // password
  password: "Codexpress25_",
  database: "employeeTracker_DB",
});


connection.connect((err) => {
  if (err) throw err;
  runSearch();
});


const runSearch = () => {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Add department",
        "Add role",
        "Add employee",
        "View department",
        "View role",
        "View employee",
        "Exit",
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case "Add department":
          addDepartment();
          break;

        case "Add role":
          addRole();
          // map id and name and add the prompt and add db.addRole
          break;

        case "Add employee":
          addEmployee();
          break;

        case "View department":
          viewDepartment();
          break;

        case "View role":
          viewRole();
          break;

        case "View employee":
          viewEmployee();
          break;

        case "Update employee role":
          updateRole();
          break;

        case "Exit":
          connection.end();
          break;

        default:
          console.log(`Invalid action: ${answer.action}`);
          break;
      }
    });
};

//  "Add department",
// "Add role",
// "Add employee",
// "View department",
// "View role",
// "View employee 