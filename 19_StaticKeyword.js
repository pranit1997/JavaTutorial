// Static keyword is used to define static variables and static methods in a class. 
// Static variables and static methods belong to the class itself rather than to any specific instance of the class.
// Non-static variables and non-static methods belong to instances of the class, 
// meaning that each instance of the class has its own copy of these variables and methods.
class  Test
{ 
static a=10; //Static variable
b = 20; // Non-static variable

static m1()
{
    console.log("Static method m1");
}

 m2()
{
console.log("Non-static method m2");    
}
}

// 1. We can access static variables and static methods using the class name without creating an instance of the class.

console.log(Test.a); // Accessing static variable
console.log(Test.b); // Accessing non-static variable (This will give undefined because b is non-static)
