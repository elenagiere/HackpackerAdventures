import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './Home.jsx';
import DropDown from './DropDown.jsx';
// import { imagePath } from '../Constants.js';
import { FaHome, FaCamera, FaDollarSign, FaBookReader, FaRunning } from 'react-icons/fa';

class Header extends React.Component {

	render () {
		const options = [
  			'About', 'Trips', 'Photography'
		];
		// const defaultOption = options[0];

		const fill = (this.props.children !== null) ? this.props.children : <Home />;
		return (
			<div id="app">
				<div className="header">
					<Link id="subject-link" to="/trips">
						<div className="icon-row">
							<FaBookReader />
						</div>
						<div className="text">
							<h3>Stories</h3>
							<p>Read about our travels</p>
						</div>
					</Link>
					<Link id="subject-link" to="/photography">
						<div className="icon-row">
							<FaCamera />
						</div>
						<div className="text">
							<h3>Photography</h3>
							<p>View our captured shots</p>
						</div>
					</Link>
					<Link id="subject-link" to="/expenses">
						<div className="icon-row">
							<FaDollarSign />
						</div>
						<div className="text">
							<h3>Expenses</h3>
							<p>Check out our travel finances</p>
						</div>
					</Link>
					<Link id="subject-link" to="/health">
						<div className="icon-row">
							<FaRunning />
						</div>
						<div className="text">
							<h3>Health & Fintess</h3>
							<p>Learn healthy travel habits </p>
						</div>
					</Link>
					{/* <div className="left-section">
						<DropDown options={options} />
					</div> */}
				</div>
				{fill}
			</div>
		);
	}
}

export default Header;

Header.propTypes = {
	children: PropTypes.node
};
