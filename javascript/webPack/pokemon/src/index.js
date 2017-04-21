import "./index.css";
import Pokemon from "./Components/PokemonList/pokemon.js";

let pokeList = document.getElementById("pokelist");

for (let i = 1; i < 6; i++) {
    pokeList.appendChild(Pokemon(i));
}
