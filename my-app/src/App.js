import React from 'react';
import Navigation from './Navigation';
import PlanetInfo from './PlanetInfo';
import Itinerary from './Itinerary';
import planetsData from './data/planets.json';
import Carousel from './carousel';
import './App.css';
import Navbar from './Navbar';

function App() {
  const [selectedPlanet, setSelectedPlanet] = React.useState(null);

  const handleSelectPlanet = (planetKey) => {
    if (selectedPlanet === planetKey) {
      setSelectedPlanet(null);  // Deselect if the planet is already selected
    } else {
      setSelectedPlanet(planetKey);  // Select the planet
    }
  };

  return (
    <div className="container">
      <Navbar />

      {/* Add some spacing between Navbar and Header */}
      <div className="header" style={{ marginTop: '20px' }}>
        <h1>Exploring on a golden journey</h1>
      </div>

      {/* New Carousel Component with Videos */}
      <Carousel />

      {/* Navigation Component */}
      
      <div className="navigation">
      <Navigation onSelectPlanet={handleSelectPlanet} />
    </div>

      {/* Planet Information and Itinerary */}
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
