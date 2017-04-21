import "./pokemon.css";
import pokemon from "./pokemon.html";
import Pokedex from "./../Pokedex/pokedex.js";

class Pokemon {
    constructor(pokeId) {
        this.div = document.createElement("div");
        this.ele = document.createRange().createContextualFragment(pokemon);
        this.buttonEvent();
        $.get(`http://pokeapi.co/api/v2/pokemon/${pokeId}`, (data) => this.setPoke(data), "json");

        return this.div;
    }
    setPoke(data) {
        this.name = data.name;
        this.img = data.sprites.front_shiny;
        this.types = data.types;
        this.weight = data.weight;
        this.addImage();
    }
    addImage() {
        //console.log("this.ele: ", this.ele);
        let elCard = this.ele.querySelector(".card");
        console.log("selector: ", elCard);
        let img = elCard.querySelector("img");
        img.setAttribute("src", this.img);  

        this.div.appendChild(this.ele);
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
