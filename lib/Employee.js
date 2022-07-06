const inquirer = require('inquirer');

function Employee() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the name of the employee?",
        },
        {
          type: "input",
          name: "id",
          message: "Employee's ID number:",
        },
        {
          type: "input",
          name: "email",
          message: "Employee's email address:",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "Team Manager's office number:",
        },
        {
            type: "checkbox",
            name: "role",
            message: "Is this employee also a Manager, Engineer or Intern?",
            choices: ['Manager', 'Engineer', 'Intern', 'None'],
        },
      ])
    if (role = 'Manager'){
        inquirer
        .prompt([
          {
            type: "input",
            name: "officenumber",
            message: "What is the office number of this manager?",
          },
        ])
    }
    if (role = 'Engineer'){
        inquirer
        .prompt([
          {
            type: "input",
            name: "github",
            message: "What is the github username of this engineer?",
          },
        ])
    }
    if (role = 'Intern'){
        inquirer
        .prompt([
          {
            type: "input",
            name: "school",
            message: "What is the name of the school of this intern?",
          },
        ])
    }
    return data; 
}

module.exports = Employee; 