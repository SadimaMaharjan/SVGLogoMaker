// import the dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const generateShape = require("./lib/generateShape");

const questions = [
  {
    type: "input",
    name: "text",
    message: "What text would you like in your logo? Enter upto 3 characters. ",
  },
  {
    type: "input",
    name: "textColor",
    message: "What text color would you like your logo to have?",
  },
  {
    type: "list",
    name: "shape",
    message: "What shape would you like your logo to be?",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "What color would you like your logo to have?",
  },
];

function startProgram() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const nameOfFile = "logo.svg";
      const data = generateShape(answers);
      if (answers.text.length > 3) {
        console.log("Logo text must be upto 3 characters long");
        startProgram();
      } else {
        writeToFile(nameOfFile, data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.log("Could not create file")
      : console.log("Successfully created logo.svg file!")
  );
}

function init() {
  startProgram();
}

// Function call to initialize app
init();
