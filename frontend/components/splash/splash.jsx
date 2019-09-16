import React from 'react';
import LoginFormContainer from '../session/signin_form_container';
import SignupFormContainer from '../session/create_account_form_container';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
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
        let {setModalStatus} = this.props;
        return (
            <div className="splash">
                {this.props.modal && this.modal()}
                <div className="header-splash">
                    <div className="inner-header-splash">
                        <div className="header-splash-left">
                            <div className="logo"></div>
                            <div className="logo-text">Audiocloud</div>
                        </div>
                        <div className="header-splash-right">
                            <button className="clear-button" onClick={() => setModalStatus('signIn')}>Sign in</button>
                            <button className="orange-button" onClick={() => setModalStatus('createAccount')}>Create account</button>
                        </div>
                    </div>
                    <div><h3 className="splash-welcome">Keep on improving this site</h3></div>
                </div>

                <div className="splash-center">
                        <form className="splash-search-form">
                            <input className="splash-search" type="search" placeholder="Search artists or tracks"/>
                        </form>
                        <p>or</p>
                        <Link className="splash-upload" to="/upload">Upload</Link>
                </div>
            </div>
        )
    }
}

export default Splash;