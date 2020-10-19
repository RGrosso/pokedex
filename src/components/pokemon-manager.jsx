import React from "react";
import Pokemon from "./pokemon";

export default function PokemonManager() {
    const returnPokemon = () => {
        let id = [];
        for (let i = 1; i < 10; i++) {
            id.push(i);
        }
        return id;
    };

    const pArray = returnPokemon();

    console.log("Array", pArray);
    return (
        <div>
            {pArray.map((p) => {
                return <Pokemon key={p} pokemonId={p} />;
            })}
        </div>
    );
}
