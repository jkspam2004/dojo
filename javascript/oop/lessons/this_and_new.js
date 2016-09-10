
/* previous constructor style

function NinjaConstructor(name, prevOccupation) {
  var ninja = {}; // <-- PAY ATTENTION TO THIS LINE!
  ninja.name = name;
  ninja.prevOccupation = prevOccupation
  ninja.introduce = function() {
    console.log("Hi my name is " + ninja.name + ". I used to be a " + ninja.prevOccupation + " and now I'm a Ninja!");
  }
  return ninja; // <-- AND THIS LINE!
}

*/

function NinjaConstructor(name, prevOccupation) {
  //var this = {}; // <-- PAY ATTENTION TO THIS LINE!
  //console.log(this);
  this.name = name;
  this.prevOccupation = prevOccupation
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
  }
  //return this; // <-- AND THIS LINE!
}
var dylan = new NinjaConstructor('Dylan', 'Construction Worker');
console.log(dylan.name);
//var nikki = NinjaConstructor('Nikki','Historian');
//console.log(nikki.name); // cannot read property 'name' of undefined


/* The new keyword creates the object “this” inside of our function and then returns it so that we can use it to create an object! Now we don’t need to put var this = {} or return this in our constructor!
*/

function NinjaConstructor2(name, prevOccupation) {
  if (!(this instanceof NinjaConstructor2)) {
    // the constructor was called without "new".
    return new NinjaConstructor2(name, prevOccupation);
  }

  //console.log(this);
  this.name = name;
  this.prevOccupation = prevOccupation
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
  }
}
var nikki = NinjaConstructor2('Nikki','Historian');
console.log(nikki.name);
