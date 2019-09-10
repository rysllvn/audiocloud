import React from 'react';
import { Link } from 'react-router-dom';

const SplashHeader = () => (
    <header>
        <p>Logo Here</p>
        <nav className="header-right">
            <Link to="/login">Sign in</Link>
            &nbsp;or&nbsp;
            <Link to="/signup">Create account</Link>
        </nav>
    </header>
);

export default SplashHeader;