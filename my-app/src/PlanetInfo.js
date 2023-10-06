import React from 'react';
import './PlanetInfo.css'; 

function PlanetInfo({ planet }) {
    if (!planet) return <p>Select a planet to view details.</p>;

    return (
        <div>
            <img src={planet.image} alt={planet.title} />
            <h2>{planet.title}</h2>
            <p>{planet.desc}</p>
            {planet.distance && 
                <p>Distance: {planet.distance.value} {planet.distance.unit}</p>
            }
            
            <h4>Travel Tips:</h4>
            <p>{planet.tips}</p>
            
            <h4>Available Travel Methods:</h4>
            {planet.travel_methods && 
                <ul>
                    {Object.values(planet.travel_methods).map((method, index) => <li key={index}>{method}</li>)}
                </ul>
            }

            <h4>Points of Interest:</h4>
            <ul>
                {planet.points_of_interest && planet.points_of_interest.map((poi, index) => (
                    <li key={index}>
                        <strong>Name:</strong> {poi.name}<br />
                        <strong>Description:</strong> {poi.desc}<br />
                        <img src={poi.image} alt={poi.name} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PlanetInfo;
