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
const addDepartment = () => {
  inquirer.prompt([{
    name: 'department',
    type: 'list',
    message: 'Type the department of the employee',
    choices: [
      "Human Resources",
      "Finance and Legal",
      "Marketing and Sales",
      "Engineer"
    ]
  }]).then((answer) => {
    console.log(answer);
  })
}

// "Add role"
const addRole = () => {
 inquirer.prompt([{
   name: 'title',
   type: 'list',
   message: 'Choose the title of the employee',
   choices: [
     "Talent Acquisition Manager",
     "Talen Acquisition Assistant",
     "Accountant",
     "Lawyer",
     "Manager",
     "Executive",
     "Jr Executive",
     "Sr Developer",
     "Frontend Developer",
     "Backend Developer"
   ]
 },{
   name: 'salary',
   type: 'input',
   message: 'What is the employee´s salary?'
 }
]).then((answers) => {
  console.log(answers);
})
}

// "Add employee"
const addEmployee = () => {
    inquirer.prompt([{
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
  ]).then((answer) => {
      console.log(answer)
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
