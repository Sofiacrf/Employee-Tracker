/*CREATE seed file*/
USE employeeTracker_DB;

/*Insert values into department table*/
INSERT INTO department (department_name)
VALUES ("Human Resources"), ("Finance and Legal"), ("Marketing and Sales"), ("Engineer");


/*Insert values into role table*/
/*Do I need to add the department ID?*/
/*HUMAN RESOURCES ROLE*/
INSERT INTO role (title, salary, department_id)
VALUES ("Talent Acquisition Manager", 65000, 1), ("Talent Acquisition Assistant", 60000, 1), ("Accountant", 75000, 2),  ("Lawyer", 850000, 2), ("Manager", 80000, 3), ("Executive", 60000, 3), ("Executive", 60000, 3), ("Jr Executive", 50000, 3), ("Sr Developer", 100000, 4), ( "Frontend Developer", 90000, 4), ("Backend Developer", 90000, 4);


/*EMPLOYEE*/
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1010, "Wanda", "Maximoff", 25, 0),
(1011, "Luke", "Charles", 26, 25),
(1012, "Natasha", "Romanoff", 27, 0),
(1013, "Thor", "Odinson", 28, 0),
(1014, "Stephen Vincent", "Strange", 29, 0),
(1015, "Scott", "Lang", 30, 29),
(1016, "Peter", "Parker", 31, 29),
(1017, "Anthony Edward", "Stark", 32, 0),
(1018, "Bruce", "Banner", 33, 0),
(1019, "Vision", "Vis", 34, 0);