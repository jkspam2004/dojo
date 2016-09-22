/*
Callback Reminder
Callbacks are just functions that are passed as an argument to another function, and invoked by the 
other function.  They can be used to control when a function runs.  
Below, toBeCalledByFunction2 won't run until after function2 is invoked.  
*/
function toBeCalledByFunction2(param){
  console.log("toBeCalledByFunction2");
  console.log(param);
}
function functionOne(){
  console.log("functionOne");
  function2(toBeCalledByFunction2);
}
function function2(callback){
  console.log("function2");
  var addition = " world";
  callback("hello" + addition);
}
functionOne();
