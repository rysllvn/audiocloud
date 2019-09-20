import React from 'react';
import { 
  Route,
  Switch
} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import HeaderContainer from './header/header_container';
import MainContainer from './main/main_container';
import PlayControlsContainer from './playcontrols/play_controls_container';
import SplashContainer from './splash/splash_container';
import Splash2Container from './splash/splash2_container';

const MainSite = () => (
  <div className="wrapper">
    <HeaderContainer />
    <MainContainer />
  </div>
);

const App = () => (
  <div className="wrapper">
    <Switch>
      <AuthRoute exact path="/" component={Splash2Container}/>
      <Route component={MainSite}/>
    </Switch>
    <PlayControlsContainer />
  </div>
);

export default App;