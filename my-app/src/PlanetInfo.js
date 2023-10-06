import React from 'react';
import planets from './data/planets.json';

function PlanetInfo({ selectedPlanet }) {
    const planetDetails = planets.find(planet => planet[selectedPlanet]);

    if (!planetDetails) return <p>Select a planet to view details.</p>;

    const planet = planetDetails[selectedPlanet];

    return (
        <div>
            <h2>{planet.name}</h2>
            <img src={planet.image} alt={planet.name} />
            <p>{planet.description}</p>
            <p>Distance from Earth: {planet.distance_from_earth.value} {planet.distance_from_earth.unit}</p>

            <h4>Travel Details:</h4>
            <p>Departure Date: {planet.travel_details.departure_date}</p>
            <p>Return Date: {planet.travel_details.return_date}</p>
            <p>Journey Duration: {planet.travel_details.journey_duration.value} {planet.travel_details.journey_duration.unit}</p>

            <h4>Spacecraft:</h4>
            <img src={planet.travel_details.spacecraft.image} alt={planet.travel_details.spacecraft.name} />
            <p>{planet.travel_details.spacecraft.name}</p>
            <p>{planet.travel_details.spacecraft.description}</p>

            <h4>Accommodation:</h4>
            <img src={planet.accommodation.image} alt={planet.accommodation.name} />
            <p>{planet.accommodation.name}</p>
            <p>{planet.accommodation.description}</p>

            <h4>Points of Interest:</h4>
            {planet.points_of_interest.map(poi => (
                <div key={poi.name}>
                    <img src={poi.image} alt={poi.name} />
                    <p>{poi.name}</p>
                    <p>{poi.description}</p>
                </div>
            ))}

            <h4>Safety Tips:</h4>
            <ul>
                {planet.safety_tips.map(tip => <li key={tip}>{tip}</li>)}
            </ul>

            <h4>Cultural Etiquette:</h4>
            <ul>
                {planet.cultural_etiquette.map(etiquette => <li key={etiquette}>{etiquette}</li>)}
            </ul>

            <h4>Packing List:</h4>
            <ul>
                {planet.packing_list.map(item => <li key={item}>{item}</li>)}
            </ul>

        </div>
    );
}

export default PlanetInfo;
