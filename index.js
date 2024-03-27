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
function init() {

    // Prompt the user with questions using inquirer
    inquirer.prompt(questions).then((responses) => {

        // Once the user has provided responses, proceed to generate the README file
        console.log('Creating Your Professional README.md File...');
        
        // Write the README file to the filesystem
        writeToFile('README.md', generateMarkdown({ ...responses }));
    });
}

// Function call to initialize app
init();
