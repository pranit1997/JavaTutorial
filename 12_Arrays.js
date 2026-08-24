// let Car = ["BMW","Jeep","Toyota","Honda","Mercedes","Ford"];

// //  Car[5] = Mahindra; 
 
// console.log(Car);
// console.log("Length of Car array:" + "  " + Car.length);
// console.log(Car[0]);
// console.log(Car[1]);
// for (let i=0;i<Car.length;i++)
// {
//     console.log(Car[i])
// }

// console.log(typeof Car);
// Car[0] = "TATA";
// console.log(Car);

console.log("*********** Objects in Array ***********");
let Car1 = [
    {name:"BMW", price: 1000000},
    {name:"Jeep", price: 1500000},
    {name:"Toyota", price: 2000000}
];

let Car2 = [
    {name:"Honda", price: 2500000},
    {name:"Mercedes", price: 3000000},
    {name:"Ford", price: 3500000}
];

 let Automobile = [Car1,Car2];
// console.log(Automobile[0]);

for(let i=0;i<Car1.length;i++){
    console.log(Car1[i]);
}

console.log("*********** For of loop ***********");

for(let car of Automobile){
    console.log(car);
}

//Recognize Array

console.log(typeof Automobile);

Array.isArray(Car1) ? console.log("Automobile is an Array") : console.log("Automobile is not an Array");
