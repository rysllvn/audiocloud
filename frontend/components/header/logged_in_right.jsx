import React from 'react';
import { Link } from 'react-router-dom';

const handleLogout = (history, logout) => {
    history.push({
      pathname: "/",
    });
    logout();
};

const LoggedInRight = ({history, logout, username}) => (
    <div className="header-right">
        <Link to="/upload" className="nav-upload">Upload</Link>
        <a className="nav-username"><div>{username}</div></a>
        <a className="nav-alerts"><i className="fas fa-bell"></i></a>
        <a className="nav-messages"><i className="fas fa-envelope"></i></a>
        <a 
            className="nav-dropdown"
            onClick={() => handleLogout(history, logout)}
        ><i className="fas fa-ellipsis-h"></i></a>
    </div>
);

export default LoggedInRight;