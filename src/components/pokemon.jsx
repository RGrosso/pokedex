import React, { useState, useEffect } from "react";
import Type from "./type";
export default function Pokemon({ pokemonId }) {
    const [pokemonData, setPokemonData] = useState(false);

    const getData = async () => {
        const apiCall = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const data = await apiCall.json();
        setPokemonData(data);
    };

    useEffect(() => {
        getData();
    }, []);

    const generateId = () => {
        let string = "#000";
        return string.slice(0, -1) + pokemonData.id;
    };

    if (pokemonData === false) return false;

    return (
        <div className="pokemon-container">
            <div className="pokemon-content">
                <p>{generateId()}</p>
                <p className="name">{pokemonData.name}</p>
                <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                <div className="types">
                    {pokemonData.types
                        ? pokemonData.types.map((type) => {
                              return <Type key={`${pokemonId}${type.type.name}`} typeName={type.type.name} />;
                          })
                        : null}
                </div>
            </div>
        </div>
    );
}
