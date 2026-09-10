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