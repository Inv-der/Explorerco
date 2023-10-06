import React, { useState } from "react";
import poi from './data/planets.json';

function Itinerary({ planet }) {
    const [selectedPOIs, setSelectedPOIs] = useState([]);

    if (!planet) return <p>Select a planet to plan your itinerary.</p>;

  const handlePOISelection = (poi) => {
    setSelectedPOIs((prev) => [...prev, poi]);
  };

  return (
    <div>
      <h3>Plan Your Itinerary for {planet.title}</h3>

      <h4>Select Points of Interest:</h4>
      {planet.POIs && (
        <ul>
          {planet.POIs.map((poi) => (
            <li key={poi.name}>
              <button onClick={() => handlePOISelection(poi)}>
                {poi.name}
              </button>
            </li>
          ))}
        </ul>
      )}

      <h4>Your Itinerary:</h4>
      <ul>
        {selectedPOIs.map((poi) => (
          <li key={poi.name}>
            <h5>{poi.name}</h5>
            <p>{poi.desc}</p>
            <img src={poi.image} alt={poi.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Itinerary;
