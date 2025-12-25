//Problem 1
console.log("Pranit\"");

// Problem 2
let sentence = "Pransh is a good boy";
let word = "Pransh"

console.log(`The word  "${word}"  ${sentence.includes(word) ? "is" : "is not"} present in sentence`);

// Problem 3

let  Word1 = "Hi There!! What is your name??"

console.log(Word1.toLowerCase());
console.log(Word1.toUpperCase());

// Problem 4

let Str2 = "The amount is Rs 1000";
let amount = Number.parseInt(Str2.slice("The amount is Rs".length));
console.log(amount);
console.log(typeof amount);
