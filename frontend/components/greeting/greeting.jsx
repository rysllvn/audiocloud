import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div>
      <p>Logo Here</p>
      <nav className="header-right">
        <Link to="/login">Sign in</Link>
        &nbsp;or&nbsp;
        <Link to="/signup">Create account</Link>
      </nav>
    </div>    
  );

  const loggedIn = () => (
    <div>
      <input type="search" placeholder="Search"></input>
      <nav className="header-right">
        <p>{currentUser.username}</p>&nbsp;
        <p>alerts</p>&nbsp;
        <p>messages</p>&nbsp;
        <button className="header-button" onClick={logout}>Log Out</button>
      </nav>
    </div>    
  );

  return currentUser ? loggedIn() : sessionLinks();
};


export default Greeting;