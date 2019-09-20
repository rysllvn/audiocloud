import React from 'react';
import { Link } from 'react-router-dom';

const PlayControlsTitle = ({artist, track}) => {
    let src;
    if (track.imageUrl) src = track.imageUrl;
    return (
        <div className="play-controls-song-info">
            <img className="control-pic" src={src}/>
            <div className="play-controls-header">
                <Link to={`/users/${artist.id}`}className="play-controls-artist">{artist.username}</Link>
                <h5 className="play-controls-title">{track.title}</h5>
            </div>
        </div> 
    )
};

export default PlayControlsTitle;