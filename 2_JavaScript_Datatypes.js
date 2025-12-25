

// 4. Datatype in JavaScript
// There are two types of data types. Primitive and Non-Primitive

//Primitive Data types
/* 
N --> Null
N ---> Number
S ---> String
S ---> Symbol
B ---> BigInt
B --> Boolean
U ---> Undefined
*/

let a1 = null;
let b1 = 35;
let c1 = Symbol("This is a Symbol");
let d1 = "Pranit";
let e1 = true;
let f1 = BigInt (65455);
let g1;

console.log(a1,b1,c1,d1,e1,f1,g1)

// Non-Primitive Data type --> Objects
// {} --> Indicates Object
const age = {
Pranay : 32 ,
Pranit : 26 ,
Riddhi : 24 ,
Parth : 19
};
console.log(age.Pranit);
