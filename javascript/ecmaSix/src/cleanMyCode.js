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
class User {
    constructor(name) {
        this.name = name;
        this.printName();
    }
    printName() {
        console.log(this.name);
    }
}
let newuser = new User("Bob");

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
class Person {
    constructor() {
        this.age = 0;
        let intervalId = setInterval(() => { 
            this.age++;
            if (this.age > 1) { 
                clearInterval(intervalId); 
            } else {
                console.log(this.age);
            }
        }, 1000);
    }
}
let bob = new Person();

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
class NewUser {
    constructor (first_name="Minnie", last_name="Mouse", age=5) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        //return this;
    }
}
let name = new NewUser();
console.log(`${name.first_name} ${name.last_name} ${name.age}`);
let me = new NewUser("Donald", "Duck", 7);
console.log(`${me.first_name} ${me.last_name} ${me.age}`);

/* Array methods
 * let arr = [10, 11, 9, 6];
 * for(var i = 0; i < arr.length; i++){
 *   console.log(arr[i])
 * }
*/
let arr = [10, 11, 9, 6];
arr.forEach((v) => console.log(v));


