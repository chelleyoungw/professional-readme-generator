// Including packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require("../professional-readme-generator/utilities/generateMarkdown");

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your Project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project description?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'List the languages or technologies used to complete the Project?',
    },
    {
        type: 'input',
        name: 'creator',
        message: 'Type in your GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Type in your email address.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license do you want to use?',
        choices: [
            'APACHE2.0',
            'Boost1.0',
            'mit',
            'MPL2.0',
            'BSD2',
            'BSD3',
            'none',
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who or what resources contributed to your Project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the different tests if applicable?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is valid email for users to send questions to?'
    }
];

// Write README.md file synchronously. If the file does not exist, it will be created.
// If the file exists, its contents are overwritten.
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Initialize the app
function init() {

    // Prompt the user with questions using inquirer
    inquirer.prompt(questions).then((responses) => {

        // Once the user has provided responses, proceed to generate the README file
        console.log('Creating Your Professional README.md File...');

        // Write the README file to the filesystem
        writeToFile('./dist/README.md', generateMarkdown({ ...responses }));
    });
}

// Function call to initialize app
init();
