import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { imagePath } from '../Constants.js';
import aboutBanner from '../static/images/LakeTahoeUs.jpg';

class LongCard extends React.Component {

	render () {
		const { title, imgName, summaryText } = this.props;
		console.log('single post props');
		console.log(this.props);

		return (
            <div id="long-card">
                {/* <img src={`${imagePath}/${imgName}`} alt={title} className="hover" /> */}
				<img src={aboutBanner} alt={title} className="hover" />
                <div className="text">
                    <h2>{title}</h2>
                    <p>{summaryText}</p>
                    <Link to="/about">
                        <button>Read our story</button>
                    </Link>
                </div>
            </div>
		);
	}
}

export default LongCard;


LongCard.propTypes = {
	title: PropTypes.string.isRequired,
	// date: PropTypes.string.isRequired,
	imgName: PropTypes.string.isRequired,
	// photoUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
	// textFile: PropTypes.string.isRequired,
	summaryText: PropTypes.string.isRequired
};
