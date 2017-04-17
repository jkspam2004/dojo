/* app.js */

let myButton = document.getElementById("myButton");

/* change background color of the button */
let bgc = document.getElementById("background-color");
bgc.addEventListener("change", updateColor);
function updateColor(){
    myButton.style.backgroundColor = this.value;
}

/* change text color of the button */
let txtc = document.getElementById("text-color");
txtc.addEventListener("change", updateTextColor);
function updateTextColor() {
    myButton.style.color = this.value;
}  

/* change border color */
let borderc = document.getElementById("border-color");
borderc.addEventListener("change", updateBorderColor);
function updateBorderColor() {
    myButton.style.borderColor = this.value;
}

/* toggle boldness for text of button */
let txtb = document.getElementById("bold");
txtb.addEventListener("change", boldText);
function boldText() {
    myButton.style.fontWeight = this.checked ? 'bold' : null;
}

/* toggle boldness for text of button */
let txti = document.getElementById("italic");
txti.addEventListener("change", italicText);
function italicText() {
    myButton.style.fontStyle = this.checked ? 'italic' : null;
}

/* hide text */
let txth = document.getElementById("hidden");
txth.addEventListener("change", hideText);
function hideText() {
    myButton.style.display = this.checked ? 'none' : null;
}

/* change border radius */
let borderr = document.getElementById("border-radius");
borderr.addEventListener("change", updateBorderRadius);
function updateBorderRadius(e) {
    console.log(this.value);
    console.log(this);
    console.log(e);
    myButton.style.borderRadius = `${this.value}px`;
}
