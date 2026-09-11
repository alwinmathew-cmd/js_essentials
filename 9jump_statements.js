//Help alter control-flow of program

//break,continue,return are some examples we know

//1.return:
function give_sum(a,b){
    return a+b;
}


//2.throw: //custom exception handling /  "Custom Error Handling"
//Interrupts normal control flow to throw a user-defined exception (an error). When encountered, JavaScript stops execution
//  of the current function and looks upward for a matching exception handler (catch block).

function checkAge(age) {
  if (age < 18) {
    throw new Error("Access denied: Must be at least 18.");
  }
  return "Access granted.";
}


//3. try...catch...finally  (finally is optional and runs anyways)  //exception handling, or more like "Error Handling" in JS

let db = openConnection();
try {
  db.query("SELECT * FROM users");
} catch (error) {
  console.error("Query failed:", error.message);
} finally {
  db.close(); // Always runs
}


//catch block in js can only handle one variable, which is taken as error, whihcwill catch all types.


//More practical version of exception handliing handling multiple types of exceptions:
function processUserProfile(apiResponse) {
  try {
    // 1. Can trigger TypeError: if apiResponse is null or undefined
    let username = apiResponse.name; 

    // 2. Can trigger RangeError: if setting an impossible age limit
    let age = apiResponse.age;
    if (age < 0 || age > 150) {
      throw new RangeError("Age must be between 0 and 150.");
    }

    // 3. Can trigger ReferenceError: logger is a typo, it doesn't exist
    logToServer(`Successfully processed user: ${username}`); 

  } catch (error) {
    // Gracefully handle each specific exception type
    if (error instanceof TypeError) {
      console.warn("⚠️ Data Error: API response was empty or malformed. Using anonymous profile.");
      
    } else if (error instanceof RangeError) {
      console.warn(`⚠️ Validation Error: ${error.message} Setting age to default (18).`);
      
    } else if (error instanceof ReferenceError) {
      console.error("🚨 System Error: Internal logging service is broken. Notifying DevOps.");
      
    } else {
      console.error("🔥 Unknown Error occurred:", error.message);
      throw error; // Rethrow if we don't know how to handle it
    }
  }
}

// --- Test cases to see it in action ---
console.log("--- Test 1: Triggering TypeError ---");
processUserProfile(null); 

console.log("\n--- Test 2: Triggering RangeError ---");
processUserProfile({ name: "Alex", age: 999 }); 

console.log("\n--- Test 3: Triggering ReferenceError ---");
processUserProfile({ name: "Sam", age: 25 }); 
