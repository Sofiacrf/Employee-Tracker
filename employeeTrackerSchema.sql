/* DROP Database if exist and CREATE it */
DROP DATABASE IF EXISTS employeeTracker_DB;
CREATE DATABASE employeeTracker_DB;

USE employeeTracker_DB;

/*CREATE TABLES SECTION*/
CREATE TABLE department(
  id INT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE role(
  id INT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE employee(
  id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT default NOT NULL,
  manager_id INT NOT NULL,
  PRIMARY KEY (id)
);