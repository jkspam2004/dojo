// callback assignment 

var _ = {
   // map: Produces a new array of values by mapping each value in list through a transformation function
   map: function(list, callback) {
     newlist = [];
     if (list instanceof Array) {
       for (var i = 0; i < list.length; i++) { // for every element in list
         newlist.push(callback(list[i]));      // perform what is in callback
       }                                       // and push result to newlist
     } else if (list instanceof Object) { // associative array
       for (var key in list) {
         newlist.push(callback(list[key], key));
       }
     }
     return newlist;
   },
   // reduce: Boils down a list of values into a single value
   reduce: function(list, callback) {
     var memo = 0;
     for (var i = 0; i < list.length; i++) {
       memo = callback(memo, list[i]);
     } 
     return memo;
   },
   // find: Looks through each value in the list, returning the first one that passes a truth test 
   find: function(list, callback) {
     for (var i = 0; i < list.length; i++) {
       if (callback([list[i]])) {
         return list[i];
       }
     } 
   },
   // filter: Looks through each value in the list, returning an array of all the values that pass a truth test
   filter: function(list, callback) {
     newlist = [];
     for (var i = 0; i < list.length; i++) {
       if (callback(list[i])) {  // check return value from callback
         newlist.push(list[i]);  // push value to newlist if return from callback is true
       } 
     }
     return newlist;
   },
   // reject: Returns the values in list without the elements that the truth test (predicate) passes. 
   reject: function(list, callback) {
     newlist = [];
     for (var i = 0; i < list.length; i++) {
       if (!callback(list[i])) {
         newlist.push(list[i]);
       }
     }
     return newlist;
   }
 }
// you just created a library with 5 methods!


var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log("filter results: ", evens); // if things are working right, this will return [2,4,6].

var map_arr = _.map([1, 2, 3], function(num){ return num * 3; });
console.log("map_arr: ", map_arr);
// => [3, 6, 9]
var map_hash = _.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
console.log("map_hash: ", map_hash);
//=> [3, 6, 9]

var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log("reduce: ", sum);
//=> 6

var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log("find even: ", even);
//=> 2

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log("reject, keep odds:", odds);
//=> [1, 3, 5]

// You pass data to a callback with a parameter and you pass data from the callback back to the parent function with a return.
