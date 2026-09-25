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

let uuser = "bob";
user = null;                                                         //Intentional
console.log(uuser); //null  //we can directly assign null to var as well ie: let user = null





//this keyword:


// 1. INSIDE AN object method
// 'this' points to the object that owns the method.
const user = {
  name: "Alex",
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
user.greet(); // Output: Hello, my name is Alex

// --------------------------------------------------

// 2. IN A REGULAR STANDALONE FUNCTION
// 'this' defaults to the global window object (or undefined in strict mode).
function showThis() {
  console.log(this);
}
showThis(); // Output: Window object

// --------------------------------------------------

// 3. INSIDE A CONSTRUCTOR FUNCTION
// 'this' points to the brand-new object instance created by the 'new' keyword.
function Person(name) {
  this.name = name; 
}
const person1 = new Person("Emma");
console.log(person1.name); // Output: Emma

// --------------------------------------------------

// 4. INSIDE AN ARROW FUNCTION
// Arrow functions do not have their own 'this'. They inherit it from the outer scope(globally, theres no name var, thats why)
const character = {
  name: "Leo",
  greet: () => {
    console.log(`Hello, my name is ${this.name}`);
  }
};
character.greet(); // Output: Hello, my name is undefined





//u can also do this:
function greet() {    //greet is a Higher Order fn here
  return function() {
    return "Hello, World!";
  };
}

let val = greet(); // `val` now holds the returned function reference

console.log(val()); // "Hello, World!" -> executes the reference


//Above example with Closure:
function createGreeter(greeting) {
  // The outer function returns an anonymous function
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

// `sayHello` becomes the inner function, remembering `greeting = "Hello"`
let sayHello = createGreeter("Hello");

console.log(sayHello("Alice")); // "Hello, Alice!"
console.log(sayHello("Bob"));   // "Hello, Bob!"



//Some daily used math methods

Math.round(), Math.abs(), Math.ceil(), Math.floor(), Math.sqrt(),  Math.pow()/num**2

//JSON.stringify()  : JSON-ifies any value 

//JSON.parse() : opposite of above method, unpacks any JSON value to a js object, or primitive value.
