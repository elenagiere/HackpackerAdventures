import React from 'react';

class LocationDetails extends React.Component {

	render() {
		return (
            <div id="location-details" className="sub-page">
                <iframe src="https://hackpackeradventures.travelmap.net" 
                    width="100%" 
                    height="600" 
                    frameborder="0" 
                    allowfullscreen>
                </iframe>
            </div>
		);
	}
}

export default LocationDetails;