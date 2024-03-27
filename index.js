// Including packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utilities/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

// Write README.md file synchronously. If the file does not exist, it will be created.
// If the file exists, its contents are overwritten.
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
