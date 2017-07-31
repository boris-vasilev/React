/**
 * Created by boris on 7/25/2017.
 */
import React from 'react'
import {NavLink} from 'react-router-dom'
const Header = ()=>(
    <nav>
        <NavLink exact activeStyle={{color:'orange'}} to="/">Home |</NavLink>
        <NavLink exact activeStyle={{color:'orange'}} to="/about"> About |</NavLink>
        <NavLink exact activeStyle={{color:'orange'}} to="/courses"> Courses</NavLink>
    </nav>
)
export default Header