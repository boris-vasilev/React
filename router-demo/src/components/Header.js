/**
 * Created by boris on 7/16/2017.
 */
import React from 'react'
import {Link} from 'react-router-dom'
const Header = ()=>(
    <nav>
        <Link to='/home'>Home </Link>
        <Link to='/about'>About </Link>
        <Link to='/contact'>Contact us</Link>
    </nav>
)
export default Header