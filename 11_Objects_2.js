let Employee = 
{
empname : "Pranit Tiwari",
Designation : "Module Lead",
Basicsal : 75000,
Bonus : function()
{
    return((this.Basicsal *10)/100);
}
};

console.log(Employee.Bonus())