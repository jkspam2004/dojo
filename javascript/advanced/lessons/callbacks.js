/* Callbacks : a function passed as an argument to another function
   callbacks are used to establish an order to the instructions
   asynchronous code: divide code into portions to run now and later
  
*/


console.log("NOW: ");
console.log("Declaring and assigning variable 'ninja'.");
var ninja = 'Libby';

setTimeout( function myCallbackFunction(){
  console.log("LATER: ")
  console.log(ninja, "LATER"); }, 2000
);

console.log("Printing ninja value.");
console.log(ninja, "NOW");


// synchronous code
var a = 2;
var b = function() { console.log("something"); };

function doSomething(x) {
  console.log(typeof(x));
}

doSomething(a);
doSomething(b);


function doSomething2(possibleCallback) {
  if (typeof(possibleCallback) === 'function'){
    console.log('possibleCallback is a callback!');
    possibleCallback(); //we can invoke the callback!
  }
  else {
    console.log('possibleCallback: ', possibleCallback, ' is not a callback function.');
  }
}
doSomething2(function myCallback(){ console.log('yes, I am a callback!') });
doSomething2('string');

/*
Callbacks, especially those linked to Ajax requests, can help us create a more seamless user experience on a webpage, because we can send and receive data and update the DOM without needing to refresh the page.
*/

console.log("\nmaking pasta\n");

function makePasta(pasta, makeSauce) {
  console.log("Boiling water");
  console.log("Putting " + pasta + " pasta in the water");
  // create a variable for sauce!
  var sauce = makeSauce();          // invoke makeSauce, our callback
  console.log("Mixing sauce");
  console.log("Pasta is done!");
  return pasta + " Pasta with " + sauce + " sauce! Voila!";
}
function makePesto() {
  console.log("Making Pesto");
  return "pesto";
}
function makeAlfredo() {
  console.log("Making Alfredo");
  return "alfredo";
}


// we pass the whole makePesto recipe to makePasta!
console.log(makePasta("Penne", makePesto));


// notice lack of parentheses after makeAlfredo.
// Remember: we want to pass the function, not execute it and pass a return value.
console.log(makePasta("Farfalle", makeAlfredo));

/***** end make pasta *****/

/*
A couple of things to note:

When we pass the function as an argument into the makePasta function call, we don’t put parenthesis 
after “makePesto,” because we actually want to pass the function definition, or the list of 
instructions, rather than execute the function (which would just pass whatever the function 
returns).
*/
