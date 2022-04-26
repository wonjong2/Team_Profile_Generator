const Inquirer = require('Inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Array for the list of team members
let teamMembers = [];

// Question objects for an engineer and an intern
const questions = [
    {
        type: 'rawlist',
        message: 'Choose the next step :',
        choices: ['Add an engineer', 'Add an intern', 'Exit'],
        name: 'next',
    },
    {
        type: 'input',
        Message: 'What is github?',
        name: 'github',
        when: (answer) => answer.next === 'Add an engineer',
    },
    {
        type: 'input',
        Message: 'What is school?',
        name: 'school',
        when: (answer) => answer.next === 'Add an intern',
    },
];

// Application starts with asking manager's information
Inquirer
    .prompt([
        {
            type: 'input',
            message: `What is the manager's name?`,
            name: 'name',
        },
        {
            type: 'input',
            message: `What is the employee ID?`,
            name: 'id',
        },
        {
            type: 'input',
            message: `What is the email address?`,
            name: 'email',
        },
        {
            type: 'input',
            message: `What is the office number?`,
            name: 'officeNumber',
        },
    ])
    .then((response) => {
        // Add the manager's information to the lists
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        teamMembers.push(manager);

        loopQuestion(response);
        // Inquirer
        //     .prompt([
        //         {
        //             type: 'rawlist',
        //             message: 'Choose the next step :',
        //             choices: ['Add an engineer', 'Add an intern', 'Exit'],
        //             name: 'next'
        //         }
        //     ])
        //     .then((data) => {
        //         loopQuestion(data);
        //     })
        //     .catch();
    })
    .catch();

function loopQuestion(data) {
    if(data.next === "Exit") {
        console.log('Exit!!!!!');
        console.log(teamMembers);
        // Create html file and return
    }
    else {
        console.log('NEXT STEP');
        Inquirer
            .prompt(questions)
            .then((answer) => {
                if(answer.next === 'Add an engineer') {
                    var member = new Engineer(answer.name, answer.id, answer.email, answer.github);
                }
                else if(answer.next === 'Add an intern') {
                    var member = new Intern(answer.name, answer.id, answer.email, answer.github);
                }
                teamMembers.push(member);
                loopQuestion(answer);
            })
            .catch();
        }
}