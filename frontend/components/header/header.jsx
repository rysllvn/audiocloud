import React from 'react';
import Headernav from './nav';
import SearchBarContainer from '../main/search/search_bar_container';
import LoggedInRight from './logged_in_right';
import LoggedOutRight from './logged_out_right';

const Header = ({ currentUser, logout, setModalStatus, history }) => {
  let headerRight;
  if (currentUser) {
    headerRight = <LoggedInRight 
                    history={history}
                    logout={logout}
                    currentUser={currentUser}
                  />;
  } else {
    headerRight = <LoggedOutRight setModalStatus={setModalStatus} />;
  }

  return (
    <header className="header-container">
       <div className="header-inner">
         <Headernav loggedIn={!!currentUser}/>
         <SearchBarContainer container="header"/>
         {headerRight}
       </div>
     </header>    
  )
};


export default Header;