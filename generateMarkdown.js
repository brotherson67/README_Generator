// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return  `
    # ${answers.name}

    ## Description
    This is where the basic README stuff will go

    ## Table of Contents
      ${answers.TofC}
    ================================================

    ## Usage
      ${answers.usage}
    ================================================

    ##License
      ${answers.license}
    ================================================

    ## Contributors 
      ${answers.contributors}
    ================================================

    ## tests 
      ${answers.tests}
    ================================================

    ## Questions 
    If you have any questions please email me at ${answers.email}
    My GitHub account is ${answers.github} you'll be able to find more there
    ================================================
    `
};

module.exports = generateMarkdown;
