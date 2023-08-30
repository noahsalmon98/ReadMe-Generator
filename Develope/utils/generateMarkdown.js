// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license) {
        const licenseBadges = {
          'MIT': "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
          "Apache 2.0":
            "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
          "GNU GPLv3":
            "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
          'ISC': "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
        };
        return licenseBadges[license];
      }
      return "";
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
    function renderLicenseLink(license) {
        if (license) {
          const licenseLinks = {
            'MIT': "https://opensource.org/licenses/MIT",
            "Apache 2.0": "https://opensource.org/licenses/Apache-2.0",
            "GNU GPLv3": "https://www.gnu.org/licenses/gpl-3.0",
            'ISC': "https://opensource.org/licenses/ISC",
          };
          return `[License]( ${licenseLinks[license]} )`;
        }
        return "";
      }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return license == 'None' ? '' : `${data.title} has a ${license} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
  `};



module.exports = generateMarkdown;
