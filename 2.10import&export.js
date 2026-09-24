//ES modules- import and export

//ES Modules allow you to break your JavaScript code into separate, reusable files (modules) using export to share 
//functionality and import to consume it.

//1) Named Exports & Imports:
// Use named exports when a single file needs to export 
// multiple functions, variables, or utility classes. You must import them using the exact same name inside curly 
// braces {}.

// mathUtils.js (Exporting individual items)
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// main.js (Importing specific items by name)
import { add, multiply } from './mathUtils.js';

console.log(add(5, 10));      // Output: 15
console.log(multiply(3, 4)); // Output: 12



//2) Default Exports & ImportsUse a default export when a file represents a single main entity—such as a primary class, 
// component, or configuration object. Each file can have only one export default. You import it without curly braces {} 
// and can give it any local variable name.

// User.js (Exporting a single primary class)
export default class User {
  constructor(name) {
    this.name = name;
  }
}

// main.js (Importing default without curly braces)
import UserProfile from './User.js'; // Renamed locally to UserProfile

const user = new UserProfile("Alwin");
console.log(user.name); // Output: Alwin



//3) Renaming Imports (as) & Importing Everything (* as)When module item names conflict with local variables, or when you 
// want to group all exports under a single namespace, use the as keyword.

// Renaming a named import using 'as'
import { add as sum } from './mathUtils.js';
console.log(sum(20, 30)); // Output: 50

// Importing everything into a single object namespace
import * as MathUtils from './mathUtils.js';
console.log(MathUtils.add(1, 2));      // Output: 3
console.log(MathUtils.multiply(2, 5)); // Output: 10




//Key Summary Rules:

// export const x = ...   ---> require import { x } from '...' (curly braces mandatory).

//export default x        ---> require import x from '...' (no curly braces, single default per file).

//Modules execute in strict mode by default and evaluated once when loaded.