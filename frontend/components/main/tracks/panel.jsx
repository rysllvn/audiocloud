import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButtonContainer from '../../playcontrols/toggle_button_container';
import WaveSeek from './waveform';

class Panel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let image;
        if (this.props.track.imageUrl) {
            image = <img className="panel-image" src={this.props.track.imageUrl}/>;
        } else {
            image = <img className="panel-image" src={window.defaultTrackImage}/>;
        }
        
        const trackPlaying = this.props.currentTrack === this.props.track.id;
        
        return (
            <li className="track-panel">
                <div>{image}</div>
                <div className="track-panel-title">
                    <div className="panel-toggle-container">
                        <ToggleButtonContainer trackId={this.props.track.id} type="panel-toggle"/>
                    </div>
                    <div>
                        <Link className="title-user" to={`/users/${this.props.user.id}`}>{this.props.user.username}</Link>
                        <br/>
                        <Link className="title-user" to={`/tracks/${this.props.track.id}`}>{this.props.track.title}</Link>
                    </div>                    
                </div>
                {this.props.track.audioUrl && <WaveSeek trackPlaying={trackPlaying} audioUrl={this.props.track.audioUrl} />}
            </li>
        )
    }
}

export default Panel;