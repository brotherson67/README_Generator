// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = ('./generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What would you like to call your project?'
    },
    {  
        type: 'input',
        name: 'sections',
        message: 'What are the sections of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project'
    },
    {
        type: 'input',
        name: 'TofC',
        message: 'Enter a table of contents'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What will your program be used for?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What kind of license does your project have'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter one or more sample tests for people to try out'
    },
    {
        type: 'input',
        name: 'email',
        message: 'enter your email address for people to ask you questions'
    },
    {
        type: 'input',
        name: 'github',
        message: 'enter your Github username for people to ask you questions'
    }
    
];

function getQuestions() {
    inquirer
        .prompt(questions)
        .then(answers => answers);
    
}

// TODO: Create a function to write README file
function writeToFile() {
    getQuestions()
    generateMarkdown()
    
}


// // TODO: Create a function to initialize app
// function init() {
//     fs.writeFile(`PROJREADME.md`, writeToFile(), err => {
//         if (err) throw new Error(err);

//         console.log('Your README file has been generated');
//     })
// }

// // Function call to initialize app
// init();
