// Difference between Constructor and Method in Class is Constructor is used to initialize the object 
// Method is used to perform some action on the object.
class Employee{

constructor(eid, ename, salary){
    this.eid = eid;
    this.ename = ename;
    this.salary = salary;
}
display(){
    console.log(this.eid, this.ename, this.salary); 
}
}
``
let emp1 = new Employee(101, "Parth", 50000);
let emp2 = new Employee(102, "Pranit", 60000);
let emp3 = new Employee(103, "Pranay", 70000);   
emp1.display();
emp2.display();
emp3.display();

