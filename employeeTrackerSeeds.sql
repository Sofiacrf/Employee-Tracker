/*CREATE seed file*/
USE employeeTracker_DB;

/*Insert values into department table*/
INSERT INTO department (id, name)
VALUES (1, "Human Resources");

INSERT INTO department (id, name)
VALUES (2, "Finance and Legal");

INSERT INTO department (id, name)
VALUES (3, "Marketing and Sales");

INSERT INTO department (id, name)
VALUES (4, "Engineer");


/*Insert values into role table*/
/*Do I need to add the department ID?*/
/*HUMAN RESOURCES ROLE*/
INSERT INTO role (id, title, salary, department_id)
VALUES (25, "Talent Acquisition Manager", 65000, 1)

INSERT INTO role (id, title, salary, department_id)
VALUES (26, "Talent Acquisition Assistant", 60000, 1)

/*FINANCE AND LEGAL ROLE*/
INSERT INTO role (id, title, salary, department_id)
VALUES (27, "Accountant", 75000, 2)

INSERT INTO role (id, title, salary, department_id)
VALUES (28, "Lawyer", 850000, 2)

/*MARKETING AND SALES ROLE*/
INSERT INTO role (id, title, salary, department_id)
VALUES (29, "Manager", 80000, 3)

INSERT INTO role (id, title, salary, department_id)
VALUES (30, "Executive", 60000, 3)

INSERT INTO role (id, title, salary, department_id)
VALUES (31, "Jr Executive", 50000, 3)

/*ENGINEER ROLE*/
INSERT INTO role (id, title, salary, department_id)
VALUES (32, "Sr Developer", 100000, 4)

INSERT INTO role (id, title, salary, department_id)
VALUES (33, "Frontend Developer", 90000, 4)

INSERT INTO role (id, title, salary, department_id)
VALUES (34, "Backend Developer", 90000, 4)


/*EMPLOYEE*/
INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (1010, "Wanda", "Maximoff", 25)

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1011, "Luke", "Charles", 26, 25)

INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (1012, "Natasha", "Romanoff", 27)

INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (1013, "Thor", "Odinson", 28)

INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (1014, "Stephen Vincent", "Strange", 29)

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1015, "Scott", "Lang", 30, 29)

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1016, "Peter", "Parker", 31, 29)

INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (1017, "Anthony Edward", "Stark", 32)

INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (1018, "Bruce", "Banner", 33)

INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (1019, "Vision", "Vis", 34)