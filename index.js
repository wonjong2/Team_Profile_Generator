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
            validate(name) {
                return name.length > 0 ? true : `Empty name! Please enter the manager's name`
            }
        },
        {
            type: 'input',
            message: `Enter the manager's employee ID: `,
            name: 'id',
            validate(id) {
                return id.length > 0 ? true : `Empty ID! Please enter the manager's emaployee ID`
            }
        },
        {
            type: 'input',
            message: `Enter the manager's email address: `,
            name: 'email',
            validate(email) {
                return email.match(/\S+@\S+\.\S+/) ? true : `Please enter manager's email address with valid format`
            }
        },
        {
            type: 'input',
            message: `Enter the manager's office number: `,
            name: 'officeNumber',
            validate(officeNumber) {
                console.log(officeNumber)
                return officeNumber.match(/[0-9]+/) ? true : `Invalid format! Please enter the manager's office number`
            }
        },
    ])
    .then((answer) => {
        // Add the manager's information to the lists
        const manager = new Manager(answer);
        teamMembers.push(manager);

        // Call loopQuestion function for iteration
        // loopQuestion function should be called at the end of .then()
        loopQuestion('Next');
    })
    .catch(err => 
        console.log(err)
    );

function loopQuestion(next) {
    if(next === 'Exit') {
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
                    validate(name) {
                        return name.length > 0 ? true : `Empty name! Please enter the name`
                    }
                },
                {
                    type: 'input',
                    message: `Enter the employee ID: `,
                    name: 'id',
                    when: (answer) => answer.next !== 'Exit',
                    validate(id) {
                        return id.length > 0 ? true : `Empty ID! Please enter the employee ID`
                    }
                },
                {
                    type: 'input',
                    message: `Enter the email address: `,
                    name: 'email',
                    when: (answer) => answer.next !== 'Exit',
                    validate(email) {
                        return email.match(/\S+@\S+\.\S+/) ? true : `Please enter manager's email address with valid format`
                    }
                },
                {
                    type: 'input',
                    message: 'Enter the GitHub username: ',
                    name: 'github',
                    when: (answer) => answer.next === 'Add an engineer',
                    validate(github) {
                        return github.length > 0 ? true : `Empty GitHub username! Please enter the GitHub username`
                    }
                },
                {
                    type: 'input',
                    Message: `Enter the intern's school?`,
                    name: 'school',
                    when: (answer) => answer.next === 'Add an intern',
                    validate(school) {
                        return school.length > 0 ? true : `Empty school! Please enter the intern's school`
                    }
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
                // loopQuestion function should be called at the end of .then()
                loopQuestion(next);
            })
            .catch(err => 
                console.log(err)
            );
        }
}
