import React from 'react';
import Track from './track';

class TrackIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tracks: []
        };
    }

    fetchTracks(userId) {
        this.props.getUserTracks(userId)
            .then(
                result => {
                    this.setState({
                        tracks: Object.values(result.tracks)
                    })
                }
            )
    }

    componentDidMount() {
        this.fetchTracks(this.props.userId)
    }

    componentDidUpdate(prevProps) {
        if (this.props.userId !== prevProps.userId) {
            this.fetchTracks(this.props.userId);
        }
    }

    render () {
        debugger
        return (
            <ul>
                {this.state.tracks.map(track => <Track track={track} />)}
            </ul>
        )
    }
}

export default TrackIndex;