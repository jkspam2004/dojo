"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* cleanMyCode.js.  convert given ES5 code to ES6 */

/* Modify below into a class
 * function User(name){
 *     this.name = name;
 *     this.printName = function(){
 *         console.log(this.name);
 *     }
 *     this.printName();
 * }
*/
var User = function () {
    function User(name) {
        _classCallCheck(this, User);

        this.name = name;
        this.printName();
    }

    _createClass(User, [{
        key: "printName",
        value: function printName() {
            console.log(this.name);
        }
    }]);

    return User;
}();

var newuser = new User("Bob");

/* Modify below to use arrow function
 * function Person(){
 *    this.age = 0;
 *   
 *    let self = this;
 *    setInterval(function() {
 *        self.age++
 *        console.log(self.age);
 *    }, 1000);
 * }
 */

var Person = function Person() {
    var _this = this;

    _classCallCheck(this, Person);

    this.age = 0;
    var intervalId = setInterval(function () {
        _this.age++;
        if (_this.age > 1) {
            clearInterval(intervalId);
        } else {
            console.log(_this.age);
        }
    }, 1000);
};

var bob = new Person();

/* Set default parameter values
 * function createUser(first_name, last_name, age){
 *     if(!first_name){
 *         first_name = "default first name"
 *     } 
 *     if(!last_name) {
 *         last_name = "default last name"
 *     }
 *     if(!age){
 *         age = "default age"
 *     }
 *     this.first_name = first_name;
 *     this.last_name = last_name;
 *     this.age = age;
}
*/
//function createUser(first_name="Minnie", last_name="Mouse", age=5) {

var NewUser = function NewUser() {
    var first_name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Minnie";
    var last_name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Mouse";
    var age = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;

    _classCallCheck(this, NewUser);

    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
    //return this;
};

var name = new NewUser();
console.log(name.first_name + " " + name.last_name + " " + name.age);
var me = new NewUser("Donald", "Duck", 7);
console.log(me.first_name + " " + me.last_name + " " + me.age);

/* Array methods
 * let arr = [10, 11, 9, 6];
 * for(var i = 0; i < arr.length; i++){
 *   console.log(arr[i])
 * }
*/
var arr = [10, 11, 9, 6];
arr.forEach(function (v) {
    return console.log(v);
});