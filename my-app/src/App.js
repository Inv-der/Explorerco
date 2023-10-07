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
import About from './About';

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
      <div class="card text-center" style={{ borderRadius: '50px' }}>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/booking" element={<SpaceTourismBooking />} />
          <Route path="/planet-info/:planetName" element={<PlanetInfo />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
  