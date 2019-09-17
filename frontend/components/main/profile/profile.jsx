import React from 'react';
import TrackTileIndex from '../tracks/track_tile_index';

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
        // const uploadProfilePic = <button>Upload Profile Pic</button>;
        if (!this.props.user) return null;
        return (
            <div>
                <h1>{this.props.user.username}</h1>
                {/* {this.props.user.id === this.props.currentUserId && uploadProfilePic} */}
                <TrackTileIndex tracks={this.props.tracks} />
            </div>
        )
    }
}

export default Profile;