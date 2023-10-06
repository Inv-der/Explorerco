import React from 'react';
import Navigation from './Navigation';
import PlanetInfo from './PlanetInfo';
import Itinerary from './Itinerary';
import planetsData from './data/planets.json';

function App() {
    const [selectedPlanet, setSelectedPlanet] = React.useState(null);

    return (
        <div>
            <Navigation onSelectPlanet={setSelectedPlanet} />
            <PlanetInfo planet={planetsData[selectedPlanet]} />
            <Itinerary planet={planetsData[selectedPlanet]} />
        </div>
    );
}

export default App;
