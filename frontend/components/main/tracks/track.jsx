import React from 'react';

const Track = ({track, setCurrentTrack}) => {

    return (
        <div>
            <h3>{track.title}</h3>
            <div>{track.description}</div>
            <p></p>
            <button onClick={() => setCurrentTrack(track.id)}>Play</button>
        </div>
    )    
};

export default Track;