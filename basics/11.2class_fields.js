//Having a non-static class field is same as having a constructor parameter and setting it up as an attribute.
//Its either of two, doing both is redundant. 


//Use the constructor parameter and attribute appraoch, the one we're used to. More predictable. safeguard with default vallues for paras and
//use object destructuring-- to support keyword arguments in instance definition.











//class field is written using static keyword. This works for Class.field, but not when instance.field
//(instance.attribute returns undefined)
//1.
class Person {
    static species = "Homo Sapiens"; // class-level field/property/attribute

    constructor(name) {
        this.name = name; // Instance attribute
    }
}

const p1 = new Person("Alice");
const p2 = new Person("Bob");

// Accessed via the class itself, not the instance
console.log(Person.species); // "Homo Sapiens"
console.log(p1.species);     // undefined (instances don't inherit static properties automatically)




//2.However, if the class field doesn't have the static keyword,
//Every time you create a new instance, (new Person()), a brand-new, isolated copy of that field is created 
// for that specific instance.

//Accessed via instance.fieldName. The class itself (Person.fieldName) cannot see it.


//Writing role = "viewer"; at the top is technically optional in modern JavaScript if you are immediately assigning it 
// inside the constructor via this.name = name. Developers usually only write non-static fields at the top if they want to 
// define a default fallback value before the constructor runs

//basically,having a default fallback non-static class field, is same as 
//having the field as an attribute inside the constructor, and having a default value for it in constructor.


class User {
  role = "viewer"; 
  isOnline = false;

  constructor(username = "Guest User") {
    this.username = username;
  }
}

const user1 = new User("Alice");
const user2 = new User(); // Uses fallback default

user2.role = "admin"; 

console.log(user1.username, user1.role); // "Alice", "viewer"
console.log(user2.username, user2.role); // "Guest User", "admin"



//Diff version of the same above code:

class User {
  isOnline = false;

  constructor(username = "Guest User", role = "viewer") {
    this.username = username;
    this.role = role; // Accepts a role if passed, otherwise defaults to "viewer"
  }
}

const usser1 = new User("Alice");           // Role is omitted, defaults to "viewer"
const usser2 = new User("Bob", "admin");    // Role is explicitly passed as "admin"

console.log(usser1.username, usser1.role); // "Alice", "viewer"
console.log(usser2.username, usser2.role); // "Bob", "admin"


///////////////////////////////////////////////////////////////////////////////////////////////////




//You can choose to keep a combination of non-static class fields and def paras:

class User {
  role = "viewer"; // Non-static field acts as the default fallback

  constructor(username, role) {
    this.username = username;
    
    // If a role argument was passed, overwrite the default field value
    if (role) {
      this.role = role; 
    }
  }
}

const userr1 = new User("Alice");           // No role passed -> keeps non-static field default ("viewer")
const userr2 = new User("Bob", "admin");    // Role passed -> overwrites non-static field default ("admin")



//Why Use Both?
//Defining defaults as non-static class fields at the top of the class keeps your constructor clean and centralized. 
// It separates your "default configuration state" from the core data (like username) that must be provided every time
//  an instance is created.