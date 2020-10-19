import React, { useState, useEffect } from "react";

export default function Pokemon({ pokemonId }) {
    const [pokemonData, setPokemonData] = useState(false);

    useEffect(() => {
        const getData = async () => {
            console.log(pokemonId);
            const apiCall = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
            const data = await apiCall.json();
            console.log("Data id: " + pokemonId, data);
            setPokemonData(data);
        };
        getData();
    }, []);

    if (pokemonData === false) return false;

    return (
        <div>
            <p>{pokemonId}</p>
            <p>{pokemonData.name}</p>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        </div>
    );
}
