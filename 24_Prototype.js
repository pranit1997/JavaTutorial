//Prototype is used in js to add methods to the constructor function. 
// It is a way to add properties and methods to an object after it has been created.

// Using Protype in functions

function Student()
{
    this.name = "Pranit"
    this.gender = "Male"
}

Student.prototype.age = 22;

stu1 = new Student();
//Adding age to the function.

console.log(stu1.name);
console.log(stu1.gender);
console.log(stu1.age); // This will print 22 as age is added to the object stu1.

stul2 = new Student();
console.log(stul2.name);
console.log(stul2.gender);
console.log(stul2.age); // This will print 22 as age is added to the object stu2.

