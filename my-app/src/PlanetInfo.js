import React from 'react';
import planet from './data/planets.json';

function PlanetInfo({ planet }) {
    if (!planet) return <p>Select a planet to view details.</p>;

    return (
        <div>
            <img src={planet.image} alt={planet.title} />
            <h2>{planet.title}</h2>
            <p>{planet.desc}</p>
            <p>Distance: {planet.distance.value} {planet.distance.unit}</p>
            <h4>Travel Tips:</h4>
            <p>{planet.tips}</p>
            <h4>Available Travel Methods:</h4>
            {planet.travel_methods && 
    <ul>
        {planet.travel_methods.map(method => <li key={method}>{method}</li>)}
    </ul>
}

        </div>
    );
}

export default PlanetInfo;
