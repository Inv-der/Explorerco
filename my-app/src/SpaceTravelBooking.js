import React, { useState } from "react";
import planetsData from "./data/planets.json";

function SpaceTourismBooking() {
  const [bookingType, setBookingType] = useState("Round Trip");
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travelby, setTravelby] = useState("");


  const generateTicket = () => {
    const ticketData = `
      Booking Type: ${bookingType}
      From: ${fromCity}
      To: ${toCity}
      Travel by: ${travelby}
      Departure Date: ${departureDate}
      ${bookingType === 'Round Trip' ? `Return Date: ${returnDate}` : ''}
    `;

    const blob = new Blob([ticketData], { type: 'text/plain;charset=utf-8' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = 'ticket.txt';
    
    // Append the link to the DOM
    document.body.appendChild(link);

    // Trigger a click event on the link
    link.click();

    // Delay the removal of the link for browser compatibility
    setTimeout(() => {
        document.body.removeChild(link);
        // Release the blob URL
        URL.revokeObjectURL(href);
    }, 100);
};


  const handleSearchClick = () => {
    if (fromCity && toCity && departureDate) {
      generateTicket();  // Call the generateTicket function when conditions are met
      alert('Search Initiated!');
    } else {
      alert('Please complete the form before searching.');
    }
  };

  return (
    <div>
      <h2>Book International and Domestic Flights</h2>

      <div>
        <label>
          <input
            type="radio"
            value="One Way"
            checked={bookingType === "One Way"}
            onChange={() => setBookingType("One Way")}
          />
          One Way
        </label>
        <label>
          <input
            type="radio"
            value="Round Trip"
            checked={bookingType === "Round Trip"}
            onChange={() => setBookingType("Round Trip")}
          />
          Round Trip
        </label>
        
      </div>

      <label>
        From:
        <select value={fromCity} onChange={(e) => setFromCity(e.target.value)}>
          <option value="">Select...</option>
          {Object.entries(planetsData).map(([key, planet]) => (
            <option key={key} value={key}>
              {planet.title}
            </option>
          ))}
        </select>
      </label>

      <label>
        To:
        <select value={toCity} onChange={(e) => setToCity(e.target.value)}>
          <option value="">Select...</option>
          {Object.entries(planetsData)
            .filter(([key]) => key !== fromCity)
            .map(([key, planet]) => (
              <option key={key} value={key}>
                {planet.title}
              </option>
            ))}
        </select>
      </label>

      <label>
        By:
        <select value={travelby} onChange={(e) => setTravelby(e.target.value)}>
          <option value="">Select...</option>
          {fromCity &&
            Object.values(planetsData[fromCity].travel_methods).map(
              (method, index) => (
                <option key={index} value={method}>
                  {method}
                </option>
              )
            )}
        </select>
      </label>

      <label>
        Departure date:
        <input
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
      </label>

      {bookingType === "Round Trip" && (
        <label>
          Return date:
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </label>
      )}

      <button onClick={handleSearchClick}>SEARCH</button>
    </div>
  );
}

export default SpaceTourismBooking;
