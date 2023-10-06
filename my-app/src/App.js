import React from 'react';
import Navigation from './Navigation';
import PlanetInfo from './PlanetInfo';
import Itinerary from './Itinerary';
import planetsData from './data/planets.json';
import './App.css';

function App() {
    const [selectedPlanet, setSelectedPlanet] = React.useState(null);

    return (
        <div className="container">
            <header className="header">
                <h1>Explore the Planets</h1>
            </header>
            <div className="navigation">
                <Navigation onSelectPlanet={setSelectedPlanet} />
            </div>
            {selectedPlanet && (
                <div>
                    <div className="planet-info">
                        <PlanetInfo planet={planetsData[selectedPlanet]} />
                    </div>
                    <div className="itinerary">
                        <Itinerary planet={planetsData[selectedPlanet]} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
