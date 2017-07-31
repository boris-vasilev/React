/**
 * Created by boris on 7/27/2017.
 */
export default function courseReducer(state = [], action) {
    switch (action.type) {
        case 'LOAD_COURSES_SUCCESS':
            //all  state members(spread ...) + the new course
            // return [...state,Object.assign({}, action.course)]
            return action.courses
        default:
            return state
    }
}