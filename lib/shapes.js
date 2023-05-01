class Shapes {
  constructor(shapecolor, text, textColor) {
    this.shapecolor = shapecolor;
    this.text = text;
    this.textColor = textColor;
  }
  setColor(shapeColor) {
    this.shapecolor = shapeColor;
  }
}

module.exports = Shapes;
