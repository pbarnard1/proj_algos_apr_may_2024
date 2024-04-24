class Phone {
    constructor(os, screenSize, model) { // "this" refers to a specific Phone (instance)
        // Creating attributes for all phones
        this.os = os;
        this.screenSize = screenSize;
        this.model = model;
    }

    // Methods (actions) that this phone can perform
    call() {
        console.log("Calling my friend!");
    }
}
// Create phones (instances of the Phone class)
let myIPhone = new Phone("MacOS", 8, "iPhone 15X");
let myAndroid = new Phone("Android", 8, "Samsung Galaxy S24+");

// Calling a method
myIPhone.call();