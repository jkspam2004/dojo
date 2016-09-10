/* Basic: Make a function that can be used anywhere in your file and that when invoked will console.log('I am running!'); Give it the name runningLogger. */
function runningLogger() {
  console.log("I am running");
}

/* Basic: Make a function that is callable, has one parameter and multiplies the value of the parameter by 10 before returning the result. Give it the name multiplyByTen. Invoke it, passing it the argument 5.*/
function multiplyByTen(number) {
  return number * 10;
}

var multipliedByTen = multiplyByTen(5);
console.log(multipliedByTen);

/* Basic: Write two functions (stringReturnOne and stringReturnTwo) that each return a different hard-coded string */
function stringReturnOne() {
  return "One";
}

function stringReturnTwo() {
  return "Two";
}

/* Medium: Write a function named caller that has one parameter. If the argument provided to caller is a function (typeof may be useful), invoke the argument. Nothing is returned. */
function caller(param) {
  if (typeof(param) == 'function') {
    console.log("is a function");
    param(); // invoke the function
  }
}

caller(function() { console.log("function in caller") });

/* Medium: Write a function named myDoubleConsoleLog that has two parameters, if the arguments passed to the function are functions, console.log the value that each, when invoked, returns.
*/
function myDoubleConsoleLog(arg1, arg2) {
  if (typeof(arg1) == 'function') {
    console.log("return value from first function");
    console.log(arg1());
  }
  if (typeof(arg2) == 'function') {
    console.log("return value from second function");
    console.log(arg2());
  }
}
myDoubleConsoleLog(function() { return "first"; }, function() { return "second"; });


/* Hard: Write a function named caller2 that has one parameter. It console.log's the string 'starting', waits 2 seconds, and then invokes the argument if the argument is a function. (setTimeout may be useful for this one.) The function should then console.log ‘ending?’ and return “interesting”. Invoke this function by passing it myDoubleConsoleLog.
*/
function caller2(param) {
  console.log("starting");

/*
  setTimeout(function() { 
    if (typeof(param) == 'function') { param(); } 
    console.log("ending?");
    return "interesting";
  } , 2000);
*/
  setTimeout(checkIfFunction, 2000); // 2000 milliseconds

  var status = "not done";
  function checkIfFunction() {
    if (typeof(param) == 'function') { 
      param(); 
    } 
    console.log("ending?");
    status = "done";
  }
  console.log(status);
  return "interesting";

  //return ret_val;
}

//var ret_val = caller2(myDoubleConsoleLog(function() { return "third"; }, function() { return "fourth"; }));
//console.log(ret_val);

caller2(myDoubleConsoleLog(function() { return "third"; }, function() { return "fourth"; }));

//http://stackoverflow.com/questions/24928846/get-return-value-from-settimeout





