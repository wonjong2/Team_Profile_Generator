const Inquirer = require('Inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Html = require('./src/html');

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
        // Ask this question when a user doesn't choose 'Exit'
        when: (answer) => answer.next !== 'Exit',
    },
    {
        type: 'input',
        message: `Enter the employee ID: `,
        name: 'id',
        // Ask this question when a user doesn't choose 'Exit'
        when: (answer) => answer.next !== 'Exit',
    },
    {
        type: 'input',
        message: `Enter the email address: `,
        name: 'email',
        // Ask this question when a user doesn't choose 'Exit'
        when: (answer) => answer.next !== 'Exit',
    },
    {
        type: 'input',
        message: 'Enter the GitHub username: ',
        name: 'github',
        // Ask this question when a user chooses 'Add an engineer'
        when: (answer) => answer.next === 'Add an engineer',
    },
    {
        type: 'input',
        Message: 'What is school?',
        name: 'school',
        // Ask this question when a user chooses 'Add an intern'
        when: (answer) => answer.next === 'Add an intern',
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

        // Call loopQuestion function for iteration
        loopQuestion("Next");
    })
    .catch();

function loopQuestion(next) {
    if(next === 'Exit') {
        console.log(teamMembers);
        // Create html file and return
        Html.createFile(teamMembers);
        return;
    }
    else {
        Inquirer
            .prompt(questions)
            .then((answer) => {
                if(answer.next === 'Add an engineer') {
                    // Add an engineer's information to the lists
                    const member = new Engineer(answer.name, answer.id, answer.email, answer.github);
                    teamMembers.push(member);
                }
                else if(answer.next === 'Add an intern') {
                    // Add an intern's information to the lists
                    const member = new Intern(answer.name, answer.id, answer.email, answer.school);
                    teamMembers.push(member);
                }
                // Call loopQuestion function for iteration
                loopQuestion(answer.next);
            })
            .catch();
        }
}
