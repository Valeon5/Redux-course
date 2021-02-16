// index.js is the entry point of our application
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// "as Router" is giving BrowserRouter the alias Router
// Then we wrap our application with the Router component

import 'bootstrap/dist/css/bootstrap.min.css';
// This will import the minified version of bootstrap.
// We configured webpack to handle CSS as well, so webpack will bundle this up and
// inject a reference to that bundled CSS into our index.html file.

import App from './components/App';
// we import an App component, that we will create later

import './index.css';
import configureStore from './redux/configureStore';
import { Provider as ReduxProvider } from 'react-redux';
// Provider is a higher order component that provides Redux store data to React (child) components.

const store = configureStore();
// We now have a configured instance of our store that's set to a constant called store.
// It can be useful to pass initial state into the store here (configureStore(initialState)) if
// we are server rendering or initializing our Redux store with data from local storage.

render(
	<ReduxProvider store={store}>
		<Router>
			<App />
		</Router>
	</ReduxProvider>,
	document.getElementById('app')
);
