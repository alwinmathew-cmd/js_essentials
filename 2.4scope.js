//only a fn scope can truly restrict  a var scope within itself 
function testScope() {
  var trappedVar = "I am trapped in the function"; 

  if (true) {
    var leakyVar = "I escaped the if block!";
    let safeLet = "I am securely trapped in the if block";
  }

  console.log(leakyVar); // Prints successfully
  // console.log(safeLet); // Error: safeLet is not defined
}
testScope();
// console.log(trappedVar); // Error: trappedVar is not defined (the function scope protected it)

//var is global scope, so it always escapes any block-scope its in, can be used globally, can be reinitialized and even redeclared,
//causes unintentional errors, hence try to avoid--only a function scoped var can be restrained.

//In above ex,var was in an if{} scope within a fn, it managed to escape if{}, but was constrained within function-scope!!!


//let and const can be even redcl and reinitialized if they re in diff block scopes

//for/while/if/fn - all have their own locl scope.