const inquirer = await import('inquirer');

console.log(inquirer);

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));

// const generatePage = require('./src/page-template.js');

// const fs = require('fs');

// const pageHTML = generatePage(name, github);

// const [name, github] = profileDataArgs;

// fs.writeFile('index.html', pageHTML, err =>{
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });
