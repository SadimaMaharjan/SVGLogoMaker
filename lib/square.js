const Shape = require("./shapes");

class Square extends Shape {
  constructor() {
    super();
  }
  render() {
    return `<rect width="200" height="200" fill="${this.shapeColor}" />`;
  }
}

module.exports = Square;
