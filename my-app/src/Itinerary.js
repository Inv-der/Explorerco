import React, { useState } from "react";

function Itinerary({ planet }) {
    const [selectedPOIs, setSelectedPOIs] = useState([]);

    if (!planet) return <p>Select a planet to plan your itinerary.</p>;

    const handlePOISelection = (poi) => {
        if (selectedPOIs.some(selectedPOI => selectedPOI.name === poi.name)) {
            setSelectedPOIs(prev => prev.filter(p => p.name !== poi.name));
        } else {
            setSelectedPOIs(prev => [...prev, poi]);
        }
    };

    const downloadBucketList = () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(selectedPOIs));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "bucketList.json");
        document.body.appendChild(downloadAnchorNode); 
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }
      
    return (
        <div>
            <h3>Plan Your Itinerary for {planet.title}</h3>

            <h4>Visitable place:</h4>
            {planet.points_of_interest && (
                <ul>
                    {planet.points_of_interest.map((poi) => (
                        <li key={poi.name}>
                            <button onClick={() => handlePOISelection(poi)}>
                                {selectedPOIs.some(p => p.name === poi.name) ? `Remove ${poi.name}` : poi.name}
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            <h4>My Bucket list:</h4>
            <ul>
                {selectedPOIs.map((poi) => (
                    <li key={poi.name}>
                        <h5>{poi.name}</h5>
                        <p>{poi.desc}</p>
                        <img src={poi.image} alt={poi.name} />
                    </li>
                ))}
            </ul>

            {selectedPOIs.length > 0 && (
                <button onClick={downloadBucketList}>
                    Download Bucket List
                </button>
            )}
        </div>
    );
}

export default Itinerary;
