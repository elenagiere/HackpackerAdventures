import React from 'react';
import SinglePost from './SinglePost.jsx';
import tripData from '../tripData.js';

export default function Posts () {

	const singlePosts = () =>
		tripData.map(aPost => {
			console.log(aPost.title);
			console.log(aPost.videoId);
			return (<SinglePost key={aPost.id} title={aPost.title} date={aPost.date} imgName={aPost.imgName} photoUrls={aPost.photoUrls} textFile={aPost.textFile} summaryText={aPost.summaryText} videoId={aPost.videoId} />);
		});

	return (
		<div className="card-section">
			<h2 className="cards-header">Browse All Posts</h2>
			<div className="card-list">
				{singlePosts()}
			</div>
		</div>
	);
}
