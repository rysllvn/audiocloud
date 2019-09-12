import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = ({loggedIn}) => {
    let logo;
    if (loggedIn) {
        logo = <Link to="/explore" className="logo"></Link>;
    } else {
        logo = <Link to="/" className="logo"></Link>;
    }
    return (
        <nav className="header-left">
            {logo}
            <Link className="header-nav" to="/explore">Home</Link>
            <Link className="header-nav" to="/stream">Stream</Link>
            <Link className="header-nav" to="/library">Library</Link>
        </nav>
    )
}    

export default HeaderNav;