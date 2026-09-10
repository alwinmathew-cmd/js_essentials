//1. For loop with multiple counters:
for(let i=0,j=5; i<=5 && j>=0; i++,j--){
    console.log(`i:${i},j:${j}`)
}

//But usually, it is commmon practise to just write one condition in middle instead of using &&
//Ex: for(let i=0,j=5; i<=5; i++,j--)

//as, if one of the condition hits stop, the loop itself is over



// 1. Standard multiple counters in a single loop
for (let i = 0, j = 10; i < 5; i++, j -= 2) {
  console.log(`i: ${i}, j: ${j}`);
}


// 2. Parallel iteration moving forward and backward
const items = ['a', 'b', 'c', 'd', 'e'];

for (let forward = 0, backward = items.length - 1; forward < backward; forward++, backward--) {
  console.log(`Comparing ${items[forward]} with ${items[backward]}`);
}


// 3. Multi-dimensional grids
for (let row = 0, col = 0; row < 3; row++, col = 0) {
  while (col < 3) {
    console.log(`Row: ${row}, Col: ${col}`);
    col++;
  }
}


// 4. Checking multiple conditions using && (AND) instead of a comma trap
for (let i = 0, j = 10; i < 5 && j > 7; i++, j--) {
  console.log(i, j); 
}


// 5. Python-like enumerate() equivalent using built-in .entries()
const fruits = ['apple', 'banana', 'cherry'];

for (const [index, fruit] of fruits.entries()) {
  console.log(index, fruit);
}


// 6. Python-like zip() equivalent using Iterator.zip()
const names = ['Alice', 'Bob', 'Charlie'];
const ages = [25, 30, 35];

for (const [name, age] of Iterator.zip([names, ages])) {
  console.log(`${name} is ${age} years old.`);
}


// 7. Fallback zip() equivalent for older environments using .map()
const zipped = names.map((name, i) => [name, ages[i]]);