import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = () => (
    <nav className="header-left">
        <div className="logo">
            <img src="/assets/logo.png" className="logo-img"/>            
        </div>
        <Link className="header-nav" to="/explore">Home</Link>&nbsp;
        <Link className="header-nav" to="/stream">Stream</Link>&nbsp;
        <Link className="header-nav" to="/library">Library</Link>
    </nav>
)

export default HeaderNav;