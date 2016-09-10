/* callback */

function x() {
  return "output";
}

function y(cb) { // pass cb function in by reference
  console.log("typeof cb is:", typeof(cb));
  cb();          // invoke the callback function
}

//console.log(y(x())); // error: cb is not a function

console.log(y(x)); // undefined

function z(cb) {
  return cb();
}


//console.log(z(x)); // output
console.log(z(function() { console.log("something"); return "abc"; } ) ); // output
