const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const fs = require('fs');

const content1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <!-- Link to the css file for bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <nav class="navbar bg-primary">
    <div class="container-fluid" style="display:block;text-align:center">
        <span class="navbar-brand mb-0 h1" style="font-size:3rem;color:white">My Team</span>
    </div>
    </nav>

    <div class="container row justify-content-center" style="margin-left:auto; margin-right:auto; padding-top:3rem;">`;

const content3 = `    </div>
<!-- Link to bootstrap script -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>`;


const createFile = (list) => {
    console.log(list);
    let profileCard = ``;
    profileCard = generateProfileCard(list);
    fs.writeFile('./dist/index.html', generateFullContents(profileCard), (error) => error ? console.error(error) : console.log("Success"));
    return
}

function generateFullContents(content2) {
    return content1 + content2 + content3;
}

function generateProfileCard(list) {
    let engineerList = list.filter((value) => value instanceof Engineer);
    let internList = list.filter((value) => value instanceof Intern);

    let cards = ``;

    cards += `
        <div class="card p-0 m-2" style="width: 18rem; border:1px rgb(54, 53, 53) solid;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
            <div class="card-header" style="width:100%;font-weight:bolder;background-color:rgb(43, 74, 230);color:white"> 
                <p style="margin-top:0.3rem;margin-bottom:0.5rem;">${list[0].getName()}</p>
                <p style="margin-bottom:0.5rem">${list[0].getRole()}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${list[0].getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${list[0].getEmail()}">${list[0].getEmail()}</a></li>
                <li class="list-group-item">Office number: ${list[0].officeNumber}</li>
            </ul>
        </div>

`;
     
    engineerList.forEach((value) => 
        cards += `        <div class="card p-0 m-2" style="width: 18rem; border:1px rgb(54, 53, 53) solid;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
            <div class="card-header" style="width:100%;font-weight:bolder;background-color:rgb(252, 138, 35);color:white"> 
                <p style="margin-top:0.3rem;margin-bottom:0.5rem;">${value.getName()}</p>
                <p style="margin-bottom:0.5rem">${value.getRole()}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${value.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${value.getEmail()}">${value.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${value.getGithub()}" target="_blank">${value.getGithub()}</a></li>
            </ul>
        </div>

`
    );

    internList.forEach((value) => 
        cards += `        <div class="card p-0 m-2" style="width: 18rem; border:1px rgb(54, 53, 53) solid;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
            <div class="card-header" style="width:100%;font-weight:bolder;background-color:rgb(34, 242, 139);color:white"> 
                <p style="margin-top:0.3rem;margin-bottom:0.5rem;">${value.getName()}</p>
                <p style="margin-bottom:0.5rem">${value.getRole()}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${value.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${value.getEmail()}">${value.getEmail()}</a></li>
                <li class="list-group-item">School: ${value.getSchool()}</li>
            </ul>
        </div>

`
    );

    return cards;
}

module.exports = {
    createFile,
};