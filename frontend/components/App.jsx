import React from 'react';
import { 
  Route,
  Switch
} from 'react-router-dom';

import { AuthRoute } from '../util/route_util';

import HeaderContainer from './header/header_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Explore from './main/explore';
import NoMatch from './main/no_match';
import PlayControls from './playcontrols/play_controls';

const App = () => (
  <div className="wrapper">
    <HeaderContainer />

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />

    <div className="main">
      <Switch>
        <Route exact path="/" component={Explore} />
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/stream" component={Explore} />
        <Route exact path="/library" component={Explore} />
        <Route component={NoMatch} />
      </Switch>
    </div>

    <PlayControls />

  </div>
);

export default App;