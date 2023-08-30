// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("node:util");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions =[
    {
        type: "input",
        name: "title",
        message: "What is the title of the project?",
    },
    {
        type: "input",
        message: "Please enter a brief description of the project.",
        name: "description",
    },
    {
        type: "input",
        message: "Please provide further details about your project and its general purpose.",
        name: "about",
    },
    {
        type: "input",
        message: "What are the installations used for your project?",
        name: "installation",
    },

    {
        type: "list",
        name: "license",
        message: "Please select the license used for this project:",
        choices: [
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            "Boost Software License 1.0",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 2.0",
            "GNU Affero General Public License v3.0",
            "GNU Lesser General Public License v2.1",
            "Mozilla Public License 2.0",
            "The Unlicense",
            "None",
        ],
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test",
    },
    {
        type: "input",
        name: "author",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "userEmail",
        message: "What is your email?",
    },
    {
        type: "input",
        name: "URL",
        message: "What is the URL of the deployed site?",
    },
    {
        type: "input",
        name: "repo",
        message: "What is the URL of the GitHub Repo?",
    },
];

// TODO: Create a function to write README file

fs.writeToFile('README.md', data, err => {
    if (err) {
        console.error(err);
      } else {
        console.log('README.md file generated successfully!');
      }
    });


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => 
    {
            const readmeData = generateMarkdown(response);
            writeToFile('README',readmeData);

    })
}

// Function call to initialize app
init();
