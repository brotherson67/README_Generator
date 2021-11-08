// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');

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
test = () => {
    inquirer
        .prompt(questions)
        .then(answers => console.lof(answers));
}



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return `
        # ${fileName}

        ## Description
        This is where the basic README stuff will go

        ## Table of Contents

        ================================================

        ## Usage

        ================================================

        ##License

        ================================================

        ## Contributors 

        ================================================

        ## tests 

        ================================================

        ## Questions 
        If you have any questions please email me at 
        My GitHub account is ${github} you'll be able to find more there
        ================================================
        `
}

// TODO: Create a function to initialize app
function init() {
    fs.writeFile(`${fileName}.md`, writeToFile(fileName), err => {
        if (err) throw new Error(err);

        console.log('Your README file has been generated');
    })
}

// Function call to initialize app
init();
