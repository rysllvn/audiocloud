import React from 'react';
import LoginFormContainer from '../session/signin_form_container';
import SignupFormContainer from '../session/create_account_form_container';
import { Link } from 'react-router-dom';
import TrackTileIndex from '../main/tracks/track_tile_index';

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getTracks();
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
        let tracks = Object.values(this.props.tracks);
        let newSongs = tracks.slice(0,5);
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
                    <div><h3 className="splash-welcome">Audiocloud, a Soundcloud clone</h3></div>
                </div>
                <div className="main">
                    <div className="splash-center">
                        <form className="splash-search-form">
                            <input className="splash-search" type="search" placeholder="Search artists or tracks"/>
                        </form>
                        <p>or</p>
                        <Link className="splash-upload" to="/upload">Upload</Link>
                    </div>
                    <div className="splash-index">
                        <h2 className="splash-text">Hear what's trending for free in the Audiocloud community</h2>
                        <TrackTileIndex tracks={newSongs}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash;