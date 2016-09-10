/* example problem */
console.log("~~~~ example ~~~~~");
var hello = "interesting";
function example() {
  var hello = "hi!";
  console.log(hello);
}
example();
console.log(hello);

/* example answer */
//declarations get hoisted
console.log("~~~~ example answer ~~~~");
var hello;                 
function example() {       
  var hello;               
  hello = "hi";            
  console.log(hello)       
}
//assignments and invocation maintain order
hello = "interesting";     
example();                        
console.log(hello);

/* problem 1 */
console.log("~~~~ problem 1 ~~~~");
console.log(first_variable); // undefined
var first_variable = "Yipee I was first!";
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable)
}
console.log(first_variable); // Yipee I was first!

/* problem 1 answer */
console.log("~~~~ problem 1 answer ~~~~");
var first_variable2;
function firstFunc2() {
  first_variable2 = "Not anymore!!!";
  console.log(first_variable2)
}
console.log(first_variable2); // undefined
first_variable2 = "Yipee I was first!";
console.log(first_variable2); // Yipee I was first!
// output: undefined, Yipee I was first! 


/* problem 2 */
console.log("~~~~ problem 2 ~~~~");
var food = "Chicken";
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";       // CAREFUL!
  console.log(food);
}
eat();
console.log(food);

/* problem 2 answer */
console.log("~~~~ problem 2 answer ~~~~");
var food2;
function eat2() {
  var food2;
  food2 = "half-chicken";
  console.log(food2); // half-chicken
  food2 = "gone";      
  console.log(food2); // gone
}
food2 = "Chicken";
eat2();
console.log(food2); // Chicken
// output: half-chicken, gone, Chicken


/* problem 3 */
console.log("~~~~ problem 3 ~~~~");
var new_word = "NEW!";
function lastFunc() {
  new_word = "old";
}
console.log(new_word);

/* problem 3 answer */
console.log("~~~~ problem 3 answer ~~~~");
var new_word2;
function lastFunc2() {
  new_word2 = "old";
}
new_word2 = "NEW!";
console.log(new_word2); // New!
// output: New!

