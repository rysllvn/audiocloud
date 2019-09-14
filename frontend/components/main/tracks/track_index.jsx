import React from 'react';
import Track from './track';
import { setCurrentTrack } from '../../../actions/ui_actions';

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
        return (
            <ul>
                {this.state.tracks.map(track => <Track
                                                    key={track.id}
                                                    track={track}
                                                    setCurrentTrack={this.props.setCurrentTrack}
                                                />)}
            </ul>
        )
    }
}

export default TrackIndex;