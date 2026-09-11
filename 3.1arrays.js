//1.Array manipulation continued:
const fruits = ["kiwi", "cherry", "lemon", 500, null];
fruits.push(1000); //add to array's end
console.log(fruits);

//remove array's last element
fruits.pop();
console.log(fruits);

//add to array's start
fruits.unshift("melon");
console.log(fruits);





//2.To add/remove array elements at certain index, we use .splice() //We can choose to add/remove more than 1 element
//This is aligned more to remove logic\
//Array manipulation.

// Start at index 0, remove 1 element
fruits.splice(0, 1);
console.log(fruits); //melon got deleted

//To add:// Start at index 1, remove 0 elements, add "mango"  //add is optional
fruits.splice(1, 0, "mango", "pineapple");                //To add,start at desired index and keep remove elements 0, add needed ones
console.log(fruits);





//-----------------------------------------------------
//3.To fetch an element's index:
index_val = fruits.indexOf("mango"); //.indexOf() fails to handle Nan values, .includes() handles better)
console.log(index_val);


//Check array element membership:
const val = fruits.includes("mango");
console.log(val); //true

//will return false if non-existent element passed as arg




//4.Some more methods: .at()
//For fetching element from rear (-ve index also supported), we can use .at()
//Essentially fetches a siongle element, same as fruits[2], except fruits[-2] can also be done
//can be sud on arrays,strings

let colors = ["yellow","green","red"];
console.log(colors.at(1))            //nothing special

console.log(fruits.at(-1))           //red

let fname = "Benjamin";
console.log(fname.at(-3));  // m




//5. .slice() - Does not mutate the array/string, justr gives us a shallow slice copy of original entity

//Gives us a slice of the original entity, while not modifying the original entity
//Works on arrays and strings
//Similar to slicing in python:

//var.slcie(start,end) --> needs 2 parameters, ie start and end(exclsuive): tahts ur slice
//var.slice(start) --> one parameter: just start. From Start to last element, that shallow copy.
//var.slice() --> no apara. Whole array/string as a shallow copy.

let animals = ['lion','zebra','tiger','snake']

console.log(animals.slice(0,3))// ['lion','zebra','tiger']

console.log(animals.slice(1)) //['zebra','tiger','snake']

console.log(animals.slice(-1))//['snake']  //here -1 index is start, so from here, flow is from left to right, no matter what, at all times

console.log(animals.slice(-2))//['tiger','snake']   //from -2 index to end, left->right flow

console.log(animals.slice())//['lion','zebra','tiger','snake'] 

//--SAME LOGIC applies to strings as well


