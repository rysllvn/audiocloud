import React from 'react';
import { 
    Route,
    Switch
} from 'react-router-dom';

import LoginFormContainer from '../session/signin_form_container';
import SignupFormContainer from '../session/create_account_form_container';
import Explore from './explore';
import Library from './library';
import Stream from './stream';
import NoMatch from './no_match';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    modal() {
        if (this.props.modal === 'signIn') {
            return (
                <LoginFormContainer />
            )
        } else {
            return (
                <SignupFormContainer />
            )
        }
    }

    render() {
        return (
            <div className="main">
                {this.props.modal && this.modal()}
                <Switch>
                    <Route exact path="/" component={Explore} />
                    <Route exact path="/explore" component={Explore} />
                    <Route exact path="/stream" component={Stream} />
                    <Route exact path="/library" component={Library} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        )
    }
}

export default Main;