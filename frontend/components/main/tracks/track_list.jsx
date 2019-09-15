import React from 'react'
import Track from './track';

const TrackList = ({tracks}) => {
    return (
        <ul>
            {tracks.map(track => <Track
                key={track.id}
                track={track}
            />)}
        </ul>
    )
};

export default TrackList;