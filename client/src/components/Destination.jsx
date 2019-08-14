import React from 'react';
import Banner from './Banner.jsx';
import { publicImagePath } from '../Constants.js';
import YouTube from 'react-youtube';
import ReactMarkdown from 'react-markdown';

class Destination extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			text: '',
			markdown: null,
		}
	}

	componentDidMount() {
		fetch(require(`../static/markdown/${this.props.match.params.textFile}`))
			.then(response => {
				console.log('markdown fetch response');
				console.log(response);
				return response.text();
			})
			.then(text => {
				this.setState({
					markdown: text,
				})
			}).catch((err) => {
				console.log('markdown fetch error');
				console.log(err);
			});
	}

	_onReady(event) {
		// access to player in all event handlers via event.target
		event.target.pauseVideo();
	}

	render() {
		const { title, date, imgName, photoUrls, videoId } = this.props.match.params;
		// const photoList = () =>
		// photoUrls.split(',').map((url, i) => (<img key={i} className="sub-section" src={`${imagePath}/${url}`} alt="img" />));

		const videoOpts = {
			height: '390',
			width: '640',
			playerVars: { // https://developers.google.com/youtube/player_parameters
				autoplay: 0,
				host: 'https://www.youtube.com'
			}
		};

		const youtubeVideo = () => (videoId !== 'null' && videoId !== 'undefined') ? (
			<div className="youtube-wrapper">
				<YouTube
					className="youtube-div"
					videoId={videoId}
					opts={videoOpts}
					onReady={this._onReady}
				/>
			</div>
		) : null;

		return (
			<div id="destination" className="sub-page">
				<Banner imgName={imgName} altTag={title} />
				<div className="content">
					<div className="destination-content">
						<h1>{title}</h1>
						<p className="post-date">{date}</p>
						<div className="summary-section">
							<div className="clear-box"></div>
							<img className="spreadsheet" src={`${publicImagePath}/nzExpenses.png`} alt="breakdown of expenses" />
							<div className="trip-text">
								<ReactMarkdown source={this.state.markdown} escapeHtml={false} />
							</div>
						</div>
						{youtubeVideo()}
						{/* <div className="expenses-section">
							<h2 id="expenses">Expenses</h2>
							<div className="trip-expenses">
								<img className="spreadsheet" align="middle" src={`${publicImagePath}/nzExpenses.png`} alt="breakdown of expenses" />
								<span className="trip-text">
									<ReactMarkdown source={this.state.expensesMarkdown} escapeHtml={false} />
								</span>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		);
	}
}

export default Destination;
