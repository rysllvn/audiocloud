import React from 'react';
import { Link } from 'react-router-dom';

const SplashHeader = ({ setModalStatus }) => (
    <header className="header-container">
        <div className="header-inner">
            <img src="/assets/logo.png" className="logo-img header-left"/>
            <nav className="header-right">
                <button className="clear-button" onClick={() => setModalStatus('signIn')}>Sign in</button>
                &nbsp;
                <button className="orange-button" onClick={() => setModalStatus('createAccount')}>Create account</button>
                <Link className="upload-button" to="/upload">Upload</Link>
            </nav>
        </div>
    </header>
);

export default SplashHeader;