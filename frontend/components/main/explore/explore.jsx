import React from 'react';
import TrackTileIndex from '../tracks/track_tile_index';

class Explore extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getTracks();
    }

    render() {
        let tracks = Object.values(this.props.tracks);
        let newSongs = tracks.slice(0,5);
        let otherSongs = tracks.slice(5,10);
        let otherOtherSongs = tracks.slice(10,15);
        return (
            <div className="main-body">
                <div className="main-section">
                    <h2>Newest songs</h2>
                    <p>The latest hits, occasionaly updated maybe</p>
                    {tracks.length && <TrackTileIndex tracks={newSongs} />}
                </div>

                <div className="main-section">
                    <h2>Audiocloud charts</h2>
                    <p>Top hits from the week or just the first songs that popped out of the db</p>
                    {tracks.length && <TrackTileIndex tracks={otherSongs} />}
                </div>

                <div className="main-section">
                    <h2>More Songs</h2>
                    <p>Songs about songs</p>
                    {tracks.length && <TrackTileIndex tracks={otherOtherSongs} />}
                </div>
            </div>
        )
    }
}

export default Explore;