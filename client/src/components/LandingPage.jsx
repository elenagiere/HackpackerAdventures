import React from 'react';
// import PropTypes from 'prop-types';
// import { imagePath } from '../Constants.js';
import Header from './Header.jsx';
// import MainHeader from './MainHeader.jsx';
import LongCard from './LongCard.jsx';
// import Modal from './Modal.jsx';
// import EmailPrompt from './EmailPrompt.jsx';
import landingPageImage from '../static/images/philippinesWithText.jpg';
import tripData from '../tripData.js';
import aboutUsData from '../aboutUsData.js';
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
		const getLatestPost = () => {
			const latestPost = tripData[tripData.length - 1];
			return (<LongCard key={latestPost.id} id={latestPost.id} title={latestPost.title} date={latestPost.date} imgName={latestPost.imgName} photoUrls={latestPost.photoUrls} textFile={latestPost.textFile} summaryText={latestPost.summaryText} expenseImage={latestPost.expenseImage} videoId={latestPost.videoId} enableComments={latestPost.enableComments} />);
		}

		const getAboutUsPost = () => {
			const aboutPost = aboutUsData[0];
			return (<LongCard key={aboutPost.id} id={aboutPost.id} title={aboutPost.title} date={aboutPost.date} imgName={aboutPost.imgName} photoUrls={aboutPost.photoUrls} textFile={aboutPost.textFile} summaryText={aboutPost.summaryText} expenseImage={aboutPost.expenseImage} videoId={aboutPost.videoId} enableComments={aboutPost.enableComments} />);
		}

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
				<h2 className="latest-post-header">Our Latest Post</h2>
				{getLatestPost()}
				<Header></Header>
				{/* {this.state.isModalOpen ? <Modal toggle={this.onToggle.bind(this)}></Modal> : null } */}
				{/* <LongCard title="About Us" summaryText="Hello, beautiful people! My name is Luke and this is my incredible girlfriend, Elena!" imgName="caboHammock.jpg"></LongCard> */}
				{getAboutUsPost()}
				{/* list the latest blog post */}
			</div>
		);
	}
}

export default LandingPage;

// LandingPage.propTypes = {
// 	toggle: PropTypes.func.isRequired
// };
