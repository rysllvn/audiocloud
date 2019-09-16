import React from 'react';
import TrackPanelContainer from './track_panel_container';

const TrackPanelIndex = ({tracks}) => {
    return (
        <ul>
            {tracks.map(track => <TrackPanelContainer key={track.id} track={track} />)}
        </ul>
    )
};

export default TrackPanelIndex;