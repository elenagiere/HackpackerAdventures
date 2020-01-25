import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

class MobileMenu extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			showMenu: true,
		};
	}

	onClick() {
		this.setState({ 'showMenu': !this.state.showMenu });
	}

	handleBlur = (e) => {
		// firefox onBlur issue workaround
		console.log('handleBlur');
		if (e.nativeEvent.explicitOriginalTarget &&
			e.nativeEvent.explicitOriginalTarget === e.nativeEvent.originalTarget) {
		  return;
		}
	
		if (this.state.showMenu) {
		  setTimeout(() => {
			this.setState({ showMenu: false });
		  }, 200);
		}
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

				<div className="options" tabIndex="0" >
					{(this.state.showMenu) ? optionList() : null}
				</div>

		);
	}
}

export default MobileMenu;

MobileMenu.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
};