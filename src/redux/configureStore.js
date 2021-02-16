import { createStore, applyMiddleware, compose } from 'redux';
// createStore -> function we call to create a Redux store.
// applyMiddleware -> function that let us work with middlewares.

import rootReducer from './reducers';
// Since we called the rootReducer index.js, we don't have to type './reducers/index', it is implied.

import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	// this will add support for Redux dev tools.
	return createStore(
		rootReducer,
		initialState,
		composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
	);
}

// With the initialState argument in configureStore,
// we could initialize our store with some data when we configure it.
// reduxImmutableStateInvariant will warn us if we mutate Redux state.
