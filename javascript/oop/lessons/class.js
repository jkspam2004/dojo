// JS not intrinsically object oriented

// declaring object variable
var Todd = {
  name: "Todd",
  sayName: function() {
    console.log("Todd");
  }
}

Todd.sayName();

// function to be invoked
function newPerson(name) { // object constructor
  //console.log(this); // giant object from node
  return {
    name: name,
    sayName: function() {
      console.log(name);
    }
  }
}

var Jay = newPerson("Jay");
var Sara = newPerson("Sara");
Jay.sayName();
Sara.sayName();

function Person(name) {
  console.log(this);
  this.name = name;
  this.sayName = function() {
    console.log(name);
  }
}

var Jimmy = new Person("Jimmy");
Jimmy.sayName();

