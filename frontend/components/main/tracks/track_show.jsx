import React from 'react';
import PanelContainer from './panel_container';

class TrackShow extends React.Component {
    componentDidMount() {
        this.props.getTrack(this.props.match.params.trackId);
    }

    componentDidUpdate() {
        
    }

    render() {
        let info = <h1>Loading Yo</h1>
        if (this.props.track) {
            info = <div>
                        <h1>{this.props.track.title}</h1>
                        <PanelContainer track={this.props.track} />
                    </div>
        }
        return (
            <div>
                {info}
            </div>
        )
    }
}

export default TrackShow;