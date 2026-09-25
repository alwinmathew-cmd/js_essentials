//1. Simple function with default-value parameters:    (usual ones are positional parameters, that match para & arg positions)

function get_sum(n1=5,n2=10.5){
    return Math.round(n1+n2);
}
console.log(get_sum()) //No isses even if no args in fn_call. 

//Above code with keyword arguments (keyword args arent natively supported, for that, we gotta use object destructuring)


//1.1 with keyword-args --- But this version fails to pick default values if no arguments in fucntion call
function get_sum({n1=6,n2=4}){
    console.log(n2);
    return(Math.round(n1+n2))
}
console.log(get_sum({n2:10,n1:11}))


//1.2
function get_sum({n1=6,n2=4}={}){  //This version supports fallback to def para vals if no fn_call args.
    console.log(n2);
    return(Math.round(n1+n2))
}

console.log(get_sum({n2:10,n1:11}))

//The same above function, can be written in less syntax as an arrow function:

const sum_val = (n1=5,n2=4.5) => Math.round(n1+n2);

console.log(sum_val());



//u can also have  anamless function, example in a fn, u can 

//return function(){
//   console.log("hehe")};


//u can also do this:
function greet() { //greet is a Higher Order fn here
  return function() {
    return "Hello, World!";
  };
}

let val = greet(); // `val` now holds the returned function reference

console.log(val()); // "Hello, World!" -> executes the reference

