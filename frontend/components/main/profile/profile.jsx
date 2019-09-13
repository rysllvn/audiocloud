import React from 'react';
import TrackIndex from '../tracks/tracks_index';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            tracks: []
        };
    }

    fetchUserData(userId) {
        this.props.getUser(userId)
            .then(
                result => {
                    this.setState({
                        username: result.user.username,
                        tracks: Object.values(result.user.tracks)
                    })
                }, 
            ).fail(() => {
                this.setState({username: 'add redirect to user not found or something here'})
            });
    }

    componentDidMount() {
        this.fetchUserData(this.props.userId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.userId !== prevProps.userId) {
            this.fetchUserData(this.props.userId);
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.username}'s profile page</h1>
                <ul>
                    { <TrackIndex tracks={this.state.tracks} /> }
                </ul>
            </div>
            
        )
    }
}

export default Profile;