//Just like private fields (#balance) store hidden data, private methods (#helper()) store hidden logic. They are internal 
// helper functions that can only be called from inside the class using this.#methodName()
//this.#pvt_method(paras) --- we can in this way,invoke this private method in any public/private method.

class Engine {
  // 1. Private method
  #checkFuel() {
    return true;
  }

  // 2. Private method calling another private method
  #ignite() {
    if (this.#checkFuel()) { 
      return "Engine started.";
    }
  }

  // 3. Public method calling a private method
  startCar() {
    return this.#ignite(); 
  }
}

const myCar = new Engine();
console.log(myCar.startCar()); // Output: "Engine started."


/////////////////////////////////////////////////////////////////////////


class ShoppingCart {
  constructor(cartSubtotal) {
    this.cartSubtotal = cartSubtotal;
  }

  // Private Method: Hidden math logic
  #calculateTax() {
    return this.cartSubtotal * 0.18; // 18% GST calculation
  }

  // Public Method: The clean interface for the checkout button
  getFinalTotal() {
    const taxAmount = this.#calculateTax();
    const finalAmount = this.cartSubtotal + taxAmount;
    
    return `Please pay: ₹${finalAmount}`;
  }
}

const myCart = new ShoppingCart(1000);

// The consumer just asks for the total
console.log(myCart.getFinalTotal()); // Output: "Please pay: ₹1180"

// The consumer cannot manually trigger the tax math
// myCart.#calculateTax(); // Error!

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


class BankCard {
  // 1. Private Method: Internal helper logic
  #validatePIN(enteredPin) {
    return enteredPin === "1234";
  }

  // 2. Public Method: Exposed interface
  withdraw(enteredPin, amount) {
    // Calling the private method internally
    if (this.#validatePIN(enteredPin)) {
      return `Dispensing ₹${amount}`;
    }
    return "Incorrect PIN!";
  }
}

const myCard = new BankCard();

// Public call works fine
console.log(myCard.withdraw("1234", 500)); // "Dispensing ₹500"

// Calling private method directly from outside throws a SyntaxError
// myCard.#validatePIN("1234");


// Key takeaways:

// #methodName() { ... } defines the private function at the class level.

// this.#methodName() executes it from within any class method.

// Outside code cannot invoke myCard.#methodName().