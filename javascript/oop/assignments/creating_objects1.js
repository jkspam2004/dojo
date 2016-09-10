function VehicleConstructor(name, wheels, passengers) {
  var vehicle = {};

  vehicle.name = name;
  vehicle.wheels = wheels;
  vehicle.passengers = passengers;

  vehicle.makeNoise = function() {
    console.log("make noise");
  }

  return vehicle;
}

Bike = VehicleConstructor('bike', 2, 0);
console.log(Bike);
Bike.makeNoise = function () {
  console.log("ring ring!");
} 
Bike.makeNoise();

Sedan = VehicleConstructor('sedan', 4, 4);
Sedan.makeNoise = function () {
  console.log("Honk Honk!");
}
Sedan.makeNoise();

Bus = VehicleConstructor('sedan', 4, 4);
Bus.pickUp = function(passengers) { // method to take in number of passengers and add to passenger count
  this.passengers += passengers; 
}
Bus.pickUp(8);
console.log(Bus.passengers);

/*
 Each vehicle should have a makeNoise method
 Using the constructor, create a Bike
 Redefine the Bike’s makeNoise method to print “ring ring!”
 Create a Sedan
 Redefine the Sedan’s makeNoise method to print “Honk Honk!”
 Using the constructor, create a Bus
 Add a method to Bus that takes in the number of passengers to pick up and adds them to the passenger count
*/
