// Requirements
const fs = require("fs");
const http = require("http");
const inquirer = require("inquirer");
const greeting = require("./greeting.js");
const readline = require("readline");

// USED TO TEST ADDITIONAL LIPSUM STRINGS ONLY
const play = "Lorem ipsum dolor sit amet, consectetur.";
// END OF LIPSUM TEST

// Console log `greeting`
console.log(greeting);

// Tell user you are going to create a server
console.log(play);

// Create server
const hostname = "127.0.0.1";
const port = "3000";
const server = http.createServer(function (req, res) {});

// Confirm server
const serverReady =
  "Look! a wild server appeared on local port " + port + "...";
console.log(serverReady);

// Create function to prompt user for userPassword
function userQuestions() {
  inquirer
    .prompt([
      {
        type: "password",
        name: "userPassword",
        message:
          "Choose a passphrase, any passphrase. Type it into the console then hit return.",
      },
    ])
    .then((answers) => {
      fs.writeFile("userPassword.txt", answers.userPassword, function (err) {
        console.log(
          'Woohoo! Your passphrase, "' +
            answers.userPassword +
            '" was sucessfully written to userPassword.txt'
        );
      });
    });
}
userQuestions();
