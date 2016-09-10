
// Vehicle constructor
function Vehicle(name, wheels, passengers, speed) {
  //private
  var distance_travelled = 0;

  //public
  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed;

  // setter method for private attribute distance_travelled
  this.updateDistanceTravelled = function() {
    distance_travelled += this.speed;
  }
  // getter for private attribute distance_travelled
  this.showMiles = function() {
    return distance_travelled;
  }
}

Vehicle.prototype.move = function() {
  console.log("I am a", this.name);
  this.updateDistanceTravelled();
  this.makeNoise();
}

Vehicle.prototype.makeNoise = function() {
  console.log("make noise");
}

Vehicle.prototype.checkMiles = function() {
  var distance_travelled = this.showMiles();
  console.log(distance_travelled);
}

// generate a random 17 digit vin number
// Math.random returns random number between 0 and 1 
// Math.floor will return numbers between 0 and 9 
Vehicle.prototype.getVin = function() {
  var x=0;
  var vin = '';

  while( x < 17 ) { 
    vin += Math.floor(Math.random()*10); 
    x++;
  }
  console.log("vin", vin);
  return vin;
}


Bike = new Vehicle('bike', 2, 0, 5);
Bike.makeNoise = function () {
  console.log("ring ring!");
} 
Bike.move();
Bike.checkMiles();
Bike.getVin();

Sedan = new Vehicle('sedan', 4, 4, 60);
Sedan.makeNoise = function () {
  console.log("Honk Honk!");
}
Sedan.move();
Sedan.move();
Sedan.checkMiles();

Bus = new Vehicle('bus', 4, 10, 40);
Bus.pickUpPassengers = function(passengers) { // method to take in number of passengers and add to passenger count
  this.passengers += passengers; 
}
Bus.pickUpPassengers(8);
console.log(Bus.passengers);
Bus.move();
Bus.checkMiles();

/* Part 1
 Each vehicle should have a makeNoise method
 Using the constructor, create a Bike
 Redefine the Bike’s makeNoise method to print “ring ring!”
 Create a Sedan
 Redefine the Sedan’s makeNoise method to print “Honk Honk!”
 Using the constructor, create a Bus
 Add a method to Bus that takes in the number of passengers to pick up and adds them to the passenger count
*/

/* Part 2
 Have the Vehicle constructor also take in a “speed”
 Store the speed as an attribute
 Create a private variable called distance_travelled that starts at 0
 Create a private method called updateDistanceTravelled that increments distance travelled by speed
 Add a method to the Vehicle called “move” that calls updateDistanceTravelled and then makeNoise
 Add a method called checkMiles that console.logs the distance_travelled
*/

/* Part 3
 Now modify your code to use Prototype and the recommended way of OOP we showed in the previous chapter.
 You may have to change some private variables/methods to attributes to make all of the functionality work.
*/


