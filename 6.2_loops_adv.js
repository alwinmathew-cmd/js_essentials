//1. For loop with multiple counters:
for(let i=0,j=5; i<=5 && j>=0; i++,j--){
    console.log(`i:${i},j:${j}`)
}

//But usually, it is commmon practise to just write one condition in middle instead of using &&
//Ex: for(let i=0,j=5; i<=5; i++,j--)

//as, if one of the condition hits stop, the loop itself is over

