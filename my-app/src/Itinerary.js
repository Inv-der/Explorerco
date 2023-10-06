import React from 'react';

function Itinerary({ planet }) {
    if (!planet) return <p>Select a planet to view itinerary.</p>;

    return (
        <div>
            <h3>Your Itinerary for {planet.title}</h3>
            {/* Your detailed itinerary logic will come here. */}
            <p>Day 1: Visit the main attraction of {planet.title}</p>
            {/* ... */}
        </div>
    );
}

export default Itinerary;
