//JavaScript arrow functions are a concise way to write function expressions using the => syntax. They were introduced in ES6 (ES2015)
// to reduce boilerplate code and solve common issues with the this keyword

//perfect choice for inline operations like .map() and .filter() and also with arrays

//Not meant for constructors,object literals and event listeners

//1. Simple example - No parameters:

const greet = () => "Good Morning!" //Fn. definition  Caution:if use let here, fn can be reassigned ie, redefined later

console.log(greet());               //Fn call


//2.  another simple example with parameters:
let a = 10, b = 2.5;                             //here b is also let

const product = (n1,n2) => n1*n2;

console.log(product(a,b)); // 25


//3.  multi-line arrow-fn version:
const getDiscountedPrice = (price, discount) => {
  const savings = price * discount;
  return price - savings;
};


//methods like .xxx() need the base_var.xxx() to be used, and this avoids need for parameters, as abase_var has them already
//Ex:  .map(), .filter()

//4.Replacing a basic for loop for actions, ie using arrow fn in place of    "array.forEach(temp_variable)""

const colors = ['red','yellow','green','orange'];

colors.forEach(color => console.log(`Color:${color}`))



//5. Replacing a for Loop where .map() is used
const numbers = [1,2,3,4,5];

const doubled = numbers.map(num => num * 2);

console.log(doubled)



//6.Replacing a for loop with an if statement) where   .filter() is used

const values = [23,456,11,34,54,55,2,121]

const even_nos = values.filter(num => num % 2 === 0);

console.log(even_nos)