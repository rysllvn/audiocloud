import React from 'react';
import Track from './track';

const TrackIndex = ({tracks}) => {
    return (
        <ul>
            {tracks.map(track => <Track track={track} />)}
        </ul>
    )
};

export default TrackIndex;