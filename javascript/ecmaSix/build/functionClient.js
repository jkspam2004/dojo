"use strict";

/* arrow function. anonymous function with e (event) as input parameter */
function parentFunction2(name) {
    var _this = this;

    this.name = name;
    var h1 = document.createElement("h1");
    h1.innerText = "Random Name";
    document.body.appendChild(h1);
    h1.addEventListener("click", function (e) {
        h1.innerText = _this.name;
    });
}

var y = new parentFunction2("Bob");