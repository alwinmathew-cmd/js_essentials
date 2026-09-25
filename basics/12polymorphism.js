// Base class defining the standard contract
class PaymentProcessor {
  processPayment(amount) {
    // In JS, throwing an error mimics an "abstract" method that MUST be overridden
    throw new Error("processPayment() must be implemented by subclasses"); 
  }
}

// Subclass 1
class CreditCardProcessor extends PaymentProcessor {
  processPayment(amount) {
    return `Connecting to bank... Processing ₹${amount} via Credit Card.`;
  }
}

// Subclass 2
class UPIProcessor extends PaymentProcessor {
  processPayment(amount) {
    return `Opening UPI app prompt... Processing ₹${amount} via UPI.`;
  }
}

// The core checkout system doesn't care which processor it receives
function checkout(processor, cartTotal) {
  // Same method name, different underlying behavior
  console.log(processor.processPayment(cartTotal)); //prinst result of an instance method, although methds are same, a diff method
}                                                      //is invoked, depedning on class of the instance invoived.

const myCard = new CreditCardProcessor();
const myUPI = new UPIProcessor();

checkout(myCard, 2500); 
checkout(myUPI, 500);