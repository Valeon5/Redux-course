import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Route component comes with react-router-dom.
// We'll use it to declare our routes.
// Switch is a component that allows us to declare that only one route should match

import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import PageNotFound from './PageNotFound';
import CoursesPage from './courses/CoursesPage';

function App() {
	return (
		<div className='container-fluid'>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/about' component={AboutPage} />
				<Route path='/courses' component={CoursesPage} />
				<Route component={PageNotFound} />
			</Switch>
		</div>
	);
}

export default App;

// The empty path '/' is the route for our HomePage
// The 'exact' prop is provided so that only the empty Route matches,
// otherwise this route would also match any other Routes since slash is in
// every other Route.
