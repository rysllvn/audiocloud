import React from 'react';
import TrackTileContainer from './track_tile_container';

const TrackTileIndex = ({tracks}) => {
    return (
        <ul className="track-tile-index">
            {tracks.map(track => <TrackTileContainer key={track.id} track={track} />)}
        </ul>
    )
};

export default TrackTileIndex;