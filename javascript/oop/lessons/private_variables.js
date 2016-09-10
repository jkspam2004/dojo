function Ninja(name, age, prevOccupation) {
  // PRIVATE
  var privateVar = "This is a private variable";
  var privateMethod = function() {
    console.log("this is a private method");
  }
  // PUBLIC
  this.name = name;              
  this.age = age;
  this.prevOccupation = prevOccupation
  this.introduce = function() {   
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
    privateMethod(); // this works since it is a scope that can access privateMethod!
    console.log(privateVar);      // this works too!
  }
}

var Pariece = new Ninja("Pariece", 24, "TFA Teacher");
// try this:
//Pariece.privateMethod(); // TypeError: Pariece.privateMethod is not a function
// or this:
//privateMethod(); // ReferenceError: privateMethod is not defined
// or this:        
console.log(Pariece.privateVar); // undefined
// none of these work. Think about the scope of each.


/*
Private variables can be useful to protect your objects from being altered in unintended ways. For example, say objects built with a User constructor function have a social security number, which you definitely don't want your program to alter. You might make it private:
*/
function User(name, ssn){
  var social = ssn;
  this.name = name;
  // Adds a so-called 'getter' function to allow reading private variables
  this.getSSN = function(){
    return social;
  }
}

var mike = new User('Mike', 274164398);
console.log(mike.getSSN()); // 274164398

/*
But what we have is a bit lame. Sure, we can't change the data, but we can't view the data either! Luckily, we can create a public method that lets your program read the information without ever being able to change it! Accessing a variable instantiated in the User function even well after the User function finished running is taking advantage of something called closure, which we'll talk about later.
*/
