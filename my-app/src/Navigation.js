import React from 'react';
import planetsData from './data/planets.json';

function Navigation({ onSelectPlanet }) {
    return (
        <nav>
            {Object.keys(planetsData).map(planetKey => (
                <button key={planetKey} onClick={() => onSelectPlanet(planetKey)}>
                    {planetsData[planetKey].title}
                </button>
            ))}
        </nav>
    );
}

export default Navigation;
