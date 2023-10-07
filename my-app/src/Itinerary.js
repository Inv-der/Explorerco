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

    const downloadBucketListDoc = () => {
        let htmlContent = "<h1>Bucket List</h1>";
        selectedPOIs.forEach(poi => {
            htmlContent += `<p>${poi.name} Visited: [ ]</p>`;
        });
    
        const blob = new Blob([htmlContent], { type: 'text/html' });
        const href = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = 'bucket_list.html';
        
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
                    </li>
                ))}
            </ul>

            {selectedPOIs.length > 0 && (
                <button onClick={downloadBucketListDoc}>
                    Download Bucket List
                </button>
    )}
        </div>
    );
}

export default Itinerary;
