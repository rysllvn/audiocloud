import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const handleLogout = (history, logout) => {
    history.push({
      pathname: "/",
    });
    logout();
};

const LoggedInRight = ({history, logout, currentUser}) => (
    <div className="header-right">
        <NavLink
            activeClassName="header-nav-selected"
            to="/upload" className="nav-upload"
        >Upload</NavLink>
        <Link
            to={`/users/${currentUser.id}`}
            className="nav-upload"
        ><div>{currentUser.username}</div></Link>
        <a 
            className="nav-alerts"
        ><i className="fas fa-bell"></i></a>
        <a 
            className="nav-messages"
        ><i className="fas fa-envelope"></i></a>
        <a 
            className="nav-dropdown"
            onClick={() => handleLogout(history, logout)}
        ><i 
            className="fas fa-ellipsis-h"></i></a>
    </div>
);

export default LoggedInRight;