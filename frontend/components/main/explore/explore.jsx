import React from 'react';
import TrackPanelIndex from '../tracks/track_panel_index';

class Explore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: [],
        };
    }

    componentDidMount() {
        this.props.getTracks()
            .then( result => {
                this.setState({
                    tracks: Object.values(result.data.tracks).slice(0,12)
                })
            })
    }

    render() {
        return (
            <div className="main-body">
                <div className="panel">
                    <div className="panel-title">
                        <h2>Newest songs</h2>
                        <TrackPanelIndex tracks={this.state.tracks} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Explore;