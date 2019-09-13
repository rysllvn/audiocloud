import React from 'react';

import HeaderContainer from './header/header_container';
import MainContainer from './main/main_container';
import PlayControls from './playcontrols/play_controls';
import Footer from './footer/footer';

const App = () => (
  <div className="wrapper">
    <HeaderContainer />
    <MainContainer />
    <Footer />
    <PlayControls />
  </div>
);

export default App;