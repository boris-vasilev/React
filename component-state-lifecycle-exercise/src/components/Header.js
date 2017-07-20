/**
 * Created by boris on 7/20/2017.
 */
import React from 'react'
import {Link} from 'react-router-dom'
let Header = ()=>(
    <nav>
        <Link to="/">Home </Link>
        <Link to='/books/all'>All Books </Link>
    </nav>
)
export default Header