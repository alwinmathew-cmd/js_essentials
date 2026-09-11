//js dictionaries- key:value pairs
//keys must be unique, keys are mutable
//values can be anything
//object keys are alays type coerced into strings.

const person = {
  fname: "John",
  lname: "James",
  age: 45,
  hobbies: ["golf", "tennis", "violin"],
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  },
};

console.log(person);
alert(person); //[object Object]

//To fetch a value from the object, we can use either dot notation or bracket notation
// Dot Notation is easier
console.log(person.fname); //John
console.log(person["age"]); //45
console.log(person.fname, person.lname);

console.log(person.hobbies[1]); //tennis //hobiies val is an array

//To deal with a nested object literal:
console.log(person.address.city);

console.log(person["age"]["hobbies"]); //undefined

//Fetch all values as an array
console.log(Object.values(person)); //values put in an array

//Fetching obj literal keys:
const keys = Object.keys(person); //Keys are put in an array
console.log(keys);

//Fetching all keys and values in an array,where each pair is a nested array:
console.log(Object.entries(person));

//object Destructuring:puling properties out of object literal to be used directly

//We write object keys, selectively those, that we need to reuse directly
const {
  fname,
  address: { city }, //since address is a nested object
  hobbies: [firsthobby, secondhobby],
} = person;

console.log(lname, city, secondhobby);

//Selectively taking out certain keys,works only for object literals, array-destructrring doesnt have that liberty,
//  as there are no keys.
// So we've to write as many variables so as to mimic originial count, ofc default values exist, so they could increase
//count of variables

//Still, we've to show by comma at least the variables even if there are some elements we don't wanna destructure
// outta the array

//Ex: const [first, ,third,fourth, ,last] = colors
/////////////////////////////////////

//To add a key to an object:
const details = {fname:'George',age:50}
details.email = 'george@gmail.com';
console.log(details)