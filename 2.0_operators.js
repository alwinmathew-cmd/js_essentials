// JavaScript Operators Guide

// 1. Arithmetic Operators
// Used to perform basic mathematical calculations.
let sum = 10 + 5;       // 15
let difference = 10 - 5; // 5
let product = 10 * 5;   // 50
let quotient = 10 / 2;  // 5
let remainder = 10 % 3; // 1
let power = 2 ** 3;     // 8 (2 * 2 * 2)

// 2. Assignment Operators
// Used to assign values to variables, combining operations with assignment.
let score = 10;
score += 5; // Equivalent to: score = score + 5; (score is now 15)
score -= 3; // Equivalent to: score = score - 3; (score is now 12)

// 3. Comparison Operators
// Used to compare two values, returning a boolean (true or false).
let looseMatch = (5 == "5");   // true (checks value only)
let strictMatch = (5 === "5"); // false (checks value and data type)
let isGreater = (10 > 5);      // true

// 4. Logical Operators
// Used to combine multiple conditions.
let isLoggedIn = true;
let hasPermission = false;
let andResult = isLoggedIn && hasPermission; // false (both must be true)
let orResult = isLoggedIn || hasPermission;  // true (at least one must be true)
let notResult = !isLoggedIn;                 // false (inverts boolean value)

// 5. Increment and Decrement Operators
// Used to increase or decrease a variable's value by 1.
let points = 5;
points++; // points is now 6
points--; // points is back to 5

// 6. Ternary Operator
// A shorthand for an if-else statement: condition ? valueIfTrue : valueIfFalse
let age = 20;
let userStatus = (age >= 18) ? "Adult" : "Minor"; // "Adult"

// 7. Type Operators
// Used to check data types.
let checkString = typeof "Hello"; // "string"
let checkNumber = typeof 42;      // "number"


//8:  in operator--checks key exists in object liertal and if index exists in array, not the values!

  //8.1:Using in with Objects (Most Common)When used with standard objects, the in operator checks for property keys (names),
  //  not the property values

  const fruitss = ["apple", "banana", "orange"];

// Checking for valid index positions (0, 1, 2)
console.log(0 in fruitss);       // true (fruits[0] exists)
console.log(2 in fruitss);       // true (fruits[2] exists)
console.log(5 in fruitss);       // false (index 5 does not exist)

// ⚠️ Warning: Checking for values will fail!
console.log("apple" in fruitss); // false ("apple" is a value, not an index)

// Checking for built-in array properties
console.log("length" in fruitss); // true (arrays have a .length property)



//8.2Using in with Arrays (Common Misconception)When used with arrays, the in operator checks for index numbers or 
// built-in properties, NOT the actual values inside the array

const fruits = ["apple", "banana", "orange"];

// Checking for valid index positions (0, 1, 2)
console.log(0 in fruits);       // true (fruits[0] exists)
console.log(2 in fruits);       // true (fruits[2] exists)
console.log(5 in fruits);       // false (index 5 does not exist)

// ⚠️ Warning: Checking for values will fail!
console.log("apple" in fruits); // false ("apple" is a value, not an index)

// Checking for built-in array properties
console.log("length" in fruits); // true (arrays have a .length property)





//9 spread & rest operators: both have "..." as their sign Ex:...arr1 ie, three dots followed by a variable

// Spread Example 1: Combining arrays //basically unpacking happening
const arr1 = [1, 2];
const combined = [...arr1, 3, 4];
console.log(combined); // [1, 2, 3, 4]

// Spread Example 2: Expanding object properties into a new object
const user = { name: 'Alice', age: 25 };
const updatedUser = { ...user, location: 'New York' };
console.log(updatedUser); // { name: 'Alice', age: 25, location: 'New York' }



// Rest Example 1: Collecting remaining function arguments into an array
function sum(first, ...remaining) {
  return remaining.reduce((acc, val) => acc + val, first);
}
console.log(sum(10, 20, 30)); // 60

// Rest Example 2: Collecting remaining elements during array destructuring
const colors = ['red', 'green', 'blue', 'yellow'];
const [primary, ...otherColors] = colors;
console.log(otherColors); // ['green', 'blue', 'yellow']

//**Quick Rule for `...**`

// * **Spread (Unpacks):
// ** Appears on the **right-side** of an assignment, inside a function call, or inside a literal to expand elements outward.

// * **Rest (Packs):
// ** Appears on the **left-side** of an assignment or in function parameter lists to collect remaining elements inward 
// into an array.