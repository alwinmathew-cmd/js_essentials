//Set is equivalent of Python Set, except resembles an Array

// 1. Sets (The Uniqueness Filter)
// Think of a Set as an Array with one strict rule: No duplicates allowed. If you try to add a value that already exists,
//  the Set simply ignores it.

// Industry Use Case: Removing Duplicates
// The most common real-world use of a Set is instantly stripping duplicate values out of an existing array without writing
// complex for loops or if statements.

 
// A standard array with duplicate tags
const rawTags = ["javascript", "oops", "javascript", "closures", "oops"];

// 1.1) Passing the array into a Set instantly removes duplicates
const uniqueTagsSet = new Set(rawTags); 
console.log(uniqueTagsSet); // Output: Set(3) { 'javascript', 'oops', 'closures' }

// 1.2) We use the spread operator (...) to turn it back into a clean array
const cleanTagsArray = [...uniqueTagsSet];
console.log(cleanTagsArray); // Output: [ 'javascript', 'oops', 'closures' ]

/////////////////////////////////////////////////////////////////////////////////////////////////



// 2. Maps (The Upgraded Object)
// A Map is a key-value store, just like a standard JavaScript Object. However, standard Objects have a major limitation: 
// their keys must be strings (or symbols). If you try to use a number or an object as a key, JavaScript forces it 
// into a string.

// A Map allows anything to be a key—even other objects or class instances. It also natively tracks its own .size and 
// guarantees the order of your data.

// Industry Use Case: Attaching Metadata
// Imagine you fetch user objects from a database and want to attach temporary session data (like "isOnline") to them without
// permanently modifying the original user object.


const userAlwin = { id: 101, name: "Alwin" };
const userGuest = { id: 999, name: "Guest" };

// Create a new Map
const userSessionData = new Map();

// Using the actual objects as keys (Standard objects cannot do this!)
userSessionData.set(userAlwin, { isOnline: true, lastSeen: "10 mins ago" });
userSessionData.set(userGuest, { isOnline: false, lastSeen: "1 day ago" });

// Retrieving data using the object reference
console.log(userSessionData.get(userAlwin).isOnline); // Output: true

// Maps easily tell you how many items they hold
console.log(userSessionData.size); // Output: 2



// When you use .set(userAlwin, { isOnline: true }), the Map registers the actual object reference as the key and 
// the object literal { isOnline: true } as the attached value.

// Since the Map acts as a vault holding multiple unique entries, you must provide the exact key to .get(userAlwin) to pull 
// that specific value back out. The moment .get() hands you that value object, you can immediately chain standard 
// dot notation—like .isOnline—to read its internal data.