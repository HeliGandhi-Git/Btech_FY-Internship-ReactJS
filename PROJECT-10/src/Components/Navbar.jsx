import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {


    return ( <>
    
        <Link to="/todolist">TodoList</Link>|
        <Link to="/todoadd">TodoAdd</Link>
    </> );
}

export default Navbar;