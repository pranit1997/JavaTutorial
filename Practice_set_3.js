// Problem 1 --> Program  to print marks of student using for loop
let result = 
{
Student1 : 90 ,
Student2 : 85 ,
Student3 : 75,
}

for (let i=0;i<Object.keys(result).length;i++)
{
    console.log("Result of " + Object.keys(result)[i] + " are " + result[Object.keys(result)[i]]);
}

  // Problem 2 --> Same Program  using For in Loop