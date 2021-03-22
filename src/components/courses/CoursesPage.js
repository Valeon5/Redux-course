import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
// * -> everything.
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

class CoursesPage extends React.Component {
	render() {
		return (
			<>
				<h2>Courses</h2>

				{this.props.courses.map((course) => (
					<div key={course.title}>{course.title}</div>
				))}
				{/* Everytime iterate over an array, React expects us to provide a key, which */}
				{/* helps React keep track of each element in the array */}
			</>
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
