import React from 'react';
import { 
  Route,
  Link,
  BrowserRouter,
  Switch
} from 'react-router-dom';

import { AuthRoute } from '../util/route_util';

import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import PlayControls from './playcontrols/play_controls';


const NoMatchPage = () => {
  return (
    <h3>404 - Not found</h3>
  );
};

const Index= () => {
  return (
    <h3>index for now</h3>
  );
};

const App = () => (
  <div className="wrapper">
    <header className="banner">
      <div className="inner-header">
        <div className="header-left">
          <Link to="/explore" className="logo">Logo</Link>&nbsp;
          <Link to="/explore">Home</Link>&nbsp;
          <Link to="/stream">Stream</Link>&nbsp;
          <Link to="/library">Library</Link>
        </div>
        
        <GreetingContainer />
      </div>
    </header>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    <div className="main">
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/explore" component={Index} />
        <Route exact path="/stream" component={Index} />
        <Route exact path="/library" component={Index} />
        <Route component={NoMatchPage} />
      </Switch>
    </div>
    <PlayControls />
  </div>
);

export default App;