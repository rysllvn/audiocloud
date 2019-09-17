import React from 'react';
import { Redirect } from 'react-router-dom';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    fetchUserData(userId) {
        this.props.getUser(userId)
            .fail(() => {
                this.props.history.push('/ohno');
            });
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
            </div>
        )
    }
}

export default Profile;