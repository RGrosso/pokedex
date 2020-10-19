import React from "react";
import Pokemon from "./pokemon";
const COUNT = 9;

export default function PokemonManager() {
    const returnPokemon = () => {
        let id = [];
        for (let i = 1; i < COUNT + 1; i++) id.push(i);
        return id;
    };
    const pArray = returnPokemon();
    return (
        <div id="container">
            {pArray.map((id) => {
                return <Pokemon key={id} pokemonId={id} />;
            })}
        </div>
    );
}
