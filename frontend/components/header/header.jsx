import React from 'react';
import { Link } from 'react-router-dom';
import SplashHeader from './splash_header';

const Header = ({ currentUser, logout, setModalStatus, history }) => {

  const handleLogout = () => {
    history.push({
      pathname: "/",
    });
    logout();
  };

  const loggedIn = () => (
    <header className="header-container">
      <div className="header-inner">
        <nav className="header-left">
          <img src="/assets/logo.png" className="logo-img"/>
          <Link to="/explore">Home</Link>&nbsp;
          <Link to="/stream">Stream</Link>&nbsp;
          <Link to="/library">Library</Link>
        </nav>
        <input type="search" placeholder="Search"></input>
        <div className="header-right">
          <p>{currentUser.username}</p>&nbsp;
          <p>alerts</p>&nbsp;
          <p>messages</p>&nbsp;
          <button className="header-button" onClick={handleLogout}>Log Out</button>
        </div>
      </div>
    </header>    
  );

  return currentUser ? loggedIn() : <SplashHeader setModalStatus={setModalStatus} />;
};


export default Header;