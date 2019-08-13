import React from 'react';
// import PropTypes from 'prop-types';
// import { imagePath } from '../Constants.js';
import Header from './Header.jsx';
// import MainHeader from './MainHeader.jsx';
import LongCard from './LongCard.jsx';
// import Modal from './Modal.jsx';
import EmailPrompt from './EmailPrompt.jsx';
import landingPageImage from '../../../static/images/philippinesWithText.jpg';
// import { FaInstagram, FaFacebook, FaYoutube, FaMapPin } from 'react-icons/fa';

class LandingPage extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			isModalOpen: true,
		};
	}

	onToggle () {
		this.setState({ 'isModalOpen': !this.state.isModalOpen });
	}

	render () {
		// const { newVisitor } = this.props.match.params;

		return (
			<div id="home-page" className="sub-page">
				{/* <Favicon url={`${imagePath}/favicon.ico`} /> */}
				<img className="landing-page-image" src={landingPageImage} alt="El Nido" />
				{/* <img className="landing-page-image" src="https://live.staticflickr.com/65535/48157489812_0838cc97b8_h.jpg" alt="philippines" /> */}
				{/* <script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script> */}
				{/* <div className="landing-page-top-bar"> */}
					{/* <FaInstagram /> */}
					{/* <FaFacebook /> */}
					{/* <FaYoutube /> */}
					{/* <FaMapPin /> */}
					{/* <span>San Jose, CA</span> */}
				{/* </div> */}
				{/* <EmailPrompt></EmailPrompt> */}
				<Header></Header>
				{/* {this.state.isModalOpen ? <Modal toggle={this.onToggle.bind(this)}></Modal> : null } */}
				<LongCard title="About Us" summaryText="Our names are Luke and Elena. We are about to begin a year long adventure traveling through Central and South America as well as Africa!" imgName="LakeTahoeUs.jpg"></LongCard>
				{/* list the latest blog post */}
			</div>
		);
	}
}

export default LandingPage;

// LandingPage.propTypes = {
// 	toggle: PropTypes.func.isRequired
// };
