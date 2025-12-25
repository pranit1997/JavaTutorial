// Problem 1 --> Program to print marks of student using for loop
let result = 
{
Student1 : 90 ,
Student2 : 85 ,
Student3 : 75,
}

console.log("Problem1 result: ")
for(let i=0; i<Object.keys(result).length;i++)
  {
    console.log("Marks of " + Object.keys(result) + " are " + result[Object.keys(result)[i]])
  }

  // Problem 2 --> Same Program using For in Loop

  console.log("Problem2 result: ")
  for(let key in result)
  {
    console.log("Result of " + key + " are " + result[key]);
  }

  //Problem 3 --> Prompt user until he enters the correct  number

  /*let cn = 10;
  let input;
  while(input != cn )
  {
    input = prompt("Enter a number: ");
    console.log("Try again");
  }
  console.log("You entered the correct number")
*/

  // Problem 4--> Calculate mean of 5 numbers

  const mean = (a,b,c,d,e) => 
  {
return (a+b+c+d+e)/5
  }

console.log(mean(1,2,3,4,1))
   
