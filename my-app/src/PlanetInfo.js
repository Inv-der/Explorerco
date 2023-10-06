import React from 'react';

function PlanetInfo({ planet }) {
    if (!planet) return null;

    return (
        <div>
            <img src={planet.image} alt={planet.title} />
            <h2>{planet.title}</h2>
            <p>{planet.desc}</p>
            <p>Distance: {planet.distance.value} {planet.distance.unit}</p>
        </div>
    );
}

export default PlanetInfo;
