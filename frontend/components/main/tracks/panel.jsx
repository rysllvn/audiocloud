import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButtonContainer from '../../playcontrols/toggle_button_container';

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
        return (
            <li className="track-panel">       
                <div>{image}</div>
                <ToggleButtonContainer trackId={this.props.track.id} type="panel-toggle"/>
                <div className="track-panel-title">
                    <Link to={`/users/${this.props.user.id}`}>{this.props.user.username}</Link>
                    <Link to={`tracks/${this.props.track.id}`}>{this.props.track.title}</Link>  
                </div>                         
            </li>            
        )
    }
}

export default Panel;