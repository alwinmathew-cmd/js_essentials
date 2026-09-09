//Type coercion in JavaScript is the automatic or implicit conversion of values from one data type to another, such as turning a string into a number. 
// This also happens explicitly when you force a conversion using functions like String(), Number(), or Boolean().

// IMPLICIT COERCION (AUTOMATIC)
// JavaScript is a loosely typed language, meaning it tries to make sense of operations even when the data types don't match.

// * The Plus Operator (+): If either operand is a string, JavaScript converts the other operand into a string and concatenates them.
//   Example: 
  const result = "5" + 3; // "53" (number 3 becomes the string "3")

// * Other Math Operators (-, *, /): Operators other than + convert strings into numbers for mathematical operations.
//   Example: 
  const val = "5" - "2"; // 3 (both strings converted to numbers)
  const product = "5" * "2"; // 10

// * Logical Context (Boolean Coercion): Values used in conditions (like if statements or loops) are automatically 
// coerced into booleans. Values that become false are known as falsy values (false, 0, "", null, undefined, and NaN). 
// Everything else is truthy.
//   Example: 
  if ("hello") {
    // This runs because a non-empty string is truthy
  }

// EXPLICIT COERCION (MANUAL)
// You can manually convert types using built-in constructors and functions to keep your code predictable and avoid 
// unexpected bugs.

//* To String: Use String() or the .toString() method.
//  Example: 
  const num = 123;
  const stri = String(num); // "123"

//* To Number: Use Number(), parseInt(), or parseFloat().
//  Example: 
  const str = "45.6";
  const nums = Number(str); // 45.6
  const intNum = parseInt(str); // 45

// * To Boolean: Use Boolean() or the double NOT operator (!!).
//   Example: 
  const vall = "hello";
  const isTrue = Boolean(val); // true
  const alsoTrue = !!val; // true

// BEST PRACTICES

// * Use strict equality (===): Avoid the loose equality operator (==) because it performs unpredictable type coercion
//  behind the scenes (e.g., 0 == "" evaluates to true). === checks both value and type without converting.
// * Be intentional: When you know a piece of data needs to be a number (like input from a form field), explicitly convert
//  it using Number() rather than relying on math operators to do it implicitly.

//Also remember: object (dictionary) keys are also Strings under the hood, (type-coerced)
//irrespective of how they look in the object, or howsoever u pass them.