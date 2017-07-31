/**
 * Created by boris on 7/25/2017.
 */
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
export default class HomePage extends Component{
    render(){
        return(
            <div>
                <h1>Pluralsight Administration</h1>
                <p>React, Redux, React Router in ES6 for ultra-responsive web apps.</p>
                <Link to="about">Learn more</Link>
            </div>
        )
    }
}
