import React from 'react';
import './PlanetInfo.css'; // Import the CSS file
import planetsData from './data/planets.json';
import { useParams } from 'react-router-dom';

function PlanetInfo() {
  const { planetName } = useParams();
  const planet = planetsData[planetName];

  if (!planet) return <p>Planet not found!</p>;

  const commonHeadingStyle = { color: 'white', fontSize: '25px' };
  const commonParagraphStyle = { color: 'white', fontSize: '20px' };

  return (
    <div className="container">
      <button className="animated-button">
        <span style={commonHeadingStyle}>{planet.title}</span>
        <span></span>
      </button>
      <div style={{ position: 'relative', marginBottom: '20px' }}>
        {/* <iframe 
                    src={planet.image}
                    title="NASA Solar System Visualization" 
                    width="100%" 
                    height="300" 
                    frameBorder="0" 
                    allowFullScreen
    ></iframe>*/}
      </div>
      <p style={commonParagraphStyle}>{planet.desc}</p>

      {planet.distance && (
        <p style={commonParagraphStyle}>
          Distance: {planet.distance.value} {planet.distance.unit}
        </p>
      )}

      <h4 style={commonHeadingStyle}>Travel Tips:</h4>
      <p style={commonParagraphStyle}>{planet.tips}</p>

      {planet.travel_methods && (
        <>
          <h4 style={commonHeadingStyle}>Available Travel Methods:</h4>
          <ul style={commonParagraphStyle}>
            {Object.values(planet.travel_methods).map((method, index) => (
              <li key={index}>{method}</li>
            ))}
          </ul>
        </>
      )}

      {planet.points_of_interest && (
        <>
          <h4 style={commonHeadingStyle}>Points of Interest:</h4>
          <ul style={commonParagraphStyle}>
            {planet.points_of_interest.map((poi, index) => (
              <li key={index}>
                <strong>Name:</strong> {poi.name}
                <br />
                <strong>Description:</strong> {poi.desc}
                <br />
                <img src={poi.image} alt={poi.name} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default PlanetInfo;
