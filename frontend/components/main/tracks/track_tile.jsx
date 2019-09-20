import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButtonContainer from '../../playcontrols/toggle_button_container';

class TrackTile extends React.Component {
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
        return (
            <li>
                <div className="track-tile">
                    {image}
                    <ToggleButtonContainer trackId={this.props.track.id} type="tile-toggle"/>
                </div>

                <div className="track-tile-title">
                    <Link className="title-user" to={`/users/${this.props.user.id}`}>{this.props.user.username}</Link>
                    <Link className="title-track" to={`tracks/${this.props.track.id}`}>{this.props.track.title}</Link>  
                </div>
            </li>            
        )
    }
}

export default TrackTile;