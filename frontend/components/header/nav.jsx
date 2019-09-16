import React from 'react';
import {  NavLink, Link } from 'react-router-dom';

const HeaderNav = ({loggedIn}) => {
    let logo;
    if (loggedIn) {
        logo = <Link to="/explore" className="logo-link"></Link>;
    } else {
        logo = <Link to="/" className="logo-link"></Link>;
    }
    return (
        <nav className="header-left">
            {logo}
            <NavLink activeClassName="header-nav-selected" className="header-nav" to="/explore">Home</NavLink>
            <NavLink activeClassName="header-nav-selected" className="header-nav" to="/stream">Stream</NavLink>
            <NavLink activeClassName="header-nav-selected" className="header-nav" to="/library">Library</NavLink>
        </nav>
    )
}    

export default HeaderNav;