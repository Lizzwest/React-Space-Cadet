import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
    
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#490066"}}>
            <div className="container">
                <NavLink className="landingLink" to="/">Landing Icon</NavLink>
                <NavLink className="nav-link" exact to="/logout">Exit</NavLink>
                        
            </div>
        </nav>
    );
}

export default Navbar;
