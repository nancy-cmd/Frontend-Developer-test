import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {

    return(
        <>
        <header>
            <Link to="/" className='link'> Events </Link> 
            <Link to="/museum" className='link'>Museum</Link> 
            <Link to="/arts" className='link'> Arts </Link> 
            <Link to="/gallaries" className='link'>Gallaries</Link> 
            <Link to="/login" className='link'> Login </Link> 
            <Link to="/explore" className='link'>Explore arts</Link> 
        </header>
        </>
    )
}

export default Header;