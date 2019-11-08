import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Dropdown from './dropdown';
import MessagesDropdown from './messages_dropdown';
import AlertsDropdown from './alerts_dropdown';

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
            className="nav-username"
        ><div>{currentUser.username}</div></Link>
        <AlertsDropdown />
        <MessagesDropdown />
        <Dropdown history={history} logout={logout}/>        
    </div>
);

export default LoggedInRight;