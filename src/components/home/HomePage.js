import React from 'react';
import { Link } from 'react-router-dom';
// react router handles clicks on any Link component
// so the page won't post back to the server.
// We want to handle all the routing in this app on the client.

const HomePage = () => (
	<div className='jumbotron'>
		<h1> Pluralsigth Administration</h1>
		<p>React, Redux and React Router for ultra-responsive apps</p>
		<Link to='about' className='btn btn-primary btn-lg'>
			Learn More
		</Link>
		<img src='https://imgur.com/qJZsB9g' alt='sadf'></img>
		<a href='https://imgur.com/qJZsB9g'>
			<img
				src='https://i.imgur.com/qJZsB9g.png'
				title='source: imgur.com'
			/>
		</a>

		<iframe
			src='https://drive.google.com/file/d/1fgMqIZ4TAYuzu8FZ96Yk6TXm4H7zeKPs/preview'
			width='640'
			height='210'></iframe>
	</div>
);

export default HomePage;
// if we forget to export, we won't be able to import it later
