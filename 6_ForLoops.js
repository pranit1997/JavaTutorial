let sum = 0;
let n = 5;
//n = Number.parseInt(n);

for (let i=0;i<n;i++)
{
  console.log(  sum += (i+1))
    console.log(i+1 , "+");
    console.log("Value of i is: " + i)
};
console.log("Sum of first "+ n +" natural number is: "+ sum );

console.log("------------------")


// For in Loop
let obj = 
{
    Pranit : 95,
    Parth  : 45,
    Pranay : 98
}
for(let a in obj)
{console.log("Marks of "+a+ " are "+obj[a])
    //console.log(a)
    console.log(obj)
}

console.log("------------------")

// For of Loop

for (let b of "Pranit")
{console.log(b)}

console.log("------------------")

for(let i=10;i>0;i--)
{
    console.log(i)
}