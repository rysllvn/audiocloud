import React from 'react';

const SplashHeader = ({ setModalStatus }) => (
    <header>
        <p>Logo Here</p>
        <nav className="header-right">
            <button className="header-button" onClick={() => setModalStatus(true)}>Sign in</button>
            &nbsp;or&nbsp;
            <button className="header-button" onClick={() => setModalStatus(true)}>Create Account</button>
        </nav>
    </header>
);

export default SplashHeader;