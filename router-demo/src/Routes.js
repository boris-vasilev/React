/**
 * Created by boris on 7/16/2017.
 */
import React from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import SomeParamPage from './components/SomeParamPage'
import NotFoundPage from './components/NotFoundPage'
const Routes = ()=>(
    <div>
        <Switch>
            <Route exact path ='/' component={HomePage}/>
            <Route path='/home' component={HomePage}/>
            <Route path='/about' component={AboutPage}/>
            <Route path='/contact' render={params=>(
                <div>Hello from Contact Render</div>
            )}/>
            <Route path={'/parampage/:id/:name'} component={SomeParamPage}/>
            <Redirect from='/about-us' to='/about'/>
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
)
export default Routes