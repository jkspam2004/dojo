import "./Card.css";
import card from "./Card.html"; // imports file as a string
import Modal from "./../Modal/Modal.js";

class Card {
    constructor() {
        // convert string to html element
        this.ele = document.createRange().createContextualFragment(card);
        this.buttonEvent();
        return this.ele;
    }
    buttonEvent() {
        this.ele.getElementById("mainButton").addEventListener("click", e => {
            //console.log("I am clicking on the button");
            document.body.appendChild(Modal("Awesome Title"));
        });
    }
}

export default function() {
    return new Card();
}

/*
this.ele = document.createRange().createContextualFragment(card);
create some html based off of the card string. When we import an HTML file, it 
imports it as a string, so we have to first convert that string to an HTML 
element object so that we can attach event listeners to it

this.ele.getElementById("mainButton"): Look at the HTML file we're importing, 
in that file we have a button with a "mainButton" id. We're going to add an event 
listener to that button. For now all that event listener does is log "I am 
clicking on the button".
*/
