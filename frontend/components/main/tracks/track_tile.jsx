import React from 'react';
import { Link } from 'react-router-dom';

class TrackTile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li >
                <div className="track-tile">
                    <button className="play-button" onClick={() => this.props.setCurrentTrack(this.props.track.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 24v-24l20 12-20 12z"/></svg>
                    </button>
                </div>                
                <div className="track-tile-title">
                    <Link to={`/users/${this.props.user.id}`}>{this.props.user.username}</Link>
                    <Link to={`tracks/${this.props.track.id}`}>{this.props.track.title}</Link>  
                </div>
                               
            </li>            
        )
    }
}

export default TrackTile;