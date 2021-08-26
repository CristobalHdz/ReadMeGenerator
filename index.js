// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// "https://javascript.plainenglish.io/how-to-inquirer-js-c10a4e05ef1f" Inquirer usage
// https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8 Inquirer check email
// https://shields.io/ Shield creator
// https://opensource.org Licenses

// https://github.com/hoffman1200/Homework-9/tree/master/Develop
// https://www.youtube.com/watch?v=tshItrUIPYw&ab_channel=KazzuallGamer

const questions = [
    {
        type: "input",
        message: "What is your project's name?",
        name: "title"
    },
    {
        type: "input",
        message: "Enter your project's description",
        name: "description"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "Enter your email",
        name: "email",
        validate: function (email) {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

            if (valid) {
                console.log("email has been stored")
                return true
            } else {
                console.log(". Please enter a valid email")
                return false
            }
        }
    },
    {
        type: "confirm",
        message: "Are there any contributors?",
        name: "contributorConfirm",
    },
    {
        type: "input",
        message: "Enter contributors",
        name: "contributors",
        when: function (inputConfirm) {
            return inputConfirm.contributorConfirm
        }
    },
    {
        type: "confirm",
        message: "Do you want to give installation notes?",
        name: "instConfirm"
    },
    {
        type: "Input",
        message: "Please enter installation notes",
        name: "installation",
        when: function (inputConfirm) {
            return inputConfirm.instConfirm
        }
    },
    {
        type: "confirm",
        message: "Do you want to add instructions for your project's usage?",
        name: "instructionsConfirm"
    },
    {
        type: "Input",
        message: "Please enter the project instructions",
        name: "instructions",
        when: function (instructionsCon) {
            return instructionsCon.instructionsConfirm
        }
    },
    {
        type: "list",
        message: "Please select a license",
        name: "license",
        choice: ["Mozilla", "Apache", "MIT", "Apache License 2.0", "Common Developer 1.0", "No license"]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    try {
        fs.accessSync(fileName)
    } catch (error) {
        fs.writeFileSync(fileName, data, " ");
    }
};

// TODO: Create a function to initialize app
async function init() {
    inquirer.prompt(questions).then((inputs) => {
        const data = generateMarkdown(inputs);
        console.log(inputs)
        await writeToFile("README.md", data)
    });
};

// Function call to initialize app
init();
