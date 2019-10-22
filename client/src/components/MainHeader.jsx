import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './Home.jsx';
import DropDown from './DropDown.jsx';
import { publicImagePath } from '../Constants.js';
import { FaMapPin } from 'react-icons/fa';

class MainHeader extends React.Component {

	render() {
		const subjects = [
			'About',
			'Trips',
			'Photography',
			'Location'
			// 'Expenses',
			// 'Health'
		];

		const mainTabs = () =>
		subjects.map((subject, i) => {
			return (<Link className="header-link" key={`mainTab-${i}`} to={`/${subject}`}>{subject}</Link>);
		});

		const fill = (this.props.children !== null) ? this.props.children : <Home />;
		return (
			<div id="mainHeader">
				<div className="main-header">
					<div className="left-section">
						<DropDown options={subjects} />
					</div>
					<img className="logo" src={`${publicImagePath}backpack_icon.png`} alt="logo" />
					<Link className="title" key="0" to="/home">Hackpacker Adventures</Link>
					{mainTabs()}
				</div>
				{fill}
			</div>
		);
	}
}

export default MainHeader;

MainHeader.propTypes = {
	children: PropTypes.node
};