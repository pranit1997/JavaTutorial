// Using Protype in classes

class Employee
{
constructor(eid,ename)
{
    this.eid = eid;
    this.ename = ename;
}
}
Employee.prototype.salary = 50000;

// Using Protype in classes to add functions to the class.
Employee.prototype.display = function()
{
    console.log(this.eid,this.ename,this.salary);
}

emp1 = new Employee(101,"Pranit");
emp1.display();

emp2 = new Employee(102,"Pransh");
emp2.display();



