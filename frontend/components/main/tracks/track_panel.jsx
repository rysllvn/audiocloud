import React from 'react';
import { Link } from 'react-router-dom';

class TrackPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="track-panel">
                <button className="play-button-small" onClick={() => this.props.setCurrentTrack(this.props.track.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z"/></svg>
                </button>
                <div className="track-user-title">
                    <Link to={`/users/${this.props.user.id}`}>{this.props.user.username}</Link>
                    <Link to={`tracks/${this.props.track.id}`}>{this.props.track.title}</Link>  
                </div>
                               
            </li>            
        )
    }
}

export default TrackPanel;