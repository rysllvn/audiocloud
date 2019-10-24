import React from 'react';
import { Link } from 'react-router-dom';

const PlayControlsTitle = ({artist, track}) => {
    let src;
    if (track.imageUrl) src = track.imageUrl;
    return (
        <div className="play-controls-song-info">
            <img className="control-pic" src={src}/>
            <div className="play-controls-header">
                <Link to={`/users/${artist.id}`} className="play-controls-artist">{artist.username}</Link>
                <Link to={`/tracks/${track.id}`} className="play-controls-title">{track.title}</Link>
            </div>
        </div> 
    )
};

export default PlayControlsTitle;