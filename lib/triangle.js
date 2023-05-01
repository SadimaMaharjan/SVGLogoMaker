const Shape = require("./shapes");

class Triangle extends Shape {
  constructor(shapecolor, text, textColor) {
    super(shapecolor, text, textColor);
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100, 25 200, 200 0, 200" fill="${this.shapecolor}" /><text x="100" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
  }
}

module.exports = Triangle;
