//if-else if-else

let score = 75;

if (score >= 90){
    console.log("Grade A")
}
else if (score >= 65){
    console.log("Grade B")
}
else{
    console.log("Grade C")
}



//Other Ways to Write Conditionals in JavaScript:

//Ternary Operator (? :): A compact, one-line version of an if...else statement
let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";




//switch statements:

let trafficLight = "yellow";

switch (trafficLight) {
  case "red":
    console.log("Stop!");
    break;
    
  case "yellow":
    console.log("Slow down!");
    break; // 💡 The code stops here and exits the switch
    
  case "green":
    console.log("Go!");
    break;
    
  default:
    console.log("Unknown light color.");
}

//break and continue only work in loops