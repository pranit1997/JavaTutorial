class Student
// {
//     Sdetails()

//     {
//         this.sid = 200;
//         this.sname = "Pranit";
//         this.grade = "A";
//     }

//     display()
//     {
//        console.log(this.sid,this.sname,this.grade);
//     }
// }

// let stu = new Student();

// stu.Sdetails();
// stu.display();

{
    Sdetails(sid,sname,grade)

    {
        this.sid = sid;
        this.sname = sname;
        this.grade = grade;
    }
    
    display()
    {
       console.log(this.sid,this.sname,this.grade);
    }
}

let stu = new Student();

stu.Sdetails(101,"Parth", "D");
stu.display();
 
// This code indicates that the Student class has two methods: Sdetails and display. 
// The Sdetails method is intended to set the properties of the student (sid, sname, grade), 
// but it currently does not assign any values to these properties. 
// The display method logs the properties to the console.

