import React from 'react';
import { 
    Route,
    Switch
} from 'react-router-dom';

import LoginFormContainer from '../session/login_form_container';
import Explore from './explore';
import NoMatch from './no_match';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main">
                {this.props.modal && <LoginFormContainer />}
                <Switch>
                    <Route exact path="/" component={Explore} />
                    <Route exact path="/explore" component={Explore} />
                    <Route exact path="/stream" component={Explore} />
                    <Route exact path="/library" component={Explore} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        )
    }
}

export default Main;