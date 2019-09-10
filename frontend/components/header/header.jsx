import React from 'react';
import { Link } from 'react-router-dom';
import SplashHeader from './splash_header';

const Header = ({ currentUser, logout }) => {
  const loggedIn = () => (
    <header>
      <nav className="header-left">
        <Link to="/explore" className="logo">Logo</Link>&nbsp;
        <Link to="/explore">Home</Link>&nbsp;
        <Link to="/stream">Stream</Link>&nbsp;
        <Link to="/library">Library</Link>
      </nav>
      <input type="search" placeholder="Search"></input>
      <div className="header-right">
        <p>{currentUser.username}</p>&nbsp;
        <p>alerts</p>&nbsp;
        <p>messages</p>&nbsp;
        <button className="header-button" onClick={logout}>Log Out</button>
      </div>
    </header>    
  );

  return currentUser ? loggedIn() : <SplashHeader />;
};


export default Header;