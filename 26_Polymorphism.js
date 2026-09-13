//Poly means many and morphism means forms. So polymorphism means many forms. 
// In programming, polymorphism is the ability of a function, object or method to behave differently based on the context. 
// It allows objects of different classes to be treated as objects of a common superclass. 
// There are two types of polymorphism in JavaScript: compile-time polymorphism (method overloading) and runtime polymorphism (method overriding).

class Shape{
draw()
{
return "This is a generic shape";
}
}

class Circle extends Shape{
draw()
{
return "This is a circle";
}
}

class Square extends Shape{
draw()
{
return "This is a square";
}
}

//This is also an example of runtime polymorphism as the draw() method is overridden in the Circle and Square classes.
let s = new Shape();
console.log(s.draw());

s = new Circle();
console.log(s.draw());

s = new Square();
console.log(s.draw());
