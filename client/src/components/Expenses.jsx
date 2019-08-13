import React from 'react';
import expenseBanner from '../../../static/images/expenseBanner2.jpg';
import { readTextFile } from '../utils';

class Expenses extends React.Component {

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

	render () {
		return (
			<div id="about-page" className="sub-page">
				<div id="banner">
			    	<img className='img-banner' src={expenseBanner} alt='expense banner' />
		   		</div>
				<div className="text-content">
					<h2 className="cards-header">Expenses</h2>
					<div className="summary-section">
						<div className="text">
							{this.state.text.split('\n').map((item, key) => {
								return <span key={key}>{item}<br/></span>
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Expenses;
