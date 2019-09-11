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
        <p>{username}</p>&nbsp;
        <p>alerts</p>&nbsp;
        <p>messages</p>&nbsp;
        <button 
            className="header-button"
            onClick={() => handleLogout(history, logout)}
        >Log Out</button>
    </div>
);

export default LoggedInRight;