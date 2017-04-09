/* function.js */

import logger from "./logger";

/* default parameter. set default parameter in the input */
function hello(name="oscar") { 
    logger.debug(name);
}
hello(); // oscar
hello("goose"); // goose

/*  spread parameters: pass in optional parameters, becomes an array  */
function spreadExample(...spread) { 
    logger.debug(spread);
    spread.forEach(function(value) {
       //logger.warn(value);
    }); 
}
spreadExample(1,2,3,4);
spreadExample(31,1);

/* arrow function: anonymous function: (e) => { statements }. e is an input parameter to the function. don't need paren if one input */
function parentFunction(name, language){
    this.name = name;
    //this.language = language;
    //var childFunction = e => { console.log(this.name); console.log(this.language); }
    var childFunction = lang => { console.log(this.name); console.log(lang); }
    return childFunction(language);
}
let x = new parentFunction("oscar", "javascript"); //Output: oscar, javascript

let arr = [1, 3, 4, 6, 7];
arr = arr.map(v => v * 2);
console.log(arr);


