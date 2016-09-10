function VehicleConstructor(name, wheels, passengers, speed) {
  //private
  var self = this;
  var distance_travelled = 0;
  var updateDistanceTravelled = function() {
    distance_travelled += self.speed;
  }

  //public
  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed;

  this.move = function() {
    console.log("I am a", self.name);
    updateDistanceTravelled();
    self.makeNoise();
  }

  this.makeNoise = function() {
    console.log("make noise");
  }

  this.checkMiles = function() {
    console.log(distance_travelled);
  }

}

Bike = new VehicleConstructor('bike', 2, 0, 5);
Bike.makeNoise = function () {
  console.log("ring ring!");
} 
Bike.move();
Bike.checkMiles();

Sedan = new VehicleConstructor('sedan', 4, 4, 60);
Sedan.makeNoise = function () {
  console.log("Honk Honk!");
}
Sedan.move();
Sedan.move();
Sedan.checkMiles();

Bus = new VehicleConstructor('bus', 4, 10, 40);
Bus.pickUpPassengers = function(passengers) { // method to take in number of passengers and add to passenger count
  this.passengers += passengers; 
}
Bus.pickUpPassengers(8);
console.log(Bus.passengers);
Bus.move();
Bus.checkMiles();

/*
 Each vehicle should have a makeNoise method
 Using the constructor, create a Bike
 Redefine the Bike’s makeNoise method to print “ring ring!”
 Create a Sedan
 Redefine the Sedan’s makeNoise method to print “Honk Honk!”
 Using the constructor, create a Bus
 Add a method to Bus that takes in the number of passengers to pick up and adds them to the passenger count
*/
