import React from "react";
import { getColorForPercentage } from "../utils";

const MAX_STATS = [
    { type: "hp", max: 250 },
    { type: "attack", max: 190 },
    { type: "defense", max: 230 },
    { type: "special-attack", max: 194 },
    { type: "special-defense", max: 230 },
    { type: "speed", max: 180 },
];
export default function Stat({ stat }) {
    const MAX_STAT = MAX_STATS.find((s) => s.type === stat.name);
    let width = stat.base_stat / MAX_STAT.max;
    let color = getColorForPercentage(width);
    width = `${Math.round(width * 100)}%`;
    const statStyles = {
        backgroundColor: color,
        borderColor: color,
        width,
    };
    return (
        <div className={`stat-row ${stat.name}`}>
            <p className="name">{stat.name.replace("special-", "sp. ")}</p>
            <p className="stat">{stat.base_stat}</p>
            <div className="bar">
                <div className="fill" style={statStyles}></div>
            </div>
        </div>
    );
}
