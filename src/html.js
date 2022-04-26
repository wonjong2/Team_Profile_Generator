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
<body style="background-color:cyan">
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

let content2 = ``;

const createFile = (list) => {
    console.log(list);
    fs.writeFile('./dist/index.html', generateContents(list), (error) => error ? console.error(error) : console.log("Success"));
    return
}

function generateContents(list) {
    return content1 + content2 + content3;
}

module.exports = {
    createFile,
};