// Require
const mysql = require("mysql");
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

//  "Add department"
function addDepartment() {
  console.log("Added department function");
}

// "Add role"
function addRole() {
  console.log("Added role function");
}

// "Add employee"
const addEmployee = () => {
    inquirer.prompt({
      name: 'firstname',
      type: 'input',
      message: 'What is the first name of the employee that you would like to add?'
    },{
      name: 'lastname',
      type: 'input',
      message: 'What is the last name of the employee that you would like to add?'
    }, {
      name: 'role',
      type: 'input',
      message: 'What is the role of the employee you would like to add?'
    }, {
      name: 'manager',
      type: 'input',
      message: 'What is the manager´s Id?'
    }
    ).then((answer) => {
      const query = 'INSERT first_name, last_name, role_id, manager_id WHERE employee';
      connection.query(query, [answer.firstname, answer.lastname, answer.role, answer.manager], (err, res) => {
        res.forEach(({first_name, last_name, role_id, manager_id}) => {
          console.log(`Position: ${first_name} || Artist: ${last_name}Song: ${role_id} || Artist: ${manager_id}`)
        })
      })
    })
  }
// "View department"
const viewDepartment = () => {
  connection.query("SELECT department_name FROM department", (err, res) => {
    console.log(res);
  });
};

// "View roles
const viewRole = () => {
  connection.query("SELECT title FROM role", (err, res) => {
    console.log(res);
  });
};

// "View employees
const viewEmployee = () => {
  connection.query("SELECT first_name, last_name FROM employee", (err, res) => {
    console.log(res);
  });
}
