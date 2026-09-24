//Private fields (#): Locked down completely. They can only be read or written to from inside the exact class where they were defined. Child classes or 
// outside code cannot see or change them -- can be instance field(non-static) or static. 

//The private field(#) name u mention as a non-static class field (non-static preferred)
// that name must exactly match the name of the attribute in constructor.



//Simple class, with constructor function
//add-ons: object(dict) destructuring done for constructor paras and for fn_call, to support keyword args
//1.

class Person{
    constructor({firstname="unknown",lastname="unknown",dob="2000-1-1"}={}){
        this.fname = firstname;
        this.lname = lastname;
        this.dob = new Date(dob);
    }

    get_fullname(){
        return `${this.fname},${this.lname}`
    }
}

const person1 = new Person({dob:'1990-12-07',lastname:'Smith',firstname:'Mary'});

console.log(person1)
console.log(person1.fname)
console.log(person1.get_fullname())


//2.Encapuslation(bundling of methods & attributes,such that methods on an instance can be called just like a property/attri)
// Private attributes
//getter used, see get fullname() method:

class Person {
    #idNumber; // Private field (cannot be accessed outside the class)
//private fields must be explicitly declared at the class body level before you can use them with this.# inside the constructor. If you omit that top declaration, writing this.#idNumber = id inside the constructor will throw a SyntaxError.
    constructor({firstname = "unknown", lastname = "unknown", dob = "2000-01-01", id = "000"} = {}) {
        this.fname = firstname;
        this.lname = lastname;
        this.dob = new Date(dob);
        this.#idNumber = id; 
    }

    // Getter: accessed like a property (person1.fullName), not a method call
    get fullName() {
        return `${this.fname} ${this.lname}`;
    }

    // Static Method: called on the class itself, not an instance
    static isAdult(person) {
        const age = new Date().getFullYear() - person.dob.getFullYear();
        return age >= 18;
    }
}

const person2 = new Person({firstname: 'Mary', lastname: 'Smith', dob: '1990-12-07'});
console.log(person2.fullName); // Notice: no parentheses!
console.log(Person.isAdult(person2)); // true