import React from 'react';
import { Link } from 'react-router-dom';

const LoggedOutRight = ({setModalStatus}) => (
    <nav className="header-right">
        <button className="clear-button" onClick={() => setModalStatus('signIn')}>Sign in</button>
        &nbsp;
        <button className="orange-button" onClick={() => setModalStatus('createAccount')}>Create account</button>
        <Link className="upload-button" to="/upload">Upload</Link>
        <ul className="nav-dropdown">...</ul>
    </nav>
);

export default LoggedOutRight;