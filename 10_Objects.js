let Person = 
{
firstname : "Pranit",
lastname : "Tiwari",
Age : 29,
Weight : 90
}

console.log(Person.firstname);
console.log(Person.lastname);
console.log(Person.Age);
console.log(Person.Weight);

Person.Height="5'11"

console.log(Person.Height)

// Add new property to the Object
Person["Weight"] = 75
console.log(Person.Weight)

// Remove Existing property from Object

delete Person["Age"];
console.log(Person.Age);

console.log("**************** Looping Object ************")

for(let rx in Person)
{
    //console.log(rx) // Print only property name not values
    //console.log(Person[rx]); // Prints only values of property
console.log(rx + ": " + Person[rx])
}