//Purpose:To prevent a js prog from crashing, we use Optioonal Chaining(?.), it gets us undefined value
//We can further handle undefined to a  valid o/p for users via Nullish Coalescing Operator(??)

//1.The Optional Chaining Solution (?.)
//By adding a question mark before the dot (?.), you tell JavaScript: "Only keep going if the thing before the dot actually
//  exists. If it doesn't, just stop right here and give me undefined instead of crashing."

//Ex:Imagine you are fetching user data from a server, and you aren't sure if the user provided their address.

const userProfile = {
  username: "Alwin",
  contact: {
    email: "alwin@example.com"
    // Notice there is no 'address' object provided here
  }
};

// 1. THE OLD WAY (A crash waiting to happen)
// console.log(userProfile.contact.address.city); 
// ERROR: Cannot read properties of undefined (reading 'city')

// 2. THE OLD FIX (Messy and long)
if (userProfile.contact && userProfile.contact.address) {
    console.log(userProfile.contact.address.city);
}

// 3. THE OPTIONAL CHAINING WAY (?.)
console.log(userProfile.contact?.address?.city); 
// Output: undefined (No error, the app safely keeps running!)
///////////////////////////////////////////////////////////////////////////////////////////////

//When you use optional chaining (?.) and a property is missing, JavaScript safely short-circuits and returns undefined 
// instead of crashing. However, you rarely want undefined showing up in your application's UI. You usually want a clean 
// fallback value instead.
//This is where optional chaining pairs perfectly with the Nullish Coalescing Operator (??).

//you can use (??)Nullish Coalescing Operator to provide fallback values when pulling data out of objects.

const userrProfile = {
  username: "Alwin",
  contact: {
    email: "alwin@example.com"
    // Phone number is missing
  }
};

// 1. Just Optional Chaining
const phone = userrProfile.contact?.phone;
console.log(phone); // Output: undefined

// 2. Optional Chaining(?.) + Fallback Value (??)
const securePhone = userrProfile.contact?.phone ?? "No phone number provided";
console.log(securePhone); // Output: "No phone number provided"

///////////////////////////////////////////////////////////////////////////////////////////////



//2.Use Cases other than object-literals:

// 2.1) Functions: [?.()]
// You can safely call a function or method only if it exists. If the function is undefined or null, JavaScript skips the 
// call instead of throwing a TypeError.


const user = {
  name: "Alwin",
  // getDiscount is missing / not defined
};

// Safely attempts to call getDiscount if it exists
const discount = user.getDiscount?.(); 
console.log(discount); // Output: undefined (No crash!)

// Works with standalone callback functions too:
function processData(callback) {
  callback?.("Data loaded"); // Executed only if callback was passed
}
processData(); // Runs safely without error


// 2.2) Arrays and Dynamic Keys (?.[index] / ?.[key])
// Instead of a dot, use bracket notation with ?. to safely access array elements or dynamic object properties.


const userList = null; // Imagine an API response that returned null

// Safely access array index
const firstUser = userList?.[0]; 
console.log(firstUser); // Output: undefined

// Safely access dynamic keys
const key = "email";
const email = userList?.[0]?.[key];
console.log(email); // Output: undefined

///////////////////////////////////////////////////////////////////////

//A simple example to warp it up:

const fruits = ["kiwi","pear","grape"]

console.log(fruits?.[3]??"Fruit not entered into list yet!"); //We aint sure if 3rd element in array exists or not

//so used fruits?.[3] to get undefined in case it aint there and used Nullih Coalescing to neatly handle rather 
// print undefined