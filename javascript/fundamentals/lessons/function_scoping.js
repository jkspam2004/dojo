foo = 'hello'
console.log(foo); // hello

myfoo();
function myfoo() {
  foo = 'banana'; 
  console.log(foo); // banana
}

console.log(foo); // banana

/*
  Summary:
  Each function has access to all the variables in its parent functions.
  No function has access to the variables in its child functions.
  You can think of the whole .js file as an outer function when thinking about scope.
*/


function addNumbers(a,b) {
  var sum = a + b;
  return sum;
}
//console.log(sum);  // error. variable sum is undefined

// addNumber scope
// available variables: sum
// global scope
