console.log("~~~~~ 1 ~~~~~");
console.log(hello1); // undefined
var hello1 = "hello";

console.log("~~~~~ 1 intepreted ~~~~~");
var hello1n; // hoisted
console.log(hello1n); // undefined
hello1n = "hello";

console.log();
console.log("~~~~~ 2 ~~~~~");
var funky2 = "hi";
test2();
function test2() {
  var funky2 = "hello";
  console.log(funky2); // hello
}
console.log("~~~~~ 2 intepreted ~~~~~");
var funky2n;
function test2n() { // function declaration is hoisted up after var declarations
  var funky2n = "hello";
  console.log(funky2n); // hello
}
funky2n = "hi";
test2n();

console.log();
console.log("~~~~~ 3 ~~~~~");
var brendan3 = "awesome";
function print3() {
  brendan3 = "super";
  console.log(brendan3);
}
console.log(brendan3); // awesome
console.log("~~~~~ 3 intepreted ~~~~~");
var brendan3n;
function print3n() {
  brendan3n = "super";
  console.log(brendan3n); // did not get called
}
brendan3n = "awesome";
console.log(brendan3n); // awesome

console.log();
console.log("~~~~~ 4 ~~~~~");
var food4 = "chicken";
console.log(food4); // chicken
eat4();
function eat4() {
  food4 = "half-chicken";  // half-chicken
  console.log(food4);
  var food4 = "gone";
}
console.log(food4); // chicken
// output: chicken, half-chicken, chicken
console.log("~~~~~ 4 intepreted ~~~~~");
var food4n;
function eat4n() {
  var food4n; // hoisted
  food4n = "half-chicken";  // half-chicken
  console.log(food4n);
  food4n = "gone";
}
food4n = "chicken";
console.log(food4n); // chicken
eat4n();
console.log(food4n); // chicken
// output: chicken, half-chicken, chicken

console.log();
console.log("~~~~~ 5 ~~~~~");
// throws error - function not defined
/*
mean5();
console.log(food5);
var mean5 = function() {
  food5 = 'chicken';
  console.log(food5);
  var food5 = 'fish';
  console.log(food5);
}
console.log(food5);
console.log("~~~~~ 5 intepreted ~~~~~");
var mean5n;
mean5n();
console.log(food5n);
mean5n = function() {
  var food5n;
  food5n = "chicken";
  console.log(food5n);
  food5n= "fish";
  console.log(food5n);
}
console.log(food5n);
*/

console.log();
console.log("~~~~~ 6 ~~~~~");
console.log(food6); // undefined
var food6 = "turkey";
mean6();
function mean6() {
  food6 = "chicken";
  console.log(food6); // chicken
  var food6 = "fish";
  console.log(food6); // fish
}
console.log(food6); // turkey 
// output: undefined, chicken, fish, turkey
console.log("~~~~~ 6 intepreted ~~~~~");
var food6n;
function mean6n() {
  var food6n;
  food6n = "chicken";
  console.log(food6n); // chicken
  food6n = "fish";
  console.log(food6n); // fish
}
console.log(food6n); // undefined
food6n = "turkey";
mean6n();
console.log(food6n); // turkey
// output: undefined, chicken, fish, turkey

console.log("~~~~~ 7 ~~~~~");
food7 = "turkey";
console.log(food7);
mean7();
function mean7() {
  food7 = "chicken";
  console.log(food7);
  var food7 = "fish";
  console.log(food7);
}
console.log(food7);
console.log("~~~~~ 7 intepreted ~~~~~");
function mean7n() {
  var food7n;
  food7n = "chicken";
  console.log(food7n); // chicken
  food7n = "fish";
  console.log(food7n); // fish
}
food7n = "turkey";
console.log(food7n); // turkey
mean7n();
console.log(food7n); // turkey
// output: turkey, chicken, fish, turkey


