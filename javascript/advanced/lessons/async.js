/* JavaScript runs synchronously: After the interpreter hoists variables and functions to the top 
of their scope, JavaScript runs code-block by code-block (which as a general rule can be thought 
of as line-by-line). This little tab is going to show us how to get out of that synchronous cycle. 
(This is how that event-loop can set-up a queue of events in Node). It also allows us to run code 
that might take a bit of time to run, without completely stalling our program (AJAX calls to APIs), 
DB queries etc.
*/

//simulated really slow DB call.
function getStuffFromDatabase(callback){
  var data;
  var myTimer = setTimeout(function(){
    if (typeof(callback) == 'function'){
      data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
      callback(data); // invoke the callback function
    }
  }, 10000);
  return data;
}    
// ************CHANGES HERE **************
function requestDataFromDatabase(){

  var data = getStuffFromDatabase(function myCallback(data){ // ooh shiny callback!.. when is it invoked???
    console.log(data, "ASynchronous");
    for (var i = 0; i < data.length; i ++){
      console.log(data[i].name);
    }
  });
  console.log(data, "Synchronous");  // data is undefined in the beginning


}
//***************** END CHANGES **********************
function catchFly(){
  console.log('I just caught a fly!');
}

requestDataFromDatabase();
// keep running my program!
console.log('Hello');
catchFly();
//etc.


/* code just hangs. first console.log returns undefined for console.log(data)

//simulated really slow DB call.
function getStuffFromDatabase(callback){
  var data;
  var myTimer = setInterval(function(){
    if (typeof(callback) == 'function'){
      //it just got back from the DB!
      data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
      callback(data);
    }
  }, 10000);
  // it takes 10 seconds to get anything back <- you should fix your cloud server.!!!
  return data;
}    
//simulated request (failing);
function requestDataFromDatabase(){
  var data = getStuffFromDatabase(); // this should return my data right??
  console.log(data);
}
function catchFly(){
  console.log('I just caught a fly!');
}


requestDataFromDatabase();
// keep running my program!
console.log('Hello');
catchFly();
//etc.

*/
