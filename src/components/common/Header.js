import React from 'react';
import { NavLink } from 'react-router-dom';
// NavLink is like a anchor <a> that React Router control for us.

const Header = () => {
	const activeStyle = { color: '#F15B2A' };

	return (
		<nav>
			<NavLink to='/' exact activeStyle={activeStyle}>
				Home
			</NavLink>{' '}
			{' | '}
			<NavLink to='/courses' activeStyle={activeStyle}>
				Courses
			</NavLink>
			{' | '}
			<NavLink to='/about' activeStyle={activeStyle}>
				About
			</NavLink>
		</nav>
	);
};

export default Header;

// Adding 'exact' to the NavLink will make it so
// this link will only receive the activeStyle when on the HomePage, if not it will always be colored.
