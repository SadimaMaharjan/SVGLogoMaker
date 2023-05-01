const Circle = require("./circle");
const Square = require("./square");
const Triangle = require("./triangle");

describe("Circle", () => {
  it("should return with a circle with color and text entered by the user", () => {
    const circle = new Circle("blue", "XYZ", "white");

    expect(circle.render()).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">XYZ</text></svg>`
    );
  });
});

describe("Square", () => {
  it("should return with a square with color and text entered by the user", () => {
    const square = new Square("blue", "XYZ", "white");

    expect(square.render()).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">XYZ</text></svg>`
    );
  });
});

describe("Triangle", () => {
  it("should return with a triangle with color and text entered by the user", () => {
    const triangle = new Triangle("blue", "XYZ", "white");

    expect(triangle.render()).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100, 25 200, 200 0, 200" fill="blue" /><text x="100" y="125" font-size="60" text-anchor="middle" fill="white">XYZ</text></svg>`
    );
  });
});
