// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
inquirer
.prompt([
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
        message: "Please enter any testing protocols used for your project.",
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
]);
then((answers) => {
// TODO: Create a function to write README file

//Create README file data
const readMeData = `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions or concerns, please contact me:

GitHub: [${answers.username}](https://github.com/${answers.username})

Email: ${answers.email}
`;

// Write the README file
fs.writeToFile('README.md', readMeData, (err)=> {
    if (err) {
        console.error(err);
      } else {
        console.log('README.md file generated successfully!');
      }
    });
  })
  .catch((error) => {
    console.error(error);
  });


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
