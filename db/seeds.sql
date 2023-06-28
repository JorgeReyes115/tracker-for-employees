USE employee_db;


INSERT INTO deparment (name)
VALUES
 ("Engineering"),
 ("legal"),
 ("Finance"),
 ("Sales");

 INSERT INTO roles (title, salary, deparment_ID)
 VALUES
 ("Engineering Manager",150000 ,1),
 ("Software Engineer", 115000 ,2),
 ("Sales Manager",85000 ,3),
 ("Accountant", 90000,4),
 ("Lawyer", 100000,4);

 INSERT INTO employee (first_name, last_name, role_id, manager_id)
 VALUES
 ("Jorge", "Reyes", 1, NULL),
 ("Marcus", "Fenix",3 ,NULL),
 ("Jhon", "Connor", 5, 1),
 ("Cloud", "Strife",2 ,1),
 ("Lara", "Croft",4 , 3),
 ("Gordon", "Freeman",2 , 1);
    

