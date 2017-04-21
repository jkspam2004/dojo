/* Pokedex/pokedex.js - individual pokemon detail */

import "./pokemon.css";
import pokemon from "./pokemon.html";

class Pokemon {
    constructor(title) {
        this.ele = document.createRange().createContextualFragment(pokemon);
        this.setTitle(title);
        this.closeButton();
        return this.ele;
    }
    setTitle(title) {
        this.ele.getElementById("ModalTitle").innerText = title;
    }
    closeButton() {
        this.ele.getElementById("closeModal").addEventListener("click", (e) => {
            let modal = document.getElementById("myModal");
            document.body.removeChild(modal);
        });
    }

}

export default function(title) {
    return new Pokemon(title)
}
