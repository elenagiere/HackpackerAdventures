import React from 'react';
// import Banner from './Banner.jsx';
// import { imagePath, textPath } from '../Constants.js';
import aboutBanner from '../static/images/LakeTahoeUs.jpg';
import { readTextFile } from '../utils';

class About extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			text: ''
		};
	}

	componentDidMount () {
		readTextFile('lorem.txt', (resp) => {
			this.setState({
					text: resp
			});
		});
	}

	render() {
		return (
			<div id="about-page" className="sub-page">
				{/* <Banner imgUrl={`${imagePath}/LakeTahoeUs.jpg`} altTag="explore Lake Tahoe" /> */}
				<div id="banner">
					<img className='img-banner' src={aboutBanner} alt='Hiking in Lake Tahoe' />
				</div>
				<div className="text-content">
					<h2 className="cards-header">Our Story</h2>
					<div className="summary-section">
						<div className="text">
							{this.state.text.split('\n').map((item, key) => {
								return <span key={key}>{item}<br /></span>
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
