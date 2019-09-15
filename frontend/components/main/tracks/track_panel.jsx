import React from 'react'

class TrackPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                <h4>{this.props.track.title}</h4>
                <button onClick={() => this.props.setCurrentTrack(this.props.track.id)}>Play</button>
            </li>            
        )
    }
}

export default TrackPanel;