import React from "react";

export default function Type({ typeName }) {
    return (
        <div className={`type ${typeName}`}>
            <p>{typeName}</p>
        </div>
    );
}
