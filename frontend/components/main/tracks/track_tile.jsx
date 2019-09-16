import React from 'react';

class TrackTile extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        <div>
            <li className="track-panel">
                <button className="play-button-small" onClick={() => this.props.setCurrentTrack(this.props.track.id)}>Play</button>
                <div className="track-user-title">
                    <p>{this.props.user.username}</p>
                    <div>{this.props.track.title}</div>  
                </div>
            </li>    
        </div>
    }
}

export default TrackTile;