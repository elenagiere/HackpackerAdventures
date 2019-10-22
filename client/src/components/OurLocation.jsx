import React from 'react';
import { FaMapPin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class OurLocation extends React.Component {

	render() {
		return (
            <div id="our-location">
                <Link to="/location">
                    <span>Current Location</span>
                    <FaMapPin />
                    <span>Oaxaca, Mexico</span>
                </Link>
            </div>
		);
	}
}

export default OurLocation;
