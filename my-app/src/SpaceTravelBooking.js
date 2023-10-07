import React, { useState } from 'react';
import './SpaceTourismBooking.css';  // Create a CSS file for styles

function SpaceTourismBooking() {
    const [journeyType, setJourneyType] = useState('oneWay');
    const [launchFrom, setLaunchFrom] = useState('');
    const [destination, setDestination] = useState('');
    const [departureDate, setDepartureDate] = useState('');

    return (
        <div className="space-tourism-booking">
            <div className="navbar">
                <div>Flights</div>
                <div>Hotels</div>
                <div>Homestays & Villas</div>
                {/* Add other navbar items */}
            </div>

            <div className="booking-panel">
                <div className="journey-type">
                    <label>
                        <input type="radio" value="oneWay" checked={journeyType === 'oneWay'} onChange={() => setJourneyType('oneWay')} />
                        One Way
                    </label>
                    <label>
                        <input type="radio" value="roundTrip" checked={journeyType === 'roundTrip'} onChange={() => setJourneyType('roundTrip')} />
                        Round Trip
                    </label>
                    {/* Add other options */}
                </div>
                <div className="from-to-section">
                    <div>
                        <label>From</label>
                        <input type="text" value={launchFrom} onChange={e => setLaunchFrom(e.target.value)} placeholder="Launch from" />
                    </div>
                    <div>
                        <label>To</label>
                        <input type="text" value={destination} onChange={e => setDestination(e.target.value)} placeholder="Destination" />
                    </div>
                </div>
                <div>
                    <label>Departure</label>
                    <input type="date" value={departureDate} onChange={e => setDepartureDate(e.target.value)} />
                </div>
                <button>Explore</button>
            </div>

            <div className="info-bar">
                Book International and Domestic Space Journeys
            </div>
        </div>
    );
}

export default SpaceTourismBooking;
