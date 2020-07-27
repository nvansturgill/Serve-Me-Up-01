// Require Node.js file system module
const fs = require("fs");

// Require Node.js `inquirer` npm dependency
const inquirer = require("inquirer");

// Require `greeting.js` file
const greeting = require("./greeting.js");

// Console log `greeting` variable
console.log(greeting);

// Create function to prompt user for userPassword
function userQuestions() {
  inquirer.prompt([
    {
      type: "password",
      name: "userPassword",
      message: "What's the secret word?",
    },
  ]);
}

// Call and print `userQuestion` to console
userQuestions();
