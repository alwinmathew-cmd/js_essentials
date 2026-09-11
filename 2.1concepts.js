//By Objects,we refer to all stuff that isn't Primitive data type. 
//object literals are the js dictionaries.

//break and continue only work on loops, use return to halt a function mid-while

//Pass by reference:
// Behavior: When you assign an object or array to a new variable, you are copying the address (the reference) to where
// that data lives in memory, not the data itself. If you modify the data through one variable, it affects both because
// they point to the exact same spot.

let obj1 = { name: "Alice" };
let obj2 = obj1; // obj2 points to the exact same object in memory
obj2.name = "Bob";
console.log(obj1.name); // "Bob" (changed!)


//Truthy & Falsy Values

// Falsy Values
// The complete list of every value that evaluates to false in JavaScript:
// false (the boolean itself)
// 0 (and -0)
// "" (empty string, using single, double, or backtick quotes)
// null (intentional absence of value
// undefined (uninitialized or missing value)
// NaN (Not-a-Number)                        //When?: Ex: parseInt("abc4") #Not=a-number


// Truthy Values
// Everything else in JavaScript evaluates to true. This includes:
// Any non-zero number (e.g., 1, -42, 3.14)
// Any non-empty string (e.g., "hello", "0", "false")
// All objects and arrays, even when they are completely empty ([] and {})
// Functions


//null vs undefined

// undefined: when js handles a var say that isnt initialized
let score;              
console.log(typeof score); //undefined                    //Unintenional, as js assigns undefinied type

// null:      we intentionally want a var to not have  a val

let user = "bob";
user = null;                                                         //Intentional
console.log(user); //null  //we can directly assign null to var as well ie: let user = null


