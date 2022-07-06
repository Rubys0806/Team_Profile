const Employee = require('./lib/Employee');
const fs = require('fs'); 
const generateHTML = require('./src/generateHTML');
const inquirer = require('inquirer');

const info = [];

function init() {
 inquirer
 .prompt([
    {
        type:"input",
        name:"count",
        message:"How many employees are on the team?"
    }
 ])
 .then(data => 
    {for (let i = 0; i < data.count; i++) {
        Employee();
    } }
 )

}

init();