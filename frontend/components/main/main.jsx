import React from 'react';
import { 
    Route,
    Switch
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../../util/route_util';

import LoginFormContainer from '../session/signin_form_container';
import SignupFormContainer from '../session/create_account_form_container';
import ExploreContainer from './explore/explore_container';
import ProfileContainer from './profile/profile_container';
import UploadContainer from './upload/upload_container';
import UserNotFound from './profile/user_not_found';
import NoMatch from './no_match';
import RedirectLoginContainer from '../session/redirect_login_container';
import TrackShowContainer from './tracks/track_show_container';
import About from './about';
import SearchResultsContainer from './search/search_results_container';

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
                    <Route exact path="/explore" component={ExploreContainer} />
                    <ProtectedRoute exact path="/upload" component={UploadContainer} />
                    <AuthRoute exact path="/login" component={RedirectLoginContainer} />
                    {/* <Route exact path="/users/ohno" component={UserNotFound} /> */}
                    <Route path ="/tracks/:trackId" component={TrackShowContainer} />
                    <Route path ="/users/:userId" component={ProfileContainer} />
                    <Route path ="/about" component={About}/>
                    <Route path ="/search/:query" component={SearchResultsContainer} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        )
    }
}

export default Main;