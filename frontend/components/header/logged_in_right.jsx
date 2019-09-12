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
        <span>{username}</span>&nbsp;
        <span>alerts</span>&nbsp;
        <span>messages</span>&nbsp;
        <button 
            className="header-button"
            onClick={() => handleLogout(history, logout)}
        >Log Out</button>
        <ul className="nav-dropdown">...</ul>
    </div>
);

export default LoggedInRight;