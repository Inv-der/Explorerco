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

      {/* New Carousel Component with Videos */}
      <div id="carouselExampleAutoplaying" className="carousel slide mt-4" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <video className="d-block w-100" autoPlay loop muted style={{ borderRadius: '15px' }}>
              <source src="\videos\INV@DER$.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="carousel-item">
            <video className="d-block w-100" autoPlay loop muted style={{ borderRadius: '15px' }}>
              <source src="\videos\INV@DER$.gif" type="video/gif" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="carousel-item">
            <video className="d-block w-100" autoPlay loop muted style={{ borderRadius: '15px' }}>
              <source src="path/to/your/video3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Navigation Component */}
      <div className="navigation">
        <Navigation onSelectPlanet={setSelectedPlanet} />
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
