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
        message: 'Choose the next step: ',
        choices: ['Add an engineer', 'Add an intern', 'Exit'],
        name: 'next',
    },
    {
        type: 'input',
        message: `Enter the name: `,
        name: 'name',
        when: (answer) => answer.next !== 'Exit',
    },
    {
        type: 'input',
        message: `Enter the employee ID: `,
        name: 'id',
        when: (answer) => answer.next !== 'Exit',
    },
    {
        type: 'input',
        message: `Enter the email address: `,
        name: 'email',
        when: (answer) => answer.next !== 'Exit',
    },
    {
        type: 'input',
        Message: 'Enter the GitHub username?',
        name: 'github',
        when: (answer) => answer.next === 'Add an engineer' && answer.next !== 'Exit',
    },
    {
        type: 'input',
        Message: 'What is school?',
        name: 'school',
        when: (answer) => answer.next === 'Add an intern' && answer.next !== 'Exit',
    },
];

// Application starts with asking manager's information
Inquirer
    .prompt([
        {
            type: 'input',
            message: `Enter the manager's name: `,
            name: 'name',
        },
        {
            type: 'input',
            message: `Enter the manager's employee ID: `,
            name: 'id',
        },
        {
            type: 'input',
            message: `Enter the manager's email address: `,
            name: 'email',
        },
        {
            type: 'input',
            message: `Enter the manager's office number: `,
            name: 'officeNumber',
        },
    ])
    .then((response) => {
        // Add the manager's information to the lists
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        teamMembers.push(manager);

        loopQuestion("Next");
    })
    .catch();

function loopQuestion(next) {
    console.log(next);
    if(next === 'Exit') {
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
                    const member = new Engineer(answer.name, answer.id, answer.email, answer.github);
                    teamMembers.push(member);
                }
                else if(answer.next === 'Add an intern') {
                    const member = new Intern(answer.name, answer.id, answer.email, answer.school);
                    teamMembers.push(member);
                }
                loopQuestion(answer.next);
            })
            .catch();
        }
}