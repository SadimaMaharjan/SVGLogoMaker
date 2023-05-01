const Circle = require("./circle");
const Square = require("./square");
const Triangle = require("./triangle");

describe("Circle", () => {
  it("should return with a circle with color and text entered by the user", () => {
    const circle = new Circle();
    circle.setColor("blue");

    expect(circle.render()).toEqual(
      `<circle cx="150" cy="100" r="80" fill="blue" />`
    );
  });
});

describe("Square", () => {
  it("should return with a square with color and text entered by the user", () => {
    const square = new Square();
    square.setColor("red");

    expect(square.render()).toEqual(
      `<rect width="200" height="200" fill="red" />`
    );
  });
});

describe("Triangle", () => {
  it("should return with a triangle with color and text entered by the user", () => {
    const triangle = new Triangle();
    triangle.setColor("green");

    expect(triangle.render()).toEqual(
      `<polygon points="150, 18 244, 182 56, 182" fill="green" />`
    );
  });
});
