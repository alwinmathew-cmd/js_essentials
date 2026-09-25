// 1. What is a Higher-Order Function (HOF)?
// A Higher-Order Function is simply a function that does at least one of these two things:

// 1.1)Takes another function as an argument (like array.map()).

// 1.2)Returns a function (like your greet() example).

// So, returning an inner function is a type of HOF, but HOFs can also accept functions as inputs.



// 2. What is a Closure?
// A closure is born whenever an inner function accesses variables from its outer function.

// The magic of a closure is that the inner function "remembers" those outer variables even after the outer function has completely finished running.

// Putting Them Together (Code Example):



function createMultiplier(multiplier) {
  // `multiplier` is a variable in the outer function's scope

  return function(number) {
    // This inner anonymous function uses `multiplier`. 
    // This is a **Closure**!
    return number * multiplier;
  };
}

// `createMultiplier` is a **Higher-Order Function** because it returns a function.
let double = createMultiplier(2); // `multiplier` is saved as 2

//double becomes executable now --only possible when main-fn is an HOF 
console.log(double(5)); // 10 -> Uses the closed-over variable `2`


//How parameteres work in this concept:

// Outer Argument ---> Outer Fn. Parameter: When you call createMultiplier(2), the argument 2 is passed to the 
// outer function's parameter (multiplier). Even after createMultiplier finishes running, its environment is preserved.

// The Executable Reference: Assigning it to let double = ... stores the returned inner function inside the variable double. 
// double is now your executable function, carrying the remembered multiplier (2) inside its closure backpack.
//  
// Executable-call Argument ---> Inner Parameter: When you invoke double(5), the argument 5 is passed directly to the inner function's 
// parameter (number). The inner function then combines its own argument (5) with the closed-over outer variable (2) to 
// produce 10.

////////////////////////////////////////////////////////////

//Ex2:
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

//Inner fn is accessinng names.. now names are passed to the new executable, but esentially thats the same outer fn right,
//so a valid case of closures.