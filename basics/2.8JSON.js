//JSON fprmat is how data moves IN API-requests & response
//Only 2 main JSON functions
//1) JSON.stringify() will make data ready for a JSON request,
//2) while, the request received from an APi must be converted to an object literal via JSON>parse()

// 1. Packaging Data (JSON.stringify)
// When you want to send data to a server, you must convert your standard JavaScript object into a plain JSON text string.

JavaScript
const userProfile = {
  username: "Alwin", 
  role: "admin",
  login: function() { console.log("Hello"); } // Methods are not allowed in JSON
};

// Converting JS Object -> JSON String
const jsonString = JSON.stringify(userProfile);

console.log(jsonString);
// Output: '{"username":"Alwin","role":"admin"}'
// Notice: The function was automatically stripped out, and strict double quotes were applied.


// 2. Unpacking Data (JSON.parse)
// When a server sends data back to you, it arrives as a massive string of JSON text. You cannot use dot notation (like 
//     response.username) on a text string. You must unpack it back into a live JavaScript object first.

JavaScript
// The plain text string received from an API
const apiResponse = '{"username":"Alwin","role":"admin"}';

// Converting JSON String -> JS Object
const liveObject = JSON.parse(apiResponse);

// Now it operates exactly like the OOP objects you are used to
console.log(liveObject.username); 
// Output: Alwin