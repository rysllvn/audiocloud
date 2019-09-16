import React from 'react';
import TrackPanelIndex from '../tracks/track_panel_index';

class Explore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latest: [],
        };
    }

    componentDidMount() {
        this.props.getLatestTracks(5)
            .then( result => {
                this.setState({
                    latest: Object.values(result.tracks)
                })
            })
    }

    render() {
        return (
            <div className="main-body">
                <div className="panel">
                    <div className="panel-title">
                        <h2>New Music Now</h2>
                        <p>load last 4 here</p>
                        <TrackPanelIndex tracks={this.state.latest} />
                    </div>
                </div>
                <div className="panel">
                    <div className="panel-title">
                        <h2>Audiocloud Charts</h2>
                        <p>most comments here</p>
                    </div>
                </div>
                <div className="panel">
                    <div className="panel-title">
                        <h2>Artists you should know</h2>
                        <p>random list of artists/songs</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Explore;