import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButtonContainer from '../../playcontrols/toggle_button_container';

class Panel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="track-panel">                
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