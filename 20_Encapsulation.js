class Employee {
    constructor() {

        let empid, empsalary;
    }

    // Created a get method to access the private variables.
    getId() {
        return this.empid;
    }

    //Created a set method to set values. 
    setId(empid) {
        this.empid = empid;
    }

    getSalary() {
        return this.empsalary;
    }

    setSalary(empsalary) {
        this.empsalary = empsalary;
    }
}


let emp1 = new Employee();
emp1.setId(100);
emp1.setSalary(50000);

console.log("Employee Id: " + emp1.getId());
console.log("Employee Salary: " + emp1.getSalary());
