/**
 * Created by boris on 7/25/2017.
 */
import React from 'react'
import {connect} from 'react-redux'
import * as courseActions from '../../actions/courseActions'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import CourseList from './CourseList'
class CoursesPage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={this.props.courses}/>
            </div>
        )
    }
}
//from the name it maps certain state pieces to the props of the component so that
//it has access to it
//mapDispatchToProps does a similar things but with actions. It gives access to dispatch certain actions
function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    }

}
function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators(courseActions,dispatch)
    }
}
CoursesPage.propTypes = {
    // dispatch:PropTypes.func.isRequired,
    courses:PropTypes.array.isRequired,
    actions:PropTypes.object.isRequired
}
export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage)