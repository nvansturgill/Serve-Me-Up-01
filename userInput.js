// Require Node.js file system and HTTP modules
const fs = require("fs");
const http = require("http");

// Require Node.js `inquirer` npm dependency and `greeting.js` file
const inquirer = require("inquirer");
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
