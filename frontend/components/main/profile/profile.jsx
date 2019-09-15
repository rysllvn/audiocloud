import React from 'react';
import TrackList from '../tracks/track_list';
import { Redirect } from 'react-router-dom';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            tracks: [],
            redirect: false
        };
    }

    fetchUserData(userId) {
        this.props.getUser(userId)
            .then(
                result => {
                    this.setState({
                        user: result.user
                    })
                },
            ).fail(() => {
                this.setState({redirect: true})
            });

        this.props.getUserTracks(userId)
            .then(
                result => {
                    this.setState({
                        tracks: Object.values(result.tracks)
                    })
                }
            ).fail(() => {
                console.log('no tracks found')
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
    
    renderRedirect()  {
        if (this.state.redirect) {
          return <Redirect to='/users/ohno' />
        }
    }

    render() {
        let trackList;
        if (this.state.tracks.length !== 0) {
            trackList = <TrackList tracks={this.state.tracks} />;
        } else {
            trackList = <h2>No tracks uploaded yet</h2>
        }
        return (
            <div>
                {this.renderRedirect()}
                <h1>{this.state.user.username}</h1>
                <ul>
                    {trackList}
                </ul>
            </div>
            
        )
    }
}

export default Profile;