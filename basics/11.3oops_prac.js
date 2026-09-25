//Inheritance: sub-class as well

class Person {
    #idnumber;
    role = "member";

    constructor({ firstname = "unknown", lastname = "unknown", dob = "2000-01-01", id = "000" } = {}) {
        this.fname = firstname;
        this.lname = lastname;
        this.dob = new Date(dob);
        this.email = `${this.fname.toLowerCase()}.${this.lname.toLowerCase()}@company.com`;
        this.#idnumber = id;
    }

    get fullname() {
        return `${this.fname} ${this.lname}`;
    }

    // Safe read-only getter for private field
    get idNumber() {
        return this.#idnumber;
    }

    // Dynamic age calculation getter
    get age() {
        const diff = Date.now() - this.dob.getTime();
        return Math.abs(new Date(diff).getUTCFullYear() - 1970);
    }
}

class Employee extends Person {
    constructor({ department = "General", ...personData } = {}) {
        super(personData);
        this.role = "employee";
        this.department = department;
    }
}

const p11 = new Person({ dob: "1970-05-17", lastname: "Scott", firstname: "Brad", id: "sc01" });
const p22 = new Employee({ firstname: "Jane", lastname: "Doe", id: "fa1!68O0a", department: "Engineering" });

console.log(p11.role, p11.fullname, p11.email, `Age: ${p11.age}`, `ID: ${p11.idNumber}`);
console.log(p22.role, p22.department, p22.fullname, `ID: ${p22.idNumber}`);



//Working further with private fields(#),using getter/setter.
//getter and setter ar eoptional features, as u can access/modify a private feild by an instance method as well.
//But getter/setter is covinient due to its attribute ike use-case
//if u use getter/setter, u can choose to give getter/setter diff names, but its a good practise tpo give them same name.
//There's no deleter for private fields, use setter to modfiy value to undefined or null

class Parent {
  #secret = "Initial Secret"; // Private field

  // Getter: Behaves like a property, not a function call
  get secret() {
    return this.#secret;
  }

  // Setter: Captures assignment operator (=)
  set secret(newValue) {
    if (newValue.length < 3) {
      console.log("Too short!");
      return;
    }
    this.#secret = newValue;
  }

  // Custom Method alternative (can also act as a deleter workaround)
  clearSecret() {
    this.#secret = null; 
  }
}

const p = new Parent();

// Reading using the Getter (Notice: NO parentheses)
console.log(p.secret); // Output: Initial Secret

// Modifying using the Setter (Notice: uses standard assignment)
p.secret = "New Secret"; 
console.log(p.secret); // Output: New Secret

// Triggering validation in Setter
p.secret = "Hi";        // Output: Too short! (Value remains "New Secret")

// "Deleting" via custom method
p.clearSecret();
console.log(p.secret); // Output: null

//Dynamic access fails: You cannot access private fields using bracket notation (e.g., p[#secret]). It will look for a literal public string key
//  named "#secret".
// 
//The in operator: You can check if an object possesses a specific private field using the in keyword safely inside the 
// class context (e.g., #secret in this).