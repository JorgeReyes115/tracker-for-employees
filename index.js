const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");

const db = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "2045",
    database: "employee_db",

});

db.connect(function(err){
    if (err) throw err;
    console.log("Connected to database");

    init();

})

function init(){
    inquirer.prompt ({
        type: "list",
        name: "options",
        message: "what do you want to do next?",
         choices: [
            "View Departments",
            "View Roles",
            "View Employees",
            "Add Department",
            "Add Role",
            "Add Employee",
            "Delete Department",
            "Quit"],
    })
    .then((options) => {
        switch (options.options) {
            case "View Departments":
                departments();
                break;
            case "View Roles":
                Roles();
                break; 
            case "View Employees":
                Employees();
                break; 
            case "Add Departments":
                 addDepartments();
                break;
            case "Add Role":
                 addRole();
                break; 
            case "Add Employee":
                addEmployee();
                break;
            case "Delete Department":
                deleteDepartment(); 
            case "Quit":  
                 Quit();
                 console.log("confuguration done, se you later!"); 
                 break;                    
        }
    })
}

function departments() {
    console.log("fetching deparments\n")
    db.query ("SELECT deparment.id AS id, deparment.name as Deparment from deparment", function (err, res) {
        if (err) {console.log(err)
        };

        console.table(res);
    });

    init();
};

function Roles() {
    console.log("fetching Roles\n");
    db.query(
        "SELECT roles.id, roles.title, roles.salary, deparment.deparment From roles LEFT JOIN deparment ON deparment.ID = roles.deparment_id", function (err, res) {
            if (err) {console.log(err)
            };
    
            cTable(res);
        });

            init();
};


function Employees() {
    console.log("fetching employee\n");
    db.query(
        "SELECT employee.id, employee.first_name, employee.last_name, roles.title, deparment.deparment, roles.salary From employee Left JOIN employee on manager.id =  employee.manager_id LEFT JOIN roles On roles.id = employee.roles_id", function (err,res) {
            if (err) {console.log(err)
            };
            console.table(res);
        });

            init();

};

function addDepartments() {
    inquirer
    .prompt({
        type: "input",
        name: "newDepartment",
        message: "name new department"
    })
    .then ((answers) => {
        db.query(
            "INSERT INTO deparments (name) VALUES(?)",
            [answers.name],
            console.log("department added"),
            function (err, res) {
                if (err) {console.log(err)
                };
                console.table(res);
            });

                init();
    });
};
 
function addRole() {
    inquirer
    .prompt({
        type: "input",
        name: "roleName",
        message: "name new role"
    },
    {
        type: "input",
        name: "roleSalary",
        message: "add new salary"
    })
    .then ((answers) => {
        db.query(
            "INSERT INTO roles (title, salary) VALUES(?,?)",
            [answers.title, answers.salary],
            console.log("role added"),
            function (err, res) {
                if (err) {console.log(err)
                };
                console.table(results);
            });
                init();
    });
};

function addEmployee() {
    inquirer
    .prompt(
        {
            type: "input",
            name: "firstName",
            message: "please enter employee first name"
        },
        {
            type: "input",
            name: "lastName",
            message: "please enter employee last name"
        },
        {
            type: "input",
            name: "role",
            message: "add employee new role and the corresponding id"
        },
        {
            type: "input",
            name: "manager",
            message: "add employee manager adn manager id"
        })
        .then ((answers) => {
            db.query(
                "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES(?,?,?,?)",
                [answers.firstName, answers.lastName, answers.Roles, answers.manager],
                console.log("employee added"),
                function (err, res) {
                    if (err) {console.log(err)
                    };
                
                    console.table(res);
                });
                    init();
        });

};

function deleteDepartment() {
    inquirer
    .prompt({
        type: "input",
        name: "deleteDepartment",
        message: "what department do you want to delete"
    })
    .then ((answers) => {
        db.query(
            "DELETE FROM department id = ?",
            [answers.deleteDepartment],
            console.log("department deleted"),
            function (err, res) {
                if (err) {console.log(err)
                };
                console.table(res);
            });
                init();
    });

};
