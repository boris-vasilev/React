/**
 * Created by boris on 7/20/2017.
 */
import React from 'react'
import {Route,Switch} from 'react-router-dom'
import HomePage from './components/HomePage'
let Routes = ()=>(
    <Switch>
        <Route path="/" component={HomePage}/>
    </Switch>
)
export default Routes
