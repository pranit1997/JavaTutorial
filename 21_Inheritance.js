class A{
display(){  
this.a = 100;
console.log(this.a);
}
}

class B extends A{
show(){  
this.b = 200;  
console.log(this.b);
}
}

bobj = new B();
bobj.display();
bobj.show();

//Overriding : Overriding is a feature that allows a subclass to provide a specific implementation of a method 
// that is already defined in its superclass. In the example above, class B inherits from class A, and 
// it can override the display method if needed. 
// However, in this case, class B does not override the display method, 
// so it uses the implementation from class A.

