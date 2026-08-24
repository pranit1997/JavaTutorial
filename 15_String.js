let  name1 = "Pranit";
console.log(name1);
console.log(name1.length);
console.log(name1[0]);
console.log(name1[4]);
// Template Literals

let boy1 = "Pranit";
let boy2 = "Pransh";

console.log(`${boy1} is a uncle of ${boy2}`);


//Esape Sequence Characters

let fruit = "Bana\'na";
console.log(fruit);

let boy3 = "Pranit"
console.log(boy3.length);
console.log(boy3.toUpperCase());
console.log(boy3.toLowerCase());
console.log(boy3.slice(4));
console.log(boy3.slice(2,5));

console.log(boy3.replace("I","ee"));
let friend = "Pransh";
console.log(boy3.concat(" is a friend of ", friend))

let friend2 = "       Friend2           "
console.log(friend2);
console.log(friend2.trim());


let text = "Hello";
for (let i=0; i<=text.length;i++)
{
console.log(text[i]);
}

console.log(text.length);

let name2 = "Pranit"
console.log(name2)
console.log(name2.length)
console.log(name2.toUpperCase())
console.log(name2.toLowerCase())
console.log(name2.slice(3))
console.log(name2.replace("Pranit","Pransh"))