// import the dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const color = require("./lib/colorKeyword");
const generateShape = require("./lib/generateShape");
const generateSVG = require("./lib/generateSVG");

const questions = [
  {
    type: "input",
    name: "text",
    message: "What text would you like in your logo? Enter upto 3 characters. ",
    validate: (input) => {
      const correctLength = input.length;
      if (correctLength > 3) {
        return false;
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "textColor",
    message: "What text color would you like your logo to have?",
    validate: (input) => {
      const isColor = color.includes(input.toLowerCase());
      const isHexColorCode = /^#[0-9A-F]{6}$/i.test(input);
      return isColor || isHexColorCode;
    },
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
    validate: (input) => {
      const isColor = color.includes(input.toLowerCase());
      const isHexColorCode = /^#[0-9A-F]{6}$/i.test(input);
      return isColor || isHexColorCode;
    },
  },
];

function startProgram() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const nameOfFile = "logo.svg";
      const shapeData = generateShape(answers);
      const svgData = generateSVG(answers, shapeData);
      writeToFile(nameOfFile, svgData);
    })
    .catch((error) => {
      console.log(error);
    });
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.log("Could not create file")
      : console.log("Generated logo.svg file!")
  );
}

function init() {
  startProgram();
}

// Function call to initialize app
init();
