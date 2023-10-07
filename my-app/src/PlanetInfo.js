import React from 'react';
import './PlanetInfo.css'; 
import planetsData from './data/planets.json';
import { useParams } from 'react-router-dom';

function PlanetInfo() {
    const { planetName } = useParams();
    const planet = planetsData[planetName];

    if (!planet) return <p>Planet not found!</p>;

    return (
        <div className="container">
            <h1>{planet.title}</h1>
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
            <p>{planet.desc}</p>
            
            {planet.distance && 
                <p>Distance: {planet.distance.value} {planet.distance.unit}</p>
            }
            
            <h4>Travel Tips:</h4>
            <p>{planet.tips}</p>
            
            {planet.travel_methods && 
                <>
                    <h4>Available Travel Methods:</h4>
                    <ul>
                        {Object.values(planet.travel_methods).map((method, index) => <li key={index}>{method}</li>)}
                    </ul>
                </>
            }

            {planet.points_of_interest &&
                <>
                    <h4>Points of Interest:</h4>
                    <ul>
                        {planet.points_of_interest.map((poi, index) => (
                            <li key={index}>
                                <strong>Name:</strong> {poi.name}<br />
                                <strong>Description:</strong> {poi.desc}<br />
                                <img src={poi.image} alt={poi.name} />
                            </li>
                        ))}
                    </ul>
                </>
            }
        </div>
    );
}

export default PlanetInfo;
