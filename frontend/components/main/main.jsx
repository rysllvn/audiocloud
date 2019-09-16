import React from 'react';
import { 
    Route,
    Switch
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../../util/route_util';

import LoginFormContainer from '../session/signin_form_container';
import SignupFormContainer from '../session/create_account_form_container';
import Explore from './explore/explore';
import Library from './library/library';
import ProfileContainer from './profile/profile_container';
import UploadContainer from './upload/upload_container';
import Stream from './stream';
import UserNotFound from './profile/user_not_found';
import NoMatch from './no_match';
import RedirectLoginContainer from '../session/redirect_login_container';

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
                    {/* <AuthRoute exact path="/" component={Explore} /> */}
                    <Route exact path="/explore" component={Explore} />
                    <ProtectedRoute exact path="/library" component={Library} />
                    <ProtectedRoute exact path="/upload" component={UploadContainer} />
                    <ProtectedRoute exact path="/stream" component={Stream} />
                    <AuthRoute exact path="/login" component={RedirectLoginContainer} />
                    <Route exact path="users/ohno" component={UserNotFound} />
                    <Route path ="/users/:userId" component={ProfileContainer} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        )
    }
}

export default Main;