// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return `
        # ${fileName}
        ## Discription
        This is where the basic README stuff will go
        `
}

// TODO: Create a function to initialize app
function init() {
    fs.writeFile(`${fileName}.md`, writeToFile(fileName, data), err => {
        if (err) throw new Error(err);

        console.log('Your README file has been generated');
    })
}

// Function call to initialize app
init();
