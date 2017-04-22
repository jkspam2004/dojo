import "./pokemon.css";
import pokemon from "./pokemon.html";
import Pokedex from "./../Pokedex/pokedex.js";

class Pokemon {
    constructor(pokeId) {
        this.div = document.createElement("div"); // placeholder
        this.ele = document.createRange().createContextualFragment(pokemon);
        this.buttonEvent();
        $.get(`http://pokeapi.co/api/v2/pokemon/${pokeId}`, (data) => this.setPoke(data), "json");

        /*  returning this.ele won't work. if we returned this.ele, the moment this.ele 
            gets appended to the dom (index.js), the fragment will be lost. this.ele will
            be null. the appendChild happens first because of the callback in $.get() which
            would not have completed and depends on this.ele in addImage(). async issue.
            thus, we create a placeholder (this.div) and hold on to this.ele till the very
            end and append it to this.div  
        */
        return this.div;
    }
    setPoke(data) {
        this.name = data.name;
        this.img = data.sprites.front_shiny;
        this.types = data.types;
        this.weight = data.weight;
        this.addImage();
        this.div.appendChild(this.ele);
    }
    addImage() {
        let elCard = this.ele.querySelector(".card");
        let img = elCard.querySelector("img");
        img.setAttribute("src", this.img);  
        let h3 = elCard.querySelector("h3");
        h3.appendChild(document.createTextNode(this.name));
        console.log("selector: ", elCard);

    }
    buttonEvent() {
        this.ele.getElementById("mainButton").addEventListener("click", (e) => {
            document.body.appendChild(Pokedex("Pokedex"));
        });
    }

    
}

export default function(id) {
    return new Pokemon(id);
}
