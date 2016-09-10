/* function hoisting */

/* original standalone function
awesome();
function awesome() {
  console.log("too good to be true");
}
*/

// hoisted below - JS rearranges your code before running it
function awesome() {     // the function floated to the top!
  console.log("too good to be true");
}
awesome();               // so now awesome is defined before we invoke it!


/* below will throw an error at the function call varFunction() */
varFunction();   // varFunction is not a function       
var varFunction = function() {
  console.log("How will this get hoisted?")
}


// HOW THE JS INTERPRETER REARRANGES THE CODE
var varFunction;           // the variable declaration gets hoisted to the top
varFunction();             // this tries to invoke "undefined": we get "undefined is not a function"
varFunction = function() {
  console.log("How will this get hoisted?")
}
