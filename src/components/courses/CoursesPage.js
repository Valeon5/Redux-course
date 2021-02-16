import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
// * -> everything.
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

class CoursesPage extends React.Component {
	state = {
		course: {
			title: '',
		},
	};

	handleChange = (event) => {
		const course = { ...this.state.course, title: event.target.value };
		// ...this.state.course -> copies the current course from state.
		// title: event.target.value -> sets the title in course to a new value.
		// So we use object spread to copy the state and then we overwrote the title
		// by setting it to the target.value passed in on the event.
		this.setState({ course: course });
		// We could just write {course}, because the right and left side are the same,
		// called the object shorthand syntax.
		// So, we've cloned the state, make a change to it, and then call setState
		// with that new object.
	};

	handleSubmit = (event) => {
		event.preventDefault();
		// debugger;
		this.props.actions.createCourse(this.state.course);
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h2>Courses</h2>
				<h3>Add Course</h3>
				<input
					type='text'
					onChange={this.handleChange} // onChange is a handler
					value={this.state.course.title}
				/>
				<input type='submit' value='Save' /> {/* submit button */}
				{this.props.courses.map((course) => (
					<div key={course.title}>{course.title}</div>
				))}
				{/* Everytime iterate over an array, React expects us to provide a key, which */}
				{/* helps React keep track of each element in the array */}
			</form>
		);
	}
}

CoursesPage.propTypes = {
	actions: PropTypes.object.isRequired,
	courses: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
	// debugger;
	return { courses: state.courses };
}
// mapStateToProps() determines what state is passed to our component via props.
// Be specific. Request only the data our component needs.
// ownProps lets us access props that are being attached to this component. We'll use this later.

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(courseActions, dispatch),
	};
	// Line 70 wraps all of our courseActions in a call to dispatch.
}
// The action that we choose to return in mapDispatchToProps will be available within our component on props.
// We wrap our action in a call to dispatch, and inside we call courseActions.createCourse and passed it
// the course that was received.

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
// We are 'decorating' our component using 'connect'
