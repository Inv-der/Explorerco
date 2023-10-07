import React from 'react';
import Navigation from './Navigation';
import PlanetInfo from './PlanetInfo';
import Itinerary from './Itinerary';
import planetsData from './data/planets.json';
import Carousel from './carousel';
import './App.css';
import Navbar from './Navbar';
import SpaceTourismBooking from './SpaceTravelBooking.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
    <Router>
      <div>
        {/* Move Navbar outside the entire component */}
        <Navbar onSelectPlanet={handleSelectPlanet} />
      </div>
      <div className="container">
        <div className="header" style={{ marginTop: '20px' }}>
          <h1>Exploring on a golden journey</h1>
        </div>
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/booking" element={<SpaceTourismBooking />} />
          <Route path="/planet-info/:planetName" element={<PlanetInfo />} />
          <Route path="/itinerary" element={<Itinerary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
