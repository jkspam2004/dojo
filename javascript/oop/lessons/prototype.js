var MyObjConstructor = function(name){
  var myPrivateVar = "Hello"; // just to show that it is hard to see this private var easily
  this.name = name; // but you can see the name!
  this.method = function(){
    console.log( "I am a method");
  };
}
var obj1 = new MyObjConstructor('object1');
var obj2 = new MyObjConstructor('object2');
console.log(obj1);

obj1.newProperty = "newProperty!";
obj1.__proto__.anotherProperty = "anotherProperty!";
console.log(obj1.anotherProperty); // anotherProperty!
console.log(obj1.newProperty); // newProperty!
// What about obj2?
console.log(obj2.newProperty); // undefined
console.log(obj2.anotherProperty); // anotherProperty! <= THIS IS THE COOL PART!

/*
Very cool! While, expectedly, the line obj1.newProperty = 'newProperty!' gave obj1 a new property that obj2 couldn't access, the code obj1.__proto__.anotherProperty = 'anotherProperty!' can be accessed by both obj1 and obj2.

That's because they both share a prototype object, since they're both instances of MyObjConstructor. That's how JavaScript does inheritance! Meanwhile, what about that other __proto__ inside the first one? That's for all objects! If you add things to it, those properties or methods can be accessed/invoked via all the objects in your program!

Every object constructor creates a second memory space for all objects created by that constructor that is accessed by proto. It is one memory space, so any changes there affect every object spit out by that constructor.
*/

/*
Major PROS of Prototype

One memory space for all! If you are creating lots of the same object and use prototype, it can save you significant memory
Great for general methods for objects
We can access prototype methods with just using .method or .property.
The interpreter will go through all prototypes in the prototype chain to check if any of them have the called method or property before giving up (it'll return/use the first match it finds).
Major CONS of Prototype

Methods generated in prototype cannot access the private variables inside the constructor function
Lots of prototypes can be hard to read
The way we added prototypes above, however, is really bad practice. Here's the right way:
*/

// After we create our MyObjConstructor:
MyObjConstructor.prototype.methodName = function(){
  //do stuff here!
}

function Cat( cat_name ) {
  var name = cat_name;
  this.getName = function() {
    return name;
  };
}
//adding a method to the cat prototype
Cat.prototype.sayHi = function(){
  console.log('meow');
};
//adding properties to the cat prototype
Cat.prototype.numLegs = 4;
var muffin = new Cat('muffin');
var biscuit = new Cat('biscuit');
console.log(muffin, biscuit);
//we access prototype properties the same way as we would access 'own' properties
muffin.sayHi();
biscuit.sayHi();
console.log(muffin.numLegs);
// poor mutant cats: muffin.__proto__.numLegs ++;
// doing this to muffin will mess up all the cats!
