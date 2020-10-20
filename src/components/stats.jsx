import React from "react";
import Stat from "./stat";

export default function Stats({ stats, pokemonId }) {
    const remapStats = () => {
        let newArr = [];
        stats.forEach(({ stat, base_stat }) => {
            if (stat.name !== undefined && base_stat !== undefined) {
                newArr.push({ name: stat.name, base_stat });
            }
        });
        if (pokemonId === 1) console.log(null, newArr);

        return newArr;
    };

    const statsRemapped = remapStats();

    return (
        <div>
            {statsRemapped.map((data) => {
                return <Stat key={`${pokemonId}-${data.name}`} stat={data} />;
            })}
        </div>
    );
}
