const Inquirer = require('Inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Html = require('./src/html');

// Array for the list of team members
let teamMembers = [];

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
    .then((answer) => {
        // Add the manager's information to the lists
        const manager = new Manager(answer);
        teamMembers.push(manager);

        // Call loopQuestion function for iteration
        loopQuestion('Next');
    })
    .catch();

function loopQuestion(next) {
    if(next === 'Exit') {
        console.log(teamMembers);
        Html.createFile(teamMembers);
        return;
    }
    else {
        Inquirer
            .prompt([
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
                    message: 'Enter the GitHub username: ',
                    name: 'github',
                    when: (answer) => answer.next === 'Add an engineer',
                },
                {
                    type: 'input',
                    Message: 'What is school?',
                    name: 'school',
                    when: (answer) => answer.next === 'Add an intern',
                },
            ])
            .then(({next, ...employeeData}) => {
                if(next === 'Add an engineer') {
                    // Add an engineer's information to the lists
                    const member = new Engineer(employeeData);
                    teamMembers.push(member);
                }
                else if(next === 'Add an intern') {
                    // Add an intern's information to the lists
                    const member = new Intern(employeeData);
                    teamMembers.push(member);
                }
                loopQuestion(next);
            })
            .catch();
        }
}
