import { combineReducers } from 'redux';
// using a name import to get the combineReducers function from the Redux package.

import courses from './courseReducer';
// reducer we just created (courseReducer.js)
// Since we are exporting default from courseReducer, we can name this import whatever we like.

const rootReducer = combineReducers(
	{ courses: courses } // or just {courses}
);
// rootReducer will combine all of our reducers together.

export default rootReducer;
