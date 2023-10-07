import React, { useState } from "react";
import planetsData from "./data/planets.json";

function SpaceTourismBooking() {
  const [bookingType, setBookingType] = useState("Round Trip");
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travelby, setTravelby] = useState("");


  const handleSearchClick = () => {
    if (fromCity && toCity && departureDate) {
      alert("Search Initiated!");
    } else {
      alert("Please complete the form before searching.");
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
        <label>
          <input
            type="radio"
            value="Multi City"
            checked={bookingType === "Multi City"}
            onChange={() => setBookingType("Multi City")}
          />
          Multi City
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
