import React from 'react';

import HeaderContainer from './header/header_container';
import MainContainer from './main/main_container';
import PlayControls from './playcontrols/play_controls';

const App = () => (
  <div className="wrapper">
    <HeaderContainer />
    <MainContainer />
    <PlayControls />
  </div>
);

export default App;