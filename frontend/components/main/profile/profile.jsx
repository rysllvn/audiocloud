import React from 'react';

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
                    console.log(result);
                    this.setState({username: result.user.username})
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
            <h1>{this.state.username}'s profile page</h1>
        )
    }
}

export default Profile;