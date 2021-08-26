const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
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
                return true
            } else {
                console.log("\033[31mPlease enter a valid email(example@example.com)\033[91m")
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
        choices: ["Mozilla", "Apache", "MIT", "Common Developer 1.0", "No license"]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("\x1b[32mSuccess! Your README.md file has been created inside the 'CreatedDocs' folder\x1b[0m");
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inputs) => {
        const data = generateMarkdown(inputs);
        writeToFile("./CreatedDocs/README.md", data)
    });
};

// Function call to initialize app
init();
