import React from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    return (
        <div className = 'Navbar'>
            <ul>
                <button><Link to = '/Home'>Home</Link></button>
                <button><Link to = '/About'>About</Link></button>
                <button><Link to = '/Projects'>Projects</Link></button>
                <button><Link to = '/Posts'>Articles</Link></button>
            </ul>
        </div>
    );
};

export default Navbar;