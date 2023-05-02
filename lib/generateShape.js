const Circle = require("./circle");
const Square = require("./square");
const Triangle = require("./triangle");

function generateShape(data) {
  if (data.shape === "circle") {
    let chosenShape = new Circle();
    chosenShape.setColor(data.shapeColor);
    //console.log(chosenShape);
    return chosenShape;
  }
  if (data.shape === "square") {
    let chosenShape = new Square();
    chosenShape.setColor(data.shapeColor);
    return chosenShape;
  }
  if (data.shape === "triangle") {
    let chosenShape = new Triangle();
    chosenShape.setColor(data.shapeColor);
    return chosenShape;
  }
}

module.exports = generateShape;
