/*
Callbacks are used to delegate functionality
If a function takes a callback, that callback can do a myriad of things. This allows us to use our callback to be delegated to a specific task.
*/


function each(arr, callback) {
  // loop through the array
  for(var i = 0; i < arr.length; i++) {
    callback(arr[i]); // invoking the callback many times... delegation!
  }
}
// call the each function
each([1,2,3], function(num) { console.log(num + " I am from the callback!"); }) //so many alerts!


// This is a function that just prints the result of another list of instructions
function printResult(doSomething) {
 var result = doSomething();         // store the return value of the callback parameter
 console.log(result);                // print the result!
}
printResult(function returnFive(){ return 5 })  // this should print "5"

// Pro Tip: JavaScript allows us to pass anonymous functions (e.g. remove returnFive from above and it will still work), but when debugging, giving them a name can really help!

/*
Coding Dojo uses delegation: We have multiple bootcamp leaders who all (though they might seem like clones) have different strengths (let’s call them delegates). If Coding Dojo needed a bootcamp leader to lead a new Java Android class, the company wouldn’t just grab anyone. It rather would delegate a bootcamp leader who knows Java Android.

The code/pseudocode might look like this:
*/

function leadBootcamp(language, leader){
    var outcome = leader(language);
    console.log(outcome);
}

function Mike(language){
  var languages={
    'javascript':'successful leader',
    'PHP':'successful leader',
    'Python':'successful leader',
    'Ruby':'successful leader',
  }
  if(languages[language]){
    return languages[language];
  }
  else {
    return "maybe not yet";
  }
}

function Charlie(language){
  var languages={
    'javascript':'successful leader',
    'PHP':'successful leader',
    'Python':'successful leader',
    'Ruby':'successful leader',
  }
  if(languages[language]){
    return languages[language];
  }
  else {
    return "maybe not yet";
  }
}

function Jimmy(language){
  var languages={
    'javascript':'successful leader',
    'PHP':'successful leader',
    'Python':'successful leader',
    'Ruby':'successful leader',
    'iOS':'successful leader',
    'java_android':'successful leader',
  }
  if(languages[language]){
    return languages[language];
  }
  else {
    return "maybe not yet";
  }
}

leadBootcamp('java_android', Mike);
leadBootcamp('java_android', Charlie);
leadBootcamp('java_android', Jimmy);
