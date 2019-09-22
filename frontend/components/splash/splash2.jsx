import React from 'react';
import LoginFormContainer from '../session/signin_form_container';
import SignupFormContainer from '../session/create_account_form_container';
import { Link } from 'react-router-dom';
import TrackTileIndex from '../main/tracks/track_tile_index';
import { receiveCurrentUser } from '../../actions/session_actions';

const filled = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><circle cx="12" cy="12" r="12"/></svg>;

const cleared = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"/></svg>;

class Splash2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        };

        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
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

    prev() {
        const prev = document.querySelector('#prev-button');
        const next = document.querySelector('#next-button');
       
        prev.className = 'filled';
        next.className = 'cleared';
        
        if (this.state.counter === 0) return;
        const carouselSlide = document.querySelector('.carousel-slide');
        this.setState( state => {
            let newCount = state.counter - 1
            carouselSlide.style.transition = "transform 0.4s ease-in-out";
            carouselSlide.style.transform = 'translateX(' + (-1240*newCount) + 'px)';
            console.log(newCount);
            return {counter: newCount};
        });
        setTimeout(() => {
            this.next();
        }, 4900);
    }

    next() {
        const prev = document.querySelector('#prev-button');
        const next = document.querySelector('#next-button');
        
        prev.className = 'cleared';
        next.className = 'filled';
        
        if (this.state.counter === 1) return;
        const carouselSlide = document.querySelector('.carousel-slide');
        this.setState( state => {
            let newCount = state.counter + 1
            carouselSlide.style.transition = "transform 0.4s ease-in-out";
            carouselSlide.style.transform = 'translateX(' + (-1240*newCount) + 'px)';
            console.log(newCount);
            return {counter: newCount};
        });
        setTimeout(() => {
            this.prev();
        }, 4900);
        
    }

    componentDidMount() {
        setTimeout(() => {
            this.next();
        }, 4900);
        this.props.getTracks();
    }

    render() {
        let prevIcon;
        let nextIcon;

        if (this.state.counter === 0) {
            prevIcon = filled;
            nextIcon = cleared;
        } else {
            nextIcon = filled;
            prevIcon = cleared;
        }

        let tracks = Object.values(this.props.tracks);
        let newSongs = tracks.slice(0,5);
        let {setModalStatus} = this.props;

        return (
            <div>
                {this.props.modal && this.modal()}
                <div className="carousel-container">
                    <div className="carousel-slide">
                        <img className="splash1" src={window.splash1}/>
                        <img className="splash2" src={window.splash2}/>
                    </div>
                    
                    <div id="carousel-controls">
                        <button id="prev-button" onClick={this.prev}>
                            {prevIcon}
                        </button>
                        <button id="next-button" onClick={this.next}>
                            {nextIcon}
                        </button>
                    </div>

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
                    <h3 className="splash-welcome">Audiocloud, a Soundcloud clone</h3>
                </div>
                <div className="main">
                    <div className="splash-index">
                        <h2 className="splash-text">Hear what's trending for free in the Audiocloud community</h2>
                        <TrackTileIndex tracks={newSongs}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash2;