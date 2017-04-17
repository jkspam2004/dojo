/* dojo.js */

function $dojo(id) {
    /* dojo(): get element from id input */
    function dojo() {
        this.Element = document.getElementById(id);
        // implicit return of "this"
    }
    /* html(content): change html content */
    dojo.prototype.html = function(content) {
        this.Element.innerHTML = content;
        return this; // for chaining
    }
    /* append(element): append element to another element */
    dojo.prototype.append = function(element) {
        this.Element.appendChild(element);
        return this;
    }
    /* create(element): create a new element */
    dojo.prototype.create = function(element) {
        this.Element = document.createElement(element);
        return this;
    }
    /* text(str): append text node to destination */ 
    dojo.prototype.text = function(text) {
       this.Element.innerText = text;
       return this;
    }
    /* eventListener(event, callback): add an event listener to an alement */ 
    dojo.prototype.eventListener = function(event, cb) {
        this.Element.addEventListener(event, cb);
        return this;
    }
    return new dojo();
}
window.$dojo = $dojo;

