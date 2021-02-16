import * as types from './actionTypes';
export function createCourse(course) {
	// debugger;
	return { type: types.CREATE_COURSE, course };
}

// { type: 'CREATE_COURSE', course }; === { type: 'CREATE_COURSE', course: course  };
// createCourse takes a 'course' as a argument and returns a plain object that
// must have a 'type' property, the rest is up to us.
// For our data, we are passing along the course that is passed in as an argument.
