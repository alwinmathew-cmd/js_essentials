//for,while loop in js:

for(let x=0;x<=10;x++){
    console.log(`Current Iteration:${x}`)
}

let i = 0;
while(i <= 10){
    console.log(`While Loop Counter:${i}`)
    i++;
}

y = 10;
while(true){
    console.log(y);
    if (y <= 0){
        break;
    }
    y -= 1;
}
//////////////////////////////////////////////////
todos = [
    {id:1,
    task:'Go to college',
    status:true},

        {id:2,
    task:'Go shopping',
    status:false},

        {id:3,
    task:'Take out trash',
    status:true},
]
//console.log(todos[2].task)
//JSON is just a object but no single quotes , just double quotes..Even keys need to be in double quotes, and no trailing 
//comma after last key-value is allowed, while JS allows it.

//1.Simple for loop iteration for above array of objects:

for(let i=0;i<todos.length;i++){
    console.log(todos[i].task)
}



//for-of (python equivalent of--> for char in word:)

for(let todo of todos){
    console.log(todo)  //console.log(todo.id) //console.log(todo.["status"]])
}




//High-Order Array methods (forEach, map, filter)

//1 .forEach():  //array.forEach()

todos.forEach(function(todo){
    console.log(todo.task)
})

//Core Difference at a Glance- .map() vs .filter()
.map() //Transforms elements. It always returns a new array with the exact same number of items as the original.

.filter() //Selects elements. It always returns a new array with a subset of items based on a condition (resulting 
    //in an array of equal or shorter length). BUt, does not TRANSFORM elements.


//2  .map() --it returns an array; Purpose: to map selectively desired for output

const holder = todos.map(function(todo){
    return todo.id;                       //Each iteration value is entered into an array as it's element.
})
console.log(holder) //[ 'Go to college', 'Go shopping', 'Take out trash' ]



//3. .filter()  Purpose:Just filters in or out, those IN: WHOLE parent element is considered, cannot selectively pick

const val = todos.filter(function(todo){
    if (todo.status){
        return todo.status;
    }
}) 
console.log(val)




//To convert to JSON: --JSOn has only double quotes, even keys need to be as double quotes
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

const jsonString = JSON.stringify(users);
console.log(jsonString); 
// Output: '[{"id":1,"name":"Alice"},{"id":2,"name":"Bob"}]'

