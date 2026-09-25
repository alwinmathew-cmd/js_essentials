/*
 * PROMISES & ASYNC/AWAIT FROM SCRATCH
 */

// 1. CREATING A PROMISE (The Slow Background Task)
// We wrap a slow task (like a database call) inside a new Promise.
// It gives us two tools:
// - resolve(): Call this to return the successful data.
// - reject(): Call this to throw an error if something breaks.

function fetchDatabaseUser() {
  return new Promise((resolve, reject) => {
    
    // setTimeout simulates a 2-second delay communicating with a database
    setTimeout(() => {
      const isSuccessful = true; // Change to false to see the error block run
      
      if (isSuccessful) {
        // Success! We hand the data back to the caller.
        resolve({ id: 101, username: "Alwin" }); 
      } else {
        // Failure! We throw an error.
        reject("Server Error: Could not connect to database.");
      }
    }, 2000); 

  });
}

// 2. ASYNC / AWAIT (Consuming the Promise)
// To force JavaScript to pause and wait for a Promise, you must 
// label the function as 'async'. Then, you place 'await' before the slow task.

async function loadUser() {
  try {
    console.log("1. Request sent to database...");
    
    // The code execution freezes on this exact line for 2 seconds.
    // It waits for fetchDatabaseUser() to call resolve().
    const user = await fetchDatabaseUser(); 
    
    // This line ONLY runs after the Promise finishes.
    console.log(`2. Success! Welcome back, ${user.username}.`); 
    
  } catch (error) {
    // If the Promise calls reject(), execution immediately jumps here.
    console.log(`Error caught: ${error}`);
  }
}

// Execute our function
loadUser();


/*
 * 3. REAL-WORLD USAGE (The Fetch API)
 * You will rarely write "new Promise()" yourself. Built-in tools like 'fetch' 
 * automatically create and return a Promise for you. Your only job is to 'await' it.
 */

async function getExternalData() {
  // fetch() automatically returns a Promise. We just await it.
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  
  // Extracting JSON from a response also takes time, so it returns another Promise.
  const data = await response.json();
  
  console.log("3. Real Data Fetched:", data.title);
}

// Execute the real-world fetch
getExternalData();