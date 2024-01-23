function Oneplusaverageoftwo (x,y)
{
return Math.round(1 + (x+y)/2)
} 

let variable1 = 10;
let variable2 = 15;
let variable3 = 20;

const sumnew = (P1,Q1)=> {
    return P1+Q1
}

let P1 = 1;
let Q1 = 2;


console.log  ("One Plus Avg of var1 & var2 = " ,Oneplusaverageoftwo(variable1,variable2));
console.log  ("One Plus Avg of var2 & var3 = " ,Oneplusaverageoftwo(variable2,variable3));
console.log  ("One Plus Avg of var3 & var1 = " ,Oneplusaverageoftwo(variable3,variable1));
console.log ("Sum of P1 & Q1 = " , sumnew());