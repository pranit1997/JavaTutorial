//if else
    //Check if userhad entered the correct Username or Password.

/*let username = "Pranit007"
let Password = "Rich@2025"

if(username == "Pranit007" && Password == "Rich@2024")
{
console.log("Access Granted")
}
else
{
    console.log("Access Denied")
}*/

// Check greater number among three using if else

/*let a =222, b=303.33, c=4

if(a>=b&& a>=c)
{
    console.log("A is greater")
}
else if (b>=a && b>=c) 
    {
    console.log("B is greater")
    } 
else 
    {
     console.log("C is greater")      
    }
     */

    // Check greater number among three using ternary operator

let a =2222, b=303.33, c=4

let largestnumber = (a>=b && a>=c)? b :
                     (b>=a && b>=c)? b: c;
                     
 console.log("The largest number is: " , largestnumber)                    