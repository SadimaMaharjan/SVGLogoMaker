const Circle = require("./circle");
const Square = require("./square");
const Triangle = require("./triangle");

function generateShape(data) {
  if (data.shape === "circle") {
    let chosenShape = new Circle(data.shapeColor, data.text, data.textColor);
    return chosenShape.render();
  }
  if (data.shape === "square") {
    let chosenShape = new Square(data.shapeColor, data.text, data.textColor);
    return chosenShape.render();
  }
  if (data.shape === "triangle") {
    let chosenShape = new Triangle(data.shapeColor, data.text, data.textColor);
    return chosenShape.render();
  }
}

module.exports = generateShape;
