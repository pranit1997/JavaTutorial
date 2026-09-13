let text = '{"employee": ['+
'{"name":"John", "age":30, "city":"New York"},'+
'{"name":"Jane", "age":25, "city":"Los Angeles"},'+
'{"name":"Bob", "age":35, "city":"Chicago"}'+
']}';

let obj  = JSON.parse(text);
//Accessing the data from the parsed JSON object
console.log(obj.employee[0].name+"  "+ obj.employee[0].age+"  "+obj.employee[0].city);  


let text2 = '{"id": 101, "name": "Sarah Connor", "email": "sarah.c@example.com", "is_active": true, "roles": ["admin", "editor"], "middle_name": null, "address": {"street": "123 Main St", "city": "Los Angeles", "state": "CA", "zip": "90001"}, "phone_numbers": ["555-1234", "555-5678"], "created_at": "2023-01-15T10:30:00Z", "updated_at": "2023-02-20T15:45:00Z"}';
let obj1 = JSON.parse(text2);

console.log("ID: " + obj1.id);
console.log("Name: " + obj1.name);
console.log("Email: " + obj1.email);
console.log("Is Active: " + obj1.is_active);
console.log("Middle Name: " + obj1.middle_name);