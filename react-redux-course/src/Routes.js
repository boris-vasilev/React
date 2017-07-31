/**
 * Created by boris on 7/25/2017.
 */
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import HomePage from './components/home/HomePage'
import AboutPage from './components/about/AboutPage'
import CoursesPage from './components/courses/CoursesPage'
const Routes =()=> (
    <Switch>
        <Route path="/about" component={AboutPage}/>
        <Route path="/courses" component={CoursesPage}/>
        <Route exact path="/" component={HomePage}/>
    </Switch>
)
export default Routes