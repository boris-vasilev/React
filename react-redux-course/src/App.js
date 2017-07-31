import React, {Component} from 'react';
import './App.css';
// import PropTypes from 'prop-types'
import {BrowserRouter} from 'react-router-dom'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import Routes from './Routes'
import Header from './components/Header'
import {loadCourses} from './actions/courseActions'
const store = configureStore()
store.dispatch(loadCourses())
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <Header/>
                        <Routes/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}
export default App;
