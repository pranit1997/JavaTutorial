let fruits = ["apple", "banana", "orange"];

//toString() && join() method -- This method converts an array to a string and returns the result. 
// The join() method also joins all array elements into a string, but you can specify a separator.

console.log(fruits.toString()); 

console.log(fruits.join(" - ")); 

//Pop() method -- This method removes the last element from an array and returns that element. 
// This method changes the length of the array.

console.log(fruits.pop());
console.log(fruits);

//Push() method -- This method adds a new element to the end of an array and returns the new length. 
// This method changes the length of the array.

console.log(fruits.push("grape"));
console.log(fruits);    

//Shift() method -- This method removes the first element from an array and returns that element. 
// This method changes the length of the array.         

console.log(fruits[0]);

fruits.shift();
console.log(fruits);

console.log(fruits[0]);

//Unshift() method -- This method adds a new element to the beginning of an array and returns the new length.

console.log(fruits.unshift("kiwi"));
console.log(fruits);

//Delete() method -- This method removes an element from an array at a specified index.

delete fruits[0];
console.log(fruits);
console.log(fruits.length);

// Concat() method -- This method is used to merge two or more arrays.
let fruits1 = ["mango","papaya"];
let fruits2 = ["pineapple","watermelon"];
let fruitshop = fruits.concat(fruits1, fruits2);
console.log(fruitshop); 

// Slice() method -- This method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
console.log(fruitshop.slice(2));

//sort() method -- This method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

let numbers = [40, 100, 1, 5, 25, 10];
console.log(numbers.sort()); // Sorts numbers as strings, which may not be the intended behavior
console.log(numbers.sort((a, b) => a - b)); // Sorts numbers in ascending order
console.log(numbers.sort((a, b) => b - a)); // Sorts numbers in descending order

//reverse() method -- This method reverses the order of the elements of an array in place.
let num2 = [10, 2, 34, 40, 54];
console.log("Before reverse:", num2);
console.log("After reverse:", num2.reverse());
