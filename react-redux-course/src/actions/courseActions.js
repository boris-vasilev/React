/**
 * Created by boris on 7/27/2017.
 */

import courseApi from '../api/mockCourseApi'
export function loadCoursesSuccess(courses) {
    return{
        type:'LOAD_COURSES_SUCCESS',
        courses
    }
}
export function loadCourses() {
    return function (dispatch) {
        courseApi.getAllCourses().then(courses=>{
            dispatch(loadCoursesSuccess(courses))
        }).catch(error=>{
            throw(error)
        })
    }
}