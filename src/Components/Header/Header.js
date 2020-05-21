import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {

    return(
        <div className='header'>
            <div className='addbtn'>
            	<Link to='/add'><span className='btn headingPost'>Add Trail</span></Link>
            </div>
            <h1 className='title'><span id='accent'>Hiking</span> Arizona</h1>
        </div>
    )
}

export default Header;