DROP DATABESE IF EXIST employee_db;
CREATE DATABESE employee_db;
USE employee_db


CREATE TABLE deparment (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL

);

CREATE TABLE roles(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    deparment_ID  INTEGER,
    FOREIGN KEY (deparment_id)
    REFERENCES deparment (id)
    ON DELETE SET NULL
)

CREATE TABLE employee(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER 
    FOREIGN KEY (roles_id) REFERENCES roles(id) ON DELETE SET NULL
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id)
);
