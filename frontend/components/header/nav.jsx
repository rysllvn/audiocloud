import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = () => (
    <nav className="header-left">
          <Link className="header-nav" to="/explore">Home</Link>&nbsp;
          <Link className="header-nav" to="/stream">Stream</Link>&nbsp;
          <Link className="header-nav" to="/library">Library</Link>
    </nav>
)

export default HeaderNav;