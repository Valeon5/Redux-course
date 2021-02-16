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
	</div>
);

export default HomePage;
// if we forget to export, we won't be able to import it later
