let Box = function (a, b) {
  this.sideA = a;
  this.sideB = b;
}
let Rectangle = function (a, b) {
  this.sideA = a;
  this.sideB = b;
}

Box.prototype = {
  square: function () {
    console.log('square' + ':' + this.sideA * this.sideB);
  },
  perimeter: function () {
    console.log('perimeter' + ':' + 2 * (this.sideA * this.sideB));
  }

}
Rectangle.prototype = new Box();

let testBox = new Box(3, 4);
let testRectangle = new Rectangle(55, 4);


testBox.perimeter();
testBox.square();
testRectangle.square();
testRectangle.perimeter();