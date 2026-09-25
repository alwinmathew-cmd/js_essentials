//1. Array Destructuring (Position-Based)
colors = ["red", "yellow", "green"];

// const [first,second,third] = colors
// console.log(first) //red
{
  //We can also skip middle term like this with a space and commas:
  const [first, , third, def_val = "white"] = colors; //not an error- third is in diff color as its not used
  console.log(first); //red
  console.log(def_val); //white
}

//In object destructuring, we just gotta use keys-> we work with keys, nested or not, doesn't matter.

//2.Renaming variables (obviously, only works for objects, since arrays dont have keys): Essentially an alias of key.
//object destructuring renaming
const user = { id: 101, username: "dev_runner" };
const { id: roll_no, username: name , planet='Earth'} = user;
console.log(roll_no); //101
console.log(planet)

//3.Default Values: You can provide fallback values in case the property or array index doesn't exist (undefined).
//For objects, order or keys wrt default vals doesn't matter.
//for arrays, count of vars must match the array, or at least represent by commas, u can or not add default vars
//For arrays, order matters, as there no keys to pick any order of destructuring.

const settings = { theme: "dark" };
//const { layout, theme = "grid" } = settings; //u can't reassign it here;def val exists to fill in if absent.
const { theme, layout = "grid" } = settings;
//const {layout = 'grid',theme} = settings  //correct, we just have to give falback value to undefined-key
console.log(theme);

//4:Rest operator ... (three dots to indicate rest of keys/ array elements being grouped into a single object/array)
//Extract specific items and bundle the remaining properties or elements into a completely new object or array.

const purchase = { product: "shirt", price: 500.75, size: "L" };
const { size, ...rest } = purchase;
console.log(size);
console.log(rest); //remaining key-value pairs are put into a new object

const fruits = ["apple", "mango", "lichi", "grapes"];
const [first, ...remnants] = fruits;
console.log(first);
console.log(remnants);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//5. Nested Destructuring: Unpacking values from objects inside objects or arrays inside objects.
//In object destructuring, we just gotta use keys-> we work with keys, nested or not, doesn't matter.

const details = {
  fname: "Jason",
  lname: "Bourne",
  age: 34,
  address: { data: { city: "Melbourne" } },
};

const {
  fname,
  address: { data:{city}}} = details;

console.log(city);//just use nested key that actually has a value

//////////////////////////////////////////////////////////////////////////

//6.Function Parameter Destructuring: Unpacking properties directly in the argument list when a function receives an object.


function display_details({id, username:u_name, role='executive'}) { //in js functions, : ie, colon is only valid if use dfor destructuring object renaming
  console.log(`username is:${u_name} and iD is:${id} and job is:${role}`)  //so, the parameter must be wrapped in {}, as otherwise it becomes type hinting, ehich is only in
}                                                       // .ts files
                          //{} tells JavaScript to expect an object as the argument and unpack its properties automatically.
                          //u_name is object destructuring renaming

display_details({id:101,username:'dev_runner'});

