//1)  .map()  //In its simplest form is just an iterator method ie, a for-loop for an array.
//Use Case: Transforming data structures, all of the entries, but not mutating them.
//Results are stored into another array
const details = [{id:1,name:"Alice"}, {id:2,name:"Bob"}]
const usernames = details.map(user => user.name)

console.log(usernames) //[ 'Alice', 'Bob' ]


//2)  .filter()  ////In its simplest form is just an iterator method ie, a for-loop for an array.
// Cannot transform entries(elements) in array, but can sleectively pick elements.
// Stores results in anotehr array.

const numbers = [12,23,44,55,78,99]
const even_nos = numbers.filter(num => num%2===0)
console.log(even_nos) // [ 12, 44, 78 


//3)read MDN docs for more