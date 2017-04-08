/* app.js */

let div = $dojo("main")
div.html("html something");

/* Append h1 to div element */
let h1 = $dojo("findMe").Element;
console.log("h1", h1);
div.append(h1); // original h1 element is moved inside the div
console.log("div element", div.Element); // <div id='main'><h1 id='findMe'>this is the text</h1></div>

/* Create a function that creates a new html element, it should update this.element */
let newh1 = $dojo().create("h1");
console.log("newh1", newh1.Element); // <h1></h1>

/* Create a function that appends a text node to an element */
let textnode = $dojo().create("h1").text("this is the text");
console.log("textnode", textnode.Element); // <h1>this is the text</h1>
div.append(textnode.Element);

/* Create a function that adds an event listener to an element */
let listener = $dojo().create("h1").text("click me").eventListener("click", callback);
div.append(listener.Element);
//callback should run when user clicks the h1 tag. 
function callback(e) {
    console.log("callback invoked");
    listener.text("You clicked me!");
}
