import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

class DropDown extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			showMenu: false,
		};
	}

	onClick() {
		this.setState({ 'showMenu': !this.state.showMenu });
	}

	render() {
		const { options } = this.props;

		const optionList = () =>
			options.map((subject, i) => (
				<Link className="single-option" key={`mainTab-${i}`} to={`/${subject}`}>
					<span className="option-link">
						{subject}
					</span>
				</Link>
			));

		return (
			<button id="dropdown" onClick={this.onClick.bind(this)}>
				<FaBars />
				<div className="options">
					{(this.state.showMenu) ? optionList() : null}
				</div>
			</button>
		);
	}
}

export default DropDown;

DropDown.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
};