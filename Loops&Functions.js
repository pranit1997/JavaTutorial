let sum =0;
let n = prompt("Enter the number");
n = Number.parseInt(n);

for (let i=0;i<n;i++)
{
    sum += (i+1)
};
console.log("Sum of first "+ n +" natural number is: "+ sum );

// For in Loop
let obj = 
{
    Pranit : 95,
    Parth  : 45,
    Pranay : 98
}
for(let a in obj)
{console.log("Marks of "+a+ " are "+obj[a])}

// For of Loop

for (let b of "Pranit")
{console.log(b)}