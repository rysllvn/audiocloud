import React from 'react';

const SplashHeader = ({ setModalStatus }) => (
    <header className="header-container">
        <div className="header-inner">
            <img src="/assets/logo.png" className="logo-img header-left"/>
            <nav className="header-right">
                <button className="header-button" onClick={() => setModalStatus('signIn')}>Sign in</button>
                &nbsp;
                <button className="header-button" onClick={() => setModalStatus('createAccount')}>Create account</button>
            </nav>
        </div>
    </header>
);

export default SplashHeader;