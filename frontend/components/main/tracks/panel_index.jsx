import React from 'react';
import PanelContainer from './panel_container';

const PanelIndex = ({tracks}) => {
    return (
        <ul className="track-panel-index">
            {tracks.map(track => <PanelContainer key={track.id} track={track} />)}
        </ul>
    )
};

export default PanelIndex;