import React from 'react';
import TrackIndexContainer from '../tracks/track_index_container';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        };
    }

    fetchUserData(userId) {
        this.props.getUser(userId)
            .then(
                result => {
                    this.setState({
                        username: result.user.username
                    })
                }, 
            ).fail(() => {
                this.setState({username: 'USER NOT FOUND'})
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
                <h1>{this.state.username}</h1>
                <ul>
                    { <TrackIndexContainer userId={this.props.userId} /> }
                </ul>
            </div>
            
        )
    }
}

export default Profile;