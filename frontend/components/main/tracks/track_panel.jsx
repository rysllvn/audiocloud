import React from 'react'

class TrackPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="track-panel">
                <button className="play-button-small" onClick={() => this.props.setCurrentTrack(this.props.track.id)}>Play</button>
                <div className="track-user-title">
                    <p>{this.props.user.username}</p>
                    <div>{this.props.track.title}</div>  
                </div>
                               
            </li>            
        )
    }
}

export default TrackPanel;