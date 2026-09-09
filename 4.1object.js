// JavaScript Object Keys & Type Coercion Summary:

// 1. All keys are strings (or Symbols) under the hood.
// No matter what you type (numbers, booleans, etc.), JavaScript automatically coerces them into strings. Because of this, keys can easily overwrite 
// each other if they resolve to the exact same string value.

// Example:
const obj = {};
obj[100] = "First";
obj["100"] = "Second";
console.log(obj[100]); // "Second" (100 and "100" point to the exact same key slot)

// 2. Objects and arrays cannot be used as keys.
// If you try to pass an object or array as a key, JS converts it to a generic string like "[object Object]" or a comma-separated list, causing 
// accidental data overwrites.

// Example:
const userA = { name: "Alice" };
const userB = { name: "Bob" };
const data = {};
data[userA] = "Admin";//data[object Object] =  "Admin"        Therefore: data = {[object Object]:"Admin"}
data[userB] = "User"; // Simply updates the value for key [object Object]
//O/P: { '[object Object]': 'User' }


// What actually happens:
// userA becomes a string: The default .toString() result for any plain JavaScript object is always "[object Object]".


//Fix: use a  Map



// 3. Dot vs. Bracket notation is purely about syntax, not data types.

// * Dot notation (obj.key) is used for clean, standard variable-like names (cannot start with a number, have spaces, or contain special characters other
//  than _ and $).
// * Bracket notation (obj["key"] or obj[variable]) is required when keys violate those naming rules or are stored inside variables. 
// It does not change the fact that the key is coerced into a string.

//Example:
const profile = {};
profile.age = 25;            // Dot notation for clean keys
profile["first-name"] = "Sam"; // Bracket notation for hyphens and spaces