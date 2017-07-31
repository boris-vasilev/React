import {createStore,applyMiddleware,compose} from 'redux'
import rootReducer from '../reducers/index'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default function configureStore(initialState){
    return createStore(
        rootReducer,
        //Giving Chrome Redux DevTools access to the store. VERY USEFUL! Bad for production tho
        initialState,
        //Good for avoiding mutations. BAD FOR PRODUCTION
        //For more information on how composeEnhancers works to make devtools available with thunk
        //read https://github.com/zalmoxisus/redux-devtools-extension#user-content-12-advanced-store-setup
        composeEnhancers(applyMiddleware(thunk,reduxImmutableStateInvariant()))
    )
}