import React from 'react';

const SplashHeader = ({ setModalStatus }) => (
    <header>
        <p>Logo Here</p>
        <nav className="header-right">
            <button className="header-button" onClick={() => setModalStatus('signIn')}>Sign in</button>
            &nbsp;
            <button className="header-button" onClick={() => setModalStatus('createAccount')}>Create account</button>
        </nav>
    </header>
);

export default SplashHeader;