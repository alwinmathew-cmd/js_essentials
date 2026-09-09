//Topics covered:Data Types(Primitives,
// Reference Types (aka Objects)-Types: Objects ({}), Arrays ([]), Functions (function() {}), Dates, Maps, Sets, etc.)
//let,const,var
//Basic string manipulation and string methods,
//Arrays and manipulation

//alert: shown as an alert when we reload page (dialogue box)
alert("Hello World");
console.log("hi there!");
console.error("This is an error bruh!");
//u can type to see stuff like alert(1) in console [Inspect in chrome]

console.warn("This is a warning!");

/*variables-3 ways:var, let, const

var- global scope, can be re-declared and updated (actually function scoped, else global if outta fn)
let- block scope, can be updated but not re-declared
const- block scope, cannot be updated or re-declared*/ //let and const mostly used

let age = 20;
age = 21;
console.log(age);

const number = 100;
//number = 500; // This will throw an error because const cannot be updated
console.log(number);

//const val; also error, const variables must be initialized at the time of declaration

const fname = "John"; //semi-ccolon as EOL isnt really needed //String
//const age = 30  error: as const var neither be redecl or reassigned
let z; //not error
age = 30;
//name is some sorta keyword-avoid it
{
  const fname = "Mark";
} //const vars are not redcl, but a block scope can isolate that

const isCool = true; //Boolean

const rating = 4.7; //no float- just number type
const x = null; //null
const y = undefined; //when u tupe let z; z is undefined, likewise when fns dont return anythng then also undefined.

console.log(typeof fname);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x); //null - object type
console.log(typeof y); //undefiined

//String,number,Boolean,null,undefined,Symbol,BigInt-> Primitives
//Object literals, Array, Function, Date, RegExp, Map, and Set.->Objects
///////////////////////////////////////////////////////

//concatenation-old way:
let greet = "Hello " + fname + " ur " + age + " years old";
//console.log(greet);

//better way: (f-strings sorta, but use backticks ``)

greet = `Hello Sir. ${fname}! You're ${age} years today!`;
console.log(greet);

const s = "Hello world";

console.log(s.length); //property-not a fn/method

console.log(s.toUpperCase()); //method since it has () at the end
console.log(s.toLowerCase()); //method

//substring
console.log(s.substring(0, 7)); //end is exclusive
console.log(s.substring(1, 8).toUpperCase());

//.split()
console.log(s.split("")); //splits into array of chars-here empty string as argument passed

//'' empty strings at least is a bare-min as above method's argument

const vals = "Technology, IT, Science, Engineering";
console.log(vals.split(", ")); //pass seperator as the argument to split the string into an array of substrings

///////////////////////////////////////////////////////

//Arrays-heterogenous collection of data,can be updated, nested,any length

//const numbers = new Array() //uses Array cosntructor. Here, empty array created
//const numbers = [1, 2, 3, 4, 5]; //array literal syntax
//const numbers = new Array(1,2,3,4,5,"hello,true)

//But,construtcor syntax not used, as is long & confusing.
//Ex: const numbers = new Array(5) creates empty array of length 5

//Easier approach:

//const fruits = [];//cant be reassigned then, so use let for this case

let fruits = [];

fruits = ["custard apple", "mangosteen", 45, false, null, undefined, "tp"];

const fruits_2 = ["apple", "mango", 100]; //always preferred to use const for arrays, as we dont want to reassign the array, but we can update it

console.log(fruits_2[2]);

fruits_2[3] = "papaya"; //ading element to 3rd index (wasnt there)
console.log(fruits_2);
