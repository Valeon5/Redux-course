import * as types from './actionTypes';
import * as courseApi from '../../api/courseApi';
// we add a reference to our courseApi since we are going to call it in our thunk

export function createCourse(course) {
	// debugger;
	return { type: types.CREATE_COURSE, course };
}

// { type: 'CREATE_COURSE', course }; === { type: 'CREATE_COURSE', course: course  };
// createCourse takes a 'course' as a argument and returns a plain object that
// must have a 'type' property, the rest is up to us.
// For our data, we are passing along the course that is passed in as an argument.

export function loadCoursesSuccess(courses) {
	return { type: types.LOAD_COURSES_SUCCESS, courses: courses };
}

// This is our first thunk:
export function loadCourses() {
	return function (dispatch) {
		return courseApi
			.getCourses()
			.then((courses) => {
				dispatch(loadCoursesSuccess(courses));
			})
			.catch((error) => {
				throw error;
			});
	};
}
