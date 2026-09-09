//Array manipulation continued:
const fruits = ["kiwi", "cherry", "lemon", 500, null];
fruits.push(1000); //add to array's end
console.log(fruits);

//remove array's last element
fruits.pop();
console.log(fruits);

//add to array's start
fruits.unshift("melon");
console.log(fruits);

//To add/remove array elements at certain index, we use .splice()
//This is aligned more to remove logic

// Start at index 0, remove 1 element
fruits.splice(0, 1);
console.log(fruits); //melon got deleted

//To add:// Start at index 1, remove 0 elements, add "mango"  //add is optional
fruits.splice(1, 0, "mango", "pineapple");
console.log(fruits);

//-----------------------------------------------------
//Check array element membership:
const val = fruits.includes("mango");
console.log(val); //true

//will retur false if non-existent element passed as arg

//To fetch an element's index:
index_val = fruits.indexOf("mango");
console.log(index_val);


