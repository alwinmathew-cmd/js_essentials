//Hoisting is simply JavaScript's internal rulebook for what happens when you try to use a variable or function before the 
// line of code- where you actually wrote it.

// 1. Function Declaration (Fully Hoisted)
sayHello(); // Output: "Hello!" (Works even though defined below)

function sayHello() {
  console.log("Hello!");
}

// 2. var (Hoisted as undefined)
console.log(user); // Output: undefined
var user = "Alwin";

// 3. let / const (Hoisted in Temporal Dead Zone)
// console.log(score); // ReferenceError: Cannot access 'score' before initialization
let score = 100;