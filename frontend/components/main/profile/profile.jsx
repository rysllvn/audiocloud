import React from 'react';
import TrackPanelIndex from '../tracks/track_panel_index';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    fetchUserData(userId) {
        this.props.getUser(userId)
            .fail(() => {
                this.props.history.push('/ohno');
            });
        this.props.getUserTracks(userId);
    }

    componentDidMount() {
        this.fetchUserData(this.props.match.params.userId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.fetchUserData(this.props.match.params.userId);
        }
    }

    render() {
        if (!this.props.user) return null;
        return (
            <div>
                <h1>{this.props.user.username}</h1>
                <TrackPanelIndex tracks={this.props.tracks} />
            </div>
        )
    }
}

export default Profile;