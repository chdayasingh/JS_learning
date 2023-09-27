function Shape(color){
    this.color = color;
}

Shape.prototype.duplicate = function(){
    console.log("Duplicate")
} 

function Circle(radius, color){
    Shape.call(this, color);
    this.radius = radius;
}

function Square(side, color){
    Shape.call(this, color);
    this.side = side;
}

// changing circleBase (prototype) to new object of Shape
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.draw = function(){
    console.log("Draw");
}
Circle.prototype.constructor = Circle


Square.prototype = Object.create(Shape.prototype);

c1 = new Circle(1, "red");
s1 = new Square(1, "yellow");




