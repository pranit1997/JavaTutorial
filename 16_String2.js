let name = "Pranit";
let middlename = "Vijay";
let surname = "Tiwari";
//CharAt() method returns the character at a specified index (position) in a string.
console.log(name.charAt(0));    

//Concat() method joins two or more strings.

console.log(name.concat(" Vijay"));
console.log(name.concat(" ", middlename, " ", surname));

//Replace() method replaces a specified value with another value in a string.
console.log(name.replace("Pranit", "Parth"));

//Substring() method returns the characters in a string between two indexes into the string.
console.log(name.substring(0, 3));

//ToUpperCase() method converts a string to uppercase letters.
console.log(name.toUpperCase());

//ToLowerCase() method converts a string to lowercase letters.
console.log(name.toLowerCase());    

//Split() method splits a string into an array of substrings.
let str = "Hello, my name is Pranit";
let arr = str.split(" ");
console.log(arr[0])
console.log(arr);

//Trim() method removes whitespace from both ends of a string.
let str2 = "       Hello, my name is Pranit        ";
console.log(str2.trim());

/***************Numbers **********************/

let x = 10;
let y = 20.2;
let z = 30e4;
console.log(x,y,z);

//Isint() method returns true if a number is an integer.
console.log(Number.isInteger(x));
console.log(Number.isInteger(y));
console.log(Number.isInteger(z));

//ParseInt() method parses a string and returns an integer.
let str3 = "10";
let num1 = Number.parseInt(str3);
console.log(num1);
console.log(Number.isInteger(num1));

//ParseFloat() method parses a string and returns a floating point number.
let str4 = "10.5";
let num2 = Number.parseFloat(str4);
console.log(num2);
console.log(typeof num2);

//ToString() method converts a number to a string.
let num3 = 10;
console.log(typeof num3);
let str5 = num3.toString();
console.log(str5);
console.log(typeof str5);